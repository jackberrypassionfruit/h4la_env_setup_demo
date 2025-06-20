import React, { useState } from 'react';
import { Formik, Field, ErrorMessage, FormikValues, FormikHelpers, setNestedObjectValues } from 'formik';
import { Container, Stack } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import './MyForm.css'

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required'),
  // newsletter: Yup.boolean().when('subscribe', {
  //   is: true,
  //   then: Yup.boolean().oneOf([true], 'You must subscribe tothe newsletter'),
  // }),
  // age: Yup.number().test('age', 'Invalid age', (value) => {
  //   return value !== undefined && value >= 18 && value <= 65;
  // }),
  // username: Yup.string().test('username', 'Username already exists', async (value) => {
  //   return await isUserNameAvailable(value);
  // })
})

export const MyForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);

  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  // const handleSubmit = (
  //   values: FormikValues,
  //   { setSubmitting }: FormikHelpers<FormValues>
  // ) => {
  //   setTimeout(() => {
  //     console.log(values);
  //     setSubmitting(false);
  //   }, 500)
  // }

  const handleSubmit = async (values: FormValues) => {
    try {
      setSubmitting(true);
      console.log(values);
      setSubmitting(false);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
    }
  }

  return (
    <div className='main'>
      <h1>HTML Form Validation Example</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, handleSubmit }) => (
          <form>
            <Stack
              direction="column"
            >
              <label htmlFor="name"
              >
                Name:
                <Field type="Text" name="name" className={errors.name ? 'error' : ''} />
                <ErrorMessage name="name" component="div" className="error" />
              </label>

              <label htmlFor="email">
                Email:
                <Field type="Text" name="email" className={errors.name ? 'error' : ''} />
                <ErrorMessage name="email" component="div" className="error" />
              </label>

              <label htmlFor="password">
                Password:
                <Field type="Text" name="password" className={errors.name ? 'error' : ''} />
                <ErrorMessage name="password" component="div" className="error" />
              </label>

              <label htmlFor="confirmPassword">
                Confirm Password:
                <Field type="Text" name="confirmPassword" className={errors.name ? 'error' : ''} />
                <ErrorMessage name="confirmPassword" component="div" className="error" />
              </label>

              <button type='submit' disabled={isSubmitting}>
                Submit
              </button>
            </Stack>
          </form>
        )}
      </Formik>
    </div>
  );
}
