import React, { useState } from 'react';
import { Formik, Field, ErrorMessage, FormikValues, FormikHelpers, setNestedObjectValues, useFormik } from 'formik';
import { Stack, Button } from '@mui/material';
// import MuiPhoneNumber from "material-ui-phone-number";
import TextField from '@mui/material/TextField';
import * as Yup from 'yup';
import './MyForm.css'

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid Email').required('Email is required'),
  phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
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

export const FormikForm: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);

  const initialValues: FormValues = {
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  const handleSubmit = async (values: FormValues) => {
    try {
      setSubmitting(true);
      // Perform form submission logic here
      console.log(values);
      // Set submitting to false after successful submission
      setSubmitting(false);
    } catch (error) {
      // Handle form submission error
      console.error(error);
      setSubmitting(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: handleSubmit
  })

  return (
    <div className='main'>
      <h1>Material UI Form Validation Example</h1>
        <form onSubmit={formik.handleSubmit}>
          <Stack
            direction="column"
          >
            <TextField
              name="name"
              label="name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            >
              Name:
            </TextField>

            <TextField
              name="email"
              label="email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            >
              Email:
          </TextField>

          {/* <TextField
            defaultCountry={'us'}
            onChange={formik.handleChange}
          /> */}

          <TextField
              name="phoneNumber"
              label="phoneNumber"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
              helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            >
              Phone Number:
            </TextField>

            <TextField
              name="password"
              label="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            >
              Password:
            </TextField>

            <TextField
              name="confirmPassword"
              label="confirmPassword"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
              helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
            >
              Confirm Password:
            </TextField>

            <Button
              variant="contained"
              type='submit'
              disabled={ formik.values.name == '' || Object.values(formik.errors).length > 0}
            >
              Submit
            </Button>
          <p></p>
          </Stack>
        </form>
    </div>
  );
}
