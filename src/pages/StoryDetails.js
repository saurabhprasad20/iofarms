import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import stories from '../data/stories.json';
import { marked } from 'marked'; 

const StoryDetails = () => {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);

  const storyIndex = stories.findIndex(s => s.id === parseInt(id));
  const story = stories[storyIndex];

  useEffect(() => {
    if (!story) return;
    const markdownPath = process.env.PUBLIC_URL + story.content;
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
  }, [story]);

  if (!story) return <h1>Story Not Found</h1>;

  if (loading) return <h1>Loading...</h1>;

  // Parse the Markdown content into HTML
  const parsedContent = marked(content);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: parsedContent }} /> {/* Render parsed HTML */}
      <div>
        {storyIndex > 0 && <Link to={`/stories/${stories[storyIndex - 1].id}`}>Previous</Link>}
        {storyIndex < stories.length - 1 && <Link to={`/stories/${stories[storyIndex + 1].id}`}>Next</Link>}
      </div>
    </div>
  );
};

export default StoryDetails;
