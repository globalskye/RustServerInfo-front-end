import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Avatar from "@mui/material/Avatar";
import * as yup from "yup";
import { checkUser, userRegister } from "../../service";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

interface IFormInput {
  username: string;
  password: string;
  confirmPassword: string;
}

const schema = yup.object().shape({
  username: yup.string().required("Имя обязательно").min(2).max(25).matches(/^[a-zA-Z0-9 ]*$/, 'Only english letters are allowed'),
  password: yup.string().required("Имя обязательно"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Пароли должны совпадать"),
});
const RegisterForm = () => {
  const [currentName, setCurrentName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    setLoading(true)
    setDisabled(true)
    checkUser(currentName).then(
      (response) => {
        if (!response.data.alreadyExists) {
          setLoading(false);
          setDisabled(false)
          setMessage("Никнейм свободен ");
        } else {
          setLoading(false);
          setDisabled(true)
          setMessage("Никнейм занят");
        }
      },
      (error) => {
        setMessage('Ошибка при проверке ника')
      }
    );
  }, [currentName]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data: IFormInput) => {
    setLoading(true);
    userRegister(data.username, data.password).then(
      (response) => {
        setMessage("Пользователь успешно зарегистрирован");
        setLoading(false);
      },
      (error) => {
        setMessage(error.response.data.message);
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
            Регистрация
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <TextField
              {...register("username")}
              variant="outlined"
              margin="normal"
              label="Ник"
              helperText={errors.username?.message}
              error={!!errors.username?.message}
              fullWidth
              
              onChange={(e) => setCurrentName(e.target.value)}
            />
            <TextField
              {...register("password")}
              variant="outlined"
              margin="normal"
              label="Пароль"
              helperText={errors.password?.message}
              error={!!errors.password?.message}
              type="Password"
              fullWidth
            />
            <TextField
              {...register("confirmPassword")}
              variant="outlined"
              margin="normal"
              label="Подтвердите пароль"
              helperText={errors.confirmPassword?.message}
              error={!!errors.confirmPassword?.message}
              type="password"
              fullWidth
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={disabled}
              // className={submitButton}
            >
              register
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
export default RegisterForm;
