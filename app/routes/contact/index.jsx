import { Fragment, useRef, useState } from 'react';
import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import { Text } from '~/components/text';
import { Button } from '~/components/button';
import { Icon } from '~/components/icon';
import styles from './contact.module.css';
import emailjs from '@emailjs/browser';

export const meta = () => {
  return [{
    title: 'Contact | Rugved Manoj Kharde',
    description: 'Get in touch with Rugved Manoj Kharde.',
  }];
};

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_a2k7u0q', 'template_21fnlkp', form.current, 'W21brn1sHIIRLJdRt')
      .then((result) => {
          console.log(result.text);
          setStatus('SUCCESS');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus('ERROR');
      });
  };

  return (
    <Section className={styles.contactPage} id="contact">
      <Fragment>
        <Heading level={2} className={styles.sectionHeading}>
          Get in Touch
        </Heading>
        <div className={styles.contactContent}>
          <Text className={styles.contactText} size="l" as="p">
            You can reach out to me directly using the form below.
          </Text>
          <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="user_name" className={styles.formLabel}>Name</label>
              <input type="text" name="user_name" id="user_name" className={styles.formInput} required placeholder="Enter your name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="user_email" className={styles.formLabel}>Email</label>
              <input type="email" name="user_email" id="user_email" className={styles.formInput} required placeholder="Enter your email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.formLabel}>Message</label>
              <textarea name="message" id="message" className={styles.formTextarea} rows="6" required placeholder="Enter your message"></textarea>
            </div>
            <Button type="submit" disabled={status === 'SUCCESS'} className={styles.submitButton}>
              Send Message
            </Button>
            {status === 'SUCCESS' && <Text className={styles.successMessage}>Message sent successfully!</Text>}
            {status === 'ERROR' && <Text className={styles.errorMessage}>Failed to send message. Please try again later.</Text>}
          </form>
        </div>
      </Fragment>
    </Section>
  );
}
