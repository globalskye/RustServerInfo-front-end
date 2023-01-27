import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { makePayUrl } from "../../../service/PayService";
import { User } from "../../../types";

type PayPageProps = {
  user: User;
};

const PayPage = (user: PayPageProps) => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [url, setUrl] =useState<string>("")
  const [disabled, setDisabled] = useState<boolean>(true);

  useEffect(() => {
    setDisabled(true)
    makePayUrl(user.user.username, inputValue).then(
      (response) => {
        setUrl(response.data)
        setDisabled(false)
      },
      (error) => {
        console.log(error);
      }
    );
  }, [inputValue]);
  return (
    <>
      <Box
        sx={{
          marginTop: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">{user.user.username}</Typography>
        <Typography variant="h5">Текущий баланс: {user.user.balance}</Typography>
        <Typography variant="h5">Пополнить баланс</Typography>
        <TextField
          label="Amount"
          type="number"
          inputProps={{ min: 0, max: 5000 }}
          sx={{ width: "50%" }}
          onChange={(e) => setInputValue(parseInt(e.target.value))}
        />
        <Button sx={{ color: "white", width: "50%" }} disabled={disabled} onClick={()=>window.location.href = url}>
          Пополнить
        </Button>
      </Box>
    </>
  );
};
export default PayPage;
