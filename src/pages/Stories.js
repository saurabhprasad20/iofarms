// src/pages/Stories.js
import React from 'react';
import { Link } from 'react-router-dom';
import stories from '../data/stories.json';

const Stories = () => (
  <div>
    <h1>Stories</h1>
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          <Link to={`/stories/${story.id}`}>{story.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Stories;
