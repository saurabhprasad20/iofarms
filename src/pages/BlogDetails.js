import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogs from '../data/blogs.json';
import { marked } from 'marked'; // Corrected import for marked

const BlogDetails = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  const blogIndex = blogs.findIndex(b => b.id === parseInt(id));
  const blog = blogs[blogIndex];

  useEffect(() => {
    if (!blog) return;

    const markdownPath = process.env.PUBLIC_URL + blog.content;
    // Fetch the content of the Markdown file from the path specified in the `content` field
    fetch(markdownPath)
      .then(response => response.text()) // Read the Markdown file as text
      .then(data => {
        setContent(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching blog content:', error);
        setLoading(false);
      });
  }, [blog]);

  if (!blog) return <h1>Blog Not Found</h1>;

  if (loading) return <h1>Loading...</h1>;

  // Parse the Markdown content into HTML
  const parsedContent = marked(content);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: parsedContent }} /> {/* Render parsed HTML */}
      <div>
        {blogIndex > 0 && <Link to={`/blogs/${blogs[blogIndex - 1].id}`}>Previous</Link>}
        {blogIndex < blogs.length - 1 && <Link to={`/blogs/${blogs[blogIndex + 1].id}`}>Next</Link>}
      </div>
    </div>
  );
};

export default BlogDetails;
