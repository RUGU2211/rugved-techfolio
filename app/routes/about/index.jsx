import { Fragment } from 'react';
import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import styles from './about.module.css';

export const meta = () => {
  return [{
    title: 'About | Rugved Manoj Kharde',
    description: 'Learn more about Rugved Manoj Kharde.',
  }];
};

export default function About() {
  return (
    <Section className={styles.aboutPage} id="about">
      <Fragment>
        <Heading level={2} className={styles.sectionHeading}>
          About Me
        </Heading>
        <div className={styles.aboutLayout}>
          <div className={styles.aboutTextColumn}>
            <Text className={styles.aboutText} size="l" as="p">
              Hi there
            </Text>
            <Text className={styles.aboutText} size="l" as="p">
              I'm Rugved, currently based in Kalyan and pursuing my MCA at
              NMIMS Mumbai. I'm passionate about building software that makes
              life easier—whether it's Android apps for finance tracking or web
              platforms using Java, Spring Boot, Node.js, and MongoDB. My work
              blends full-stack development with a strong foundation in data
              handling and security.
            </Text>
            <Text className={styles.aboutText} size="l" as="p">
              I enjoy diving into new tools and frameworks, especially anything
              that helps me code smarter and faster. You'll usually find me
              experimenting with tech stacks, from Java and Python to React and
              MongoDB. If you're curious about what I use, feel free to check out
              my tech stack or hit me up!
            </Text>
            <Text className={styles.aboutText} size="l" as="p">
              When I'm not coding, I'm into ethical hacking, learning new security
              tools, or working on projects that blend AI with everyday
              applications. Always open to collaboration—drop me a message if
              you're working on something cool.
            </Text>
            <a href="/RugvedKharde_MCA.pdf" download className={styles.resumeLink}>
              Download Resume
            </a>
          </div>
          <div className={styles.aboutImageColumn}>
            <img src="/office-background-designify.png" alt="Rugved Manoj Kharde" className={styles.aboutImage} />
          </div>
        </div>
      </Fragment>
    </Section>
  );
} 