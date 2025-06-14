import React from 'react';

interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const MyForm: React.FC = () => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  }

  return (
    <div>
      <h1>Form Validation Example</h1>
      <form>
        {/* { Form Fields } */}
      </form>
    </div>>
  );
}
