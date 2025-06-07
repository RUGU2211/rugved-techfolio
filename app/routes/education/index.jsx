import { baseMeta } from '~/utils/meta';
import { ProjectContainer, ProjectSection, ProjectTextRow, ProjectSectionHeading, ProjectSectionText } from '~/layouts/project';
import { Section } from '~/components/section'; // Assuming Section component is needed for overall page structure
import styles from './education.module.css';

const title = 'Education';
const description = 'Details about my educational background.';

export const meta = () => {
  return baseMeta({ title, description });
};

const educationEntries = [
  {
    institution: 'SVKM\'S NMIMS Mukesh Patel, Mumbai',
    degree: 'Master in Computer Application\nCGPA: 7.32/10',
    dates: '2024 - 2026',
  },
  {
    institution: 'B.K. Birla College, Kalyan',
    degree: 'Bachelor of Computer Science\nCGPA: 9.04/10',
    dates: '2021 - 2024',
  },
  {
    institution: 'Bharati Vidyapeeth, Pune',
    degree: 'Bachelor of Business Administration\nCGPA: 9.55/10',
    dates: '2021 - 2024',
  },
  {
    institution: 'KM Agrawal College, Kalyan',
    degree: 'HSC: 47.85',
    dates: '2020',
  },
  {
    institution: 'Sri Vani Vidyashala High School, Kalyan',
    degree: 'SSC: 66.00',
    dates: '2018',
  },
];

export default function Education() {
  return (
    <ProjectContainer className={styles.educationSection}>
      <Section>
        <ProjectTextRow>
          <ProjectSectionHeading>
            Education
          </ProjectSectionHeading>
          {/* Removed placeholder text */}
        </ProjectTextRow>
        
        <div className={styles.educationEntries}>
          {educationEntries.map((entry, index) => {
            // Split degree and CGPA/grade if present, but skip grade for HSC and SSC
            let degree = entry.degree;
            let grade = '';
            let showGrade = true;
            if (degree.includes('CGPA:')) {
              [degree, grade] = degree.split('CGPA:');
              degree = degree.trim();
              grade = 'CGPA: ' + grade.trim();
            } else if (degree.includes('HSC:')) {
              [degree] = degree.split('HSC:');
              degree = degree.trim();
              showGrade = false;
            } else if (degree.includes('SSC:')) {
              [degree] = degree.split('SSC:');
              degree = degree.trim();
              showGrade = false;
            }
            return (
            <div key={index} className={styles.educationEntryCard}>
              <div className={styles.educationDetails}>
                <h3 className={styles.institutionName}>{entry.institution}</h3>
                  <p className={styles.degree}>{degree}</p>
                  {grade && showGrade && <p className={styles.grade}>{grade}</p>}
              </div>
              <div className={styles.dates}>{entry.dates}</div>
            </div>
            );
          })}
        </div>
      </Section>
    </ProjectContainer>
  );
} 