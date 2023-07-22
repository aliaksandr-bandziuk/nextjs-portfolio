'use client'
// ContactForm.jsx

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import styles from './ContactForm.module.scss';

const initialValues = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: '',
};

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  phone: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  subject: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

export const ContactForm = () => {
  const [fieldStates, setFieldStates] = useState({
    name: false,
    phone: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleFieldChange = (fieldName, value) => {
    setFieldStates((prevFieldStates) => ({
      ...prevFieldStates,
      [fieldName]: !!value.trim(),
    }));
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} validateOnBlur onSubmit={(values) => onSubmit(values)}>
      <Form className={styles.form}>
        <div className={styles.inputData}>
          <Field
            className={styles.input}
            type="text"
            id="name"
            name="name"
            onFocus={() => setFieldStates({ ...fieldStates, name: true })}
            onBlur={(e) => handleFieldChange('name', e.target.value)}
          />
          <label
            htmlFor="name"
            className={`${styles.label} ${fieldStates.name || initialValues.name ? styles.focused : ''}`}
          >
            Name
          </label>
          <ErrorMessage name="name" component="div" className={styles.errorMessage} />
        </div>

        <div className={styles.inputWrapper}>
          <div className={styles.inputData}>
            <Field
              className={styles.input}
              type="text"
              id="phone"
              name="phone"
              onFocus={() => setFieldStates({ ...fieldStates, phone: true })}
              onBlur={(e) => handleFieldChange('phone', e.target.value)}
            />
            <label
              htmlFor="phone"
              className={`${styles.label} ${fieldStates.phone || initialValues.phone ? styles.focused : ''}`}
            >
              Phone
            </label>
            <ErrorMessage name="phone" component="div" className={styles.errorMessage} />
          </div>

          <div className={styles.inputData}>
            <Field
              className={styles.input}
              type="email"
              id="email"
              name="email"
              onFocus={() => setFieldStates({ ...fieldStates, email: true })}
              onBlur={(e) => handleFieldChange('email', e.target.value)}
            />
            <label
              htmlFor="email"
              className={`${styles.label} ${fieldStates.email || initialValues.email ? styles.focused : ''}`}
            >
              Email
            </label>
            <ErrorMessage name="email" component="div" className={styles.errorMessage} />
          </div>
        </div>

        <div className={styles.inputData}>
          <Field
            className={styles.input}
            type="text"
            id="subject"
            name="subject"
            onFocus={() => setFieldStates({ ...fieldStates, subject: true })}
            onBlur={(e) => handleFieldChange('subject', e.target.value)}
          />
          <label
            htmlFor="subject"
            className={`${styles.label} ${fieldStates.subject || initialValues.subject ? styles.focused : ''}`}
          >
            Subject
          </label>
          <ErrorMessage name="subject" component="div" className={styles.errorMessage} />
        </div>

        <div className={`${styles.inputData} ${styles.textarea}`}>
          <Field
            as="textarea"
            id="message"
            name="message"
            onFocus={() => setFieldStates({ ...fieldStates, message: true })}
            onBlur={(e) => handleFieldChange('message', e.target.value)}
          />
          <label
            htmlFor="message"
            className={`${styles.labelTextarea} ${fieldStates.message || initialValues.message ? styles.focused : ''}`}
          >
            Message
          </label>
          <ErrorMessage name="message" component="div" className={styles.errorMessage} />
        </div>

        <div className={styles.buttonBlock}>
          <ButtonPrimary type="submit" title="Send message" />
        </div>
      </Form>
    </Formik>
  );
};