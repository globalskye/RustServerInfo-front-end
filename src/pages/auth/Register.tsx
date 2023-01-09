import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { checkUser, userRegister } from "../../service/AuthService";
import ResponsiveAppBar from "../Navbar";

interface IFormInput {
  username: string;
  password: string;
  confirmPwd: string;
}

const schema = yup.object().shape({
  username: yup.string().required().min(2).max(25),
  password: yup.string().required().min(8).max(120),
  confirmPwd: yup
    .string()
    .required("Пароль обязателен")
    .oneOf([yup.ref("password")], "Пароли не совпадают"),
});

const Register = () => {
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IFormInput) => {
    checkUser(data.username).then(
      (response) => {
        userRegister(data.username, data.password).then(
          (response) => {
            setMessage("Пользователь успешно зарегестрирован")
            navigate("/login")
          },
          (error) => {
            setMessage("Что-то пошло не так: " + error.error);
          }
        );
      },
      (error) => {
        setMessage("something went wrong : " + error.error);
      }
    );
   
  };

  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Container
        maxWidth="xs"
        sx={{
          backgroundColor: "white",
          marginTop: "20px",
          borderRadius: "20px",
        }}
        style={{minHeight:"40vh", maxHeight:"50vh", height:'100%'}}
      >
        <Typography variant="h3" sx={{textAlign:'center'}}>Регистрация</Typography>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <TextField
            {...register("username")}
            variant="outlined"
            margin="normal"
            label="Имя"
            helperText={errors.username?.message}
            error={!!errors.username?.message}
            fullWidth
          />
          <TextField
            {...register("password")}
            variant="outlined"
            margin="normal"
            label="Пароль"
            helperText={errors.password?.message}
            error={!!errors.password}
            type="password"
            fullWidth
          />
          <TextField
            {...register("confirmPwd")}
            variant="outlined"
            margin="normal"
            label="Повторите пароль"
            helperText={errors.confirmPwd?.message}
            error={!!errors.confirmPwd}
            type="password"
            fullWidth
          />
          <Button type="submit" fullWidth variant="contained" color="primary" >
            зарегестрироваться
          </Button>
          {message && (
            <>
              <Typography variant="body1">{message}</Typography>
              <Typography variant="body2"></Typography>
            </>
          )}
        </form>
      </Container>
    </>
  );
};

export default Register;
