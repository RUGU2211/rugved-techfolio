import { Fragment } from 'react';
import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Link } from '~/components/link'; // Assuming you have a Link component (can be a standard <a> or a routing Link)

// Import the CSS module for styling
import styles from './projects.module.css';

export const meta = () => {
  return [{
    title: 'Projects | Rugved Manoj Kharde',
    description: 'Showcasing my portfolio projects.',
  }];
};

export default function Projects() {
  const projects = [
    {
      title: 'GenZ_Finance (Java)',
      description: 'Android app for budgeting and expense tracking.',
      link: 'https://github.com/RUGU2211/Genz_Finance',
      technologies: ['Java', 'Android'],
    },
    {
      title: 'Diabetes_Prediction (Python + AI + ML)',
      description: 'AI system for diabetes risk prediction and treatment advice.',
      link: 'https://github.com/RUGU2211/Diabetes_Prediction',
      technologies: ['Python', 'AI', 'ML'],
    },
    {
      title: 'Enterprise Project Management System (React + Spring Boot + MySQL)',
      description: 'Platform for project planning and collaboration.',
      link: 'https://github.com/RUGU2211/Enterprise-Project-Management-System',
      technologies: ['React', 'Spring Boot', 'MySQL'],
    },
    {
      title: 'Online Event Management System (Java + Spring Boot + MySQL)',
      description: 'Web app for event registrations with Google authentication.',
      link: 'https://github.com/RUGU2211/Online-Event-Management-System',
      technologies: ['Java', 'Spring Boot', 'MySQL'],
    },
    {
      title: 'Web Application for Budgeting and Expense Tracking (Node.js + React + MongoDB)',
      description: 'Full-stack app for real-time budgeting with secure user authentication.',
      link: '/projects/budgeting-app',
      technologies: ['Node.js', 'React', 'MongoDB'],
    },
    {
      title: 'Portfolio Website (Node.js + React + MongoDB)',
      description: 'Full-stack dynamic portfolio website with backend for content management and secure user interactions.',
      link: 'https://github.com/RUGU2211/rugved-techfolio',
      technologies: ['JavaScript (62.5%)', 'CSS (30.4%)', 'MDX (4.3%)', 'GLSL (2.5%)', 'HTML (0.3%)'],
    },
  ];

  return (
    <Section className={styles.projectsPage} id="projects">
      <Fragment>
        <Heading level={2} className={styles.sectionHeading}>
          Projects
        </Heading>
        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <div key={project.link} className={styles.projectCard}>
              <div className={styles.projectContent}>
                <Heading level={3} className={styles.projectTitle}>{project.title}</Heading>
                <Text className={styles.projectDescription}>{project.description}</Text>
                {project.technologies && project.technologies.length > 0 && (
                  <div className={styles.projectTechnologies}>
                    {project.technologies.map(tech => (
                      <span key={tech} className={styles.technologyTag}>{tech}</span>
                    ))}
                  </div>
                )}
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewProjectButton}>
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    </Section>
  );
} 