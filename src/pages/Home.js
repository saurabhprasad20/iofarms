// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom'; // Ensure you have React Router set up

const Home = () => (
  <div>
    <h1>Welcome to IOFarms!</h1>

    <section>
      <h2>Empowering Lives through Organic Farming</h2>
      <p>
        IOFarms is a pioneering initiative by the SSG Group aimed at creating sustainable employment opportunities for individuals with visual impairments through organic farming. Our mission is to empower individuals with disabilities by providing them with the tools and opportunities to succeed in farming, a field where they can thrive and contribute significantly.
      </p>
      <p>
      Through our work, we aim to open up new avenues of self-sustainability for persons with visual impairments and create an inclusive, sustainable farming model. This initiative is starting in Ranchi, Jharkhand, where we’re making strides to ensure that individuals can thrive irrespective of their physical challenges.
      </p>
      <p>
        To learn more about our mission, vision, and the impact we are making, <Link to="/blogs/1">read more about our work here.</Link>
      </p>
    </section>
    
    <section>
      <h2>Join Us in Making a Difference</h2>
      <p>
        We invite you to support our mission by spreading the word, joining our efforts, or simply learning more about our work. Every step forward is a step toward a more inclusive and prosperous future. Let’s work together to ensure that no one is left behind.
      </p>
    </section>
  </div>
);

export default Home;
