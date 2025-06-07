import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Icon } from '~/components/icon';
import styles from './skills.module.css';

export const meta = () => {
  return [{
    title: 'Skills | Rugved Manoj Kharde',
    description: 'Technical and soft skills of Rugved Manoj Kharde.',
  }];
};

const technicalSkills = {
  'Programming Languages': {
    icon: 'code',
    skills: [
      'Java',
      'Python',
      'JavaScript',
      'HTML',
      'CSS',
      'XML',
      'JSON',
      'PL-SQL'
    ]
  },
  'Frameworks & Libraries': {
    icon: 'layers',
    skills: [
      'React.js',
      'Node.js',
      'Express.js',
      'SpringBoot',
      'Hibernate'
    ]
  },
  'Databases': {
    icon: 'database',
    skills: [
      'MongoDB',
      'Oracle',
      'SQL',
      'Firebase'
    ]
  },
  'Tools & Technologies': {
    icon: 'tools',
    skills: [
      'Git',
      'Docker',
      'AWS',
      'REST APIs',
      'Microservices'
    ]
  }
};

const softSkills = {
  'Communication': {
    icon: 'message-circle',
    skills: [
      'Team Collaboration',
      'Technical Writing',
      'Presentation Skills'
    ]
  },
  'Problem Solving': {
    icon: 'lightbulb',
    skills: [
      'Analytical Thinking',
      'Critical Thinking',
      'Debugging'
    ]
  },
  'Leadership': {
    icon: 'users',
    skills: [
      'Project Management',
      'Team Leadership',
      'Mentoring'
    ]
  },
  'Personal': {
    icon: 'user',
    skills: [
      'Time Management',
      'Adaptability',
      'Continuous Learning'
    ]
  }
};

export default function Skills() {
  return (
    <Section className={styles.skillsPage} id="skills">
      <div className={styles.container}>
        <Heading level={2} className={styles.sectionHeading}>
          Technical Skills
        </Heading>
        <div className={styles.skillsGrid}>
          {Object.entries(technicalSkills).map(([category, { icon, skills }], index) => (
            <div 
              key={`tech-${category}`} 
              className={styles.skillCategory}
              data-index={index}
            >
              <div className={styles.categoryTitle}>
                {icon && <Icon name={icon} />}
                <span>{category}</span>
              </div>
              <div className={styles.skillsList}>
                {skills.map((skill) => (
                  <span key={`tech-${category}-${skill}`} className={styles.skillItem}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Heading level={2} className={styles.sectionHeading}>
          Soft Skills
        </Heading>
        <div className={styles.skillsGrid}>
          {Object.entries(softSkills).map(([category, { icon, skills }], index) => (
            <div 
              key={`soft-${category}`} 
              className={styles.skillCategory}
              data-index={index}
            >
              <div className={styles.categoryTitle}>
                {icon && <Icon name={icon} />}
                <span>{category}</span>
              </div>
              <div className={styles.skillsList}>
                {skills.map((skill) => (
                  <span key={`soft-${category}-${skill}`} className={styles.skillItem}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
