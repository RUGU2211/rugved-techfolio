import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import styles from './certifications.module.css';

export const meta = () => {
  return [{
    title: 'Certifications | Rugved Manoj Kharde',
    description: 'Certifications and workshops attended by Rugved Manoj Kharde.',
  }];
};

const certificationData = {
  'Microsoft Certifications': [
    'Azure Fundamentals az-900',
    'Machine Learning & AI using Python',
    'Cyber security & Ethical Hacking',
    'Cloud Computing With Azure'
  ],
  'Conference & Workshop Held Under CSI Mumbai Chapter': [
    'CYBER FIFC Conference and Cyber Security Awards Held at IIT Bombay',
    '1st International Conference on Computational Aspects of IOT and HCI',
    'Projectathon 2.0 Nation Level Project Competition',
    'Fundamentals Of Figma, Communicate & Connect, Chrome Extensions, GIT Fundamentals'
  ],
  'Ifuture Technologies Certifications': [
    'Networking Security',
    'CCNA - Cisco Certified Network Associate',
    'MCSA - Microsoft Certified Solutions Associate',
    'AWS - Amazon Web Services',
    'Azure',
    'IT Infrastructure',
    'Redhat',
    'Ethical Hacking',
    'Python'
  ],
  'Other Certifications / Short Courses': [
    'udemy Ethical Hacking From Scratch',
    'devtown - Hotstar Clone using Html CSS & Bootstrap',
    'D.B.J College - C++ Program Testing Course',
    'Certificate Course on ROBOICS - 120 hrs',
    'Cyber Security Legal Awareness and Self-Defense Workshop on Python',
    'Workshop on Web Development, Bootcamp Personality Assessment and Corporate Training.'
  ],
  'Extracurricular Activities': [
    'General Secretary of the CSI Mumbai Chapter at B.K. Birla College.',
    'General Secretary & Technical Head for the Intercollegiate Tech-Fest 2024.'
  ]
};

export default function Certifications() {
  return (
    <Section className={styles.certificationsPage} id="certifications">
      <Heading level={2} className={styles.sectionHeading}>
        Certifications & Workshops
      </Heading>
      <div className={styles.certificationCategories}>
        {Object.entries(certificationData).map(([category, items], index) => (
          <div 
            key={category} 
            className={styles.category}
            data-index={index}
          >
            <Heading level={3} className={styles.categoryHeading}>{category}</Heading>
            <ul className={styles.certificateList}>
              {items.map((item, itemIndex) => (
                <li 
                  key={`${category}-${itemIndex}`} 
                  className={styles.certificateItem}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
} 