import React from 'react';
import './CV.css';

function EducationItem({ institution, duration, courses }) {
  return (
    <div className="education-item">
      <h3>{institution}</h3>
      <p>{duration}</p>
      <ul>
        {courses.map((course) => (
          <li>{course}</li>
        ))}
      </ul>
    </div>
  );
}

function CoopStatus({ status }) {
  return (
    <div className="coop-status">
      <h3>CO-OP/Internship</h3>
      <p>{status}</p>
    </div>
  );
}

function Skills({ technical, interpersonal }) {
  return (
    <div className="skills">
      <div className="technical-skills">
        <h3>Technical Skills</h3>
        <ul>
          {technical.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="interpersonal-skills">
        <h3>Interpersonal Skills</h3>
        <ul>
          {interpersonal.map((skill) => (
            <li>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function OtherExperience({ title, duration, location, responsibilities }) {
  return (
    <div className="other-experience">
      <h3>{title}</h3>
      <p>{duration}</p>
      <p>{location}</p>
      <ul>
        {responsibilities.map((responsibility) => (
          <li>{responsibility}</li>
        ))}
      </ul>
    </div>
  );
}

function CV() {
  // Education data
  const educationData = [
    {
      institution: 'Bachelor of Computer Science, Saint Mary’s University',
      duration: '2021 – 2022',
      courses: ['Intro to Web development', 'Data Structure & Algorithms', 'Introduction to Programing','Object Oriented Programming'],
    },
    {
      institution: 'Bachelor of Computer Science, Dalhousie University',
      duration: '2022 – 2025',
      courses: ['Software Development', 'Database Systems', 'System Programming','Computer Systems',
      'Software Engineering','Data Mining','Experimental Robotics'],
    },
  ];

  // Coop status data
  const coopStatusData = 'Seeking a 4-to-8-month work term in fall 2023';

  // Skills data
  // Skills data
  const technicalSkillsData = [
    'Java, C, JavaScript, HTML, CSS, SQL, Aseba, Python, R',
    'Unix',
    'Git, GitHub',
    'jQuery, Bootstrap, React, Springboot',
    'IntelliJ, NetBeans, VCS',
  ];

  const interpersonalSkillsData = [
    'Time Management', 'Organization', 'Written and Verbal Communication',
    'Collaboration', 'Dual language (English and Urdu)'
  ];

  // Other Experience data
  const otherExperienceData = [
    {
      title: 'Bakery Clerk, Atlantic Superstore (Part-Time)',
      duration: '2021-present',
      location: 'Halifax, NS',
      responsibilities: [
        'Monitored counter and display inventory by replacing stock and requesting new products from the kitchen to keep areas well-stocked for maximum sales.',
        'Arranged bakery displays to showcase baked goods, cakes, and pies to drive product sales.',
        'Answered customer questions about products and services, helped locate merchandise, and promoted key items.',
      ],
    },
    {
      title: 'Security Officer, Shadow Security (On-Call)',
      duration: '2022 – present',
      location: 'Halifax, NS',
      responsibilities: [
        'Acted quickly during emergency situations to reduce opportunities for damage and injury.',
        'Protected facility and property guests by regularly circulating premises and monitoring surveillance feeds.',
        'Conducted regular patrols of key areas to spot and control security concerns.',
        'Oversaw daily monitoring and patrolled buildings, grounds, and work sites.',
      ],
    },
  ];

  return (
    <div className="cv-container">
      <h1>CV</h1>
      <div className="sections">
        <div className="left-section">
          <div className="education-section">
            <h2>Education</h2>
            {educationData.map((education) => (
              <EducationItem
                institution={education.institution}
                duration={education.duration}
                courses={education.courses}
              />
            ))}
          </div>
          <div className="skills-section">
            <h2>Skills</h2>
            <Skills technical={technicalSkillsData} interpersonal={interpersonalSkillsData} />
          </div>
        </div>
        <div className="right-section">
          <CoopStatus status={coopStatusData} />
          <div className="other-experience-section">
            <h2>Other Experience</h2>
            {otherExperienceData.map((experience) => (
              <OtherExperience
                title={experience.title}
                duration={experience.duration}
                location={experience.location}
                responsibilities={experience.responsibilities}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CV;
