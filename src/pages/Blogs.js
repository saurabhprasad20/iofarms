// src/pages/Blogs.js
import React from 'react';
import { Link } from 'react-router-dom';
import blogs from '../data/blogs.json';

const Blogs = () => (
  <div>
    <h1>Blogs</h1>
    <ul>
      {blogs.map(blog => (
        <li key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Blogs;
