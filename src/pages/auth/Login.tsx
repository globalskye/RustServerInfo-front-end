import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { login } from "../service/AuthService";

interface IFormInput {
  email: string;
  Playername: string;
  password: string;
}

const schema = yup.object().shape({
  Playername: yup.string().required().min(2).max(25),
  password: yup.string().required(),
});

// const useStyles = () =>
//   makeStyles((theme: any) => ({
//     heading: {
//       textAlign: 'center',
//       margin: theme.spacing(1, 0, 4)
//     },
//     submitButton: {
//       marginTop: theme.spacing(4)
//     }
//   }));

const Login: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  // const { heading, submitButton } = useStyles();
  const onSubmit = (data: IFormInput) => {
    login(data.Playername, data.password).then(
      (response) => {
        navigate("/home");
        window.location.reload();
        setMessage("login success");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage("something went wrong : " + resMessage);
      }
    );
  };

  return (
    <Container maxWidth="xs">
      <Typography
        // className={heading}
        variant="h3"
      >
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          {...register("Playername")}
          variant="outlined"
          margin="normal"
          label="Name"
          helperText={errors.Playername?.message}
          error={!!errors.Playername?.message}
          fullWidth
        />
        <TextField
          {...register("password")}
          variant="outlined"
          margin="normal"
          label="Password"
          helperText={errors.password?.message}
          error={!!errors.password?.message}
          type="password"
          fullWidth
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          // className={submitButton}
        >
          Sign In
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

export default Login;
