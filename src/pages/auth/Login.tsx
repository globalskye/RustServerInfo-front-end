import { yupResolver } from "@hookform/resolvers/yup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Avatar, Box, Button, CircularProgress, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { login } from "../../service/AuthService";

interface IFormInput {
  username: string;
  password: string;
}

const schema = yup.object().shape({
  username: yup.string().required().min(2).max(25),
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

const LoginForm: React.FC = () => {
  const [message, setMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
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
    setLoading(true)
    login(data.username, data.password).then(
      (response) => {
        setLoading(false)
        window.location.reload()
        navigate("/profile");
      },
      (error) => {
        
        setLoading(false)
        setMessage( "Неверный логин или пароль");
      }
    );
  };

  return (
    <>
      
      <Container sx={{ backgroundColor: "secondary.main" }}>
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color={"white"}>
            Вход
          </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            {...register("username")}
            variant="outlined"
            margin="normal"
            label="Name"
            helperText={errors.username?.message}
            error={!!errors.username?.message}
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
            login
          </Button>
         
        </form>
        {loading ? (
            <CircularProgress sx={{ color: "white" }} />
          ) : (
            <>
              <Typography variant="body1">{message}</Typography>
            </>
          )}
        </Box>
      </Container>
    </>
  );
};

export default LoginForm;
