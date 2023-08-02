import React from 'react';
import './Projects.css';

function ProjectCard({ title, technologies, description }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p className="technologies">{technologies}</p>
      <p>{description}</p>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="header">Projects</h1>
      <div className="project-cards">
        <ProjectCard
          title="Personal Portfolio"
          technologies="React, CSS"
          description="I have made a personal portfolio of myself where I can express my work and progress"
        />
        <ProjectCard
          title="Blogging Website"
          technologies="HTML, CSS, JS, JQUERY, Bootstrap, MongoDB"
          description="Collaborated with a diverse team of 4 students to build a website helping patients write and publish their blogs. Identified assignment requirements, then completed the analysis, design, implementation, and testing. Successfully communicated the scope of the project by writing clear, accurate technical specifications and presenting the project summary to the class."
        />
        <ProjectCard
          title="ROCK-PAPER-SCISSOR"
          technologies="C, Unix, Git, Socket Programming"
          description="Developed a client and server side where the client can play ROCK-PAPER-SCISSOR with the server. Developed the program with great efficiency and documentation."
        />
        <ProjectCard
          title="Task Management Application (Trello)"
          technologies="ReactJS, SQL, Springboot, Git, CSS"
          description="Developed a Trello Clone using APIs, Front-end, and backend languages with a group of classmates using software engineering principles. Worked specifically on the front end using ReactJS and helped in developing database entity diagrams. Also worked on the backend for development using Springboot."
        />
        <ProjectCard
          title="Line Follower & Obstacle Avoider"
          technologies="Java, Aseba"
          description="Developed a robotics program where a robot can follow a line and avoid all the obstacles that come in the way.I Made a report explaining all the codes and our future work."
        />
      </div>

    </div>
  );
}

export default Projects;
