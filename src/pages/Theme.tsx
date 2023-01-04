import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const RegisterForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Perform registration here, using the form values

    if (true) {
      setError('There was an error registering. Please try again.');
    } else {
      setError('');
      // Redirect to the home page or display a success message
    }
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h5">Create an account</Typography>
      {error && <Typography variant="body2" color="error">{error}</Typography>}
      <TextField
        label="Name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <TextField
        label="Email"
        name="email"
        value={formValues.email}
        onChange={handleInputChange}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleInputChange}
      />
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
  );
}

export default RegisterForm;