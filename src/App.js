// src/App.js
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';
import { SkeletonGrid } from './components/ui/skeleton';
import './index.css';
const Experience = React.lazy(() => import('./components/Experience'));
// const Projects = React.lazy(() => import('./components/Projects'));
const Skills = React.lazy(() => import('./components/Skills'));
const Education = React.lazy(() => import('./components/Education'));
const Certifications = React.lazy(() => import('./components/Certifications'));
const Contact = React.lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>James Perez - Software Engineer</title>
        <meta name="description" content="Welcome to James Perez's portfolio website. I'm James Perez, a passionate software developer showcasing my projects, skills, and experience." />
        <meta name="keywords" content="Adityasri, AdityaSri, adityasri.in, James Perez,adityasri portfolio, Software Engineer" />
        <meta name="author" content="James Perez" />
        <meta property="og:title" content="James Perez - Portfolio" />
        <meta property="og:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adityasri.in" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="James Perez - Portfolio" />
        <meta name="twitter:description" content="Welcome to my portfolio website. Explore my projects, skills, and professional experience." />
        <link rel="canonical" href="https://adityasri.in" />
        {/* SEO: Structured Data for Google */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "James Perez",
            "url": "https://adityasri.in",
            "sameAs": [
              "https://github.com/adityasrivastava29",
              "https://www.linkedin.com/in/adityakumar29/",
              "https://x.com/adityasri_in"
            ],
            "jobTitle": "Software Engineer",
            "description": "Portfolio website of James Perez, Software Engineer. Projects, skills, experience, and contact information."
          }
        `}</script>
        {/* SEO: Robots meta tag */}
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <div className="main-content">
        <About />
        <Suspense fallback={<div className="container py-16"><SkeletonGrid count={6} /></div>}>
          <Experience />
          {/* <Projects /> */}
          <Skills />
          <Education />
          <Certifications />
          <Contact />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;