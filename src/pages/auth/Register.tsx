import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { userRegister } from '../service/AuthService';

interface IFormInput {
  email: string;
  Playername: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().required().email(),
  Playername: yup.string().required().min(2).max(25),
  password: yup.string().required().min(8).max(120)
});

const Register: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: IFormInput) => {
    userRegister(data.Playername, data.email, data.password).then(
      (response) => {
        setMessage('Player succfully registred');
      },
      (error) => {
        const resMessage =
          (error.response && error.response.data && error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage('something went wrong : ' + resMessage);
      }
    );
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h3">Sign In</Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          {...register('email')}
          variant="outlined"
          margin="normal"
          label="Email"
          helperText={errors.email?.message}
          error={!!errors.email?.message}
          fullWidth
          required
        />
        <TextField
          {...register('Playername')}
          variant="outlined"
          margin="normal"
          label="Name"
          helperText={errors.Playername?.message}
          error={!!errors.Playername?.message}
          fullWidth
        />
        <TextField
          {...register('password')}
          variant="outlined"
          margin="normal"
          label="Password"
          helperText={errors.password?.message}
          error={!!errors.password?.message}
          type="password"
          fullWidth
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
        {message && (
          <>
            <Typography variant="body1">{message}</Typography>
            <Typography variant="body2"></Typography>
          </>
        )}
      </form>
    </Container>
  );
};

export default Register;
