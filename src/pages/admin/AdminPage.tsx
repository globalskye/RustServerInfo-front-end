import "./tablestyle.css";
import { AddBoxOutlined, IcecreamOutlined } from "@mui/icons-material";
import {
  Button,
  CircularProgress,
  Grid,
  List,
  ListItemText,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { authHeader } from "../../service";
import ResponsiveAppBar from "../navbar/Navbar";
import { WS_URL } from "../../urls";

const ScrollableList = styled.div`
  overflow: auto;
  height: 40vh;
  max-height: 40vh;
  background-color: black;
  border-radius: 4px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.2em;
    background-color: #40444e;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #40444e;
  }
`;

interface TableData {
  id: number;
  username: string;
  lastLogin: string;
  balance: number;
  purchases: number;
}
const data: TableData[] = [
  {
    id: 1,
    username: "global01(admin)",
    lastLogin: "2023-06-15",
    balance: 2000,
    purchases: 5,
  },
  {
    id: 2,
    username: "melcon",
    lastLogin: "2023-06-16",
    balance: 0,
    purchases: 2,
  },
  {
    id: 3,
    username: "Vld",
    lastLogin: "2023-06-17",
    balance: 0,
    purchases: 0,
  },
];
const AdminPage = () => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [cfg, setCfg] = useState(Object);
  const [dateTime, setDateTime] = useState("");
  const [secret, setSecret] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const [isReconnecting, setIsReconnecting] = useState(true); // Add isReconnecting state

  const scrollableListRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    connectWebSocket();
  }, []);
  const connectWebSocket = () => {
    const newSocket = new WebSocket(WS_URL);

    newSocket.addEventListener("open", () => {
      console.log("WebSocket connected");
      setIsReconnecting(false);
      setSocket(newSocket);
      socket?.send(
        JSON.stringify({
          method: "GetCfg",
          token: authHeader(),
        })
      );
    });

    newSocket.addEventListener("close", () => {
      console.log("WebSocket closed. Reconnecting...");
      setSocket(null);
      setIsReconnecting(true);
      setTimeout(() => {
        connectWebSocket();
      }, 100); // Retry every 10 seconds
    });
    newSocket.addEventListener("message", handleMessage);

    newSocket.addEventListener("error", (error) => {
      console.error("WebSocket error", error);
      newSocket.close();
    });
  };

  const handleMessage = (event: MessageEvent) => {
    const newMessage = event.data.toString();
    setOutput((prevOutput) => [...prevOutput, newMessage]);
  };

  const handleSendWipe = () => {
    if (socket) {
      console.log(dateTime);
      socket.send(
        JSON.stringify({
          method: "wipe",
          wipeTime: dateTime.toString(),
          secret: secret,
          token: authHeader(),
        })
      );
    }
  };
  const handleSendTopWipe = () => {
    if (socket) {
      socket.send(
        JSON.stringify({
          method: "TopWipe",
          token: authHeader(),
        })
      );
    }
  };

  useEffect(() => {
    if (scrollableListRef.current) {
      scrollableListRef.current.scrollTop =
        scrollableListRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <>
      <Grid
        style={{
          width: "1500px",
          margin: "0 auto",
          minHeight: "100%",
          height: "auto !important",
        }}
      >
        <ResponsiveAppBar />
        <Box
          textAlign={"center"}
          bgcolor={"secondary.main"}
          border={"1px solid #40444E"}
          sx={{
            borderRadius: "20px",
            height: "1000px",
          }}
        >
          <Grid container spacing={2} sx={{ marginTop: "20px" }}>
            <Grid item xs={4}>
              <TextField
                id="datetime-local"
                label="Время вайпа"
                type="datetime-local"
                sx={{ width: 250, color: "yellow" }}
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="secret"
                label="Секретный ключ"
                type="password"
                sx={{ width: 250, color: "yellow" }}
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
              />

              <Box mt={2}>
                <Button
                  variant="contained"
                  startIcon={<AddBoxOutlined />}
                  onClick={handleSendWipe}
                >
                  Сделать вайп
                </Button>
              </Box>
              <Box mt={2}>
                <Button
                  variant="contained"
                  startIcon={<AddBoxOutlined />}
                  onClick={handleSendTopWipe}
                >
                  Вывести топы
                </Button>
              </Box>
              <Button
                variant="contained"
                startIcon={<AddBoxOutlined />}
                onClick={handleSendTopWipe}
              >
                Включить сервер
              </Button>
              <Button
                variant="contained"
                startIcon={<AddBoxOutlined />}
                onClick={handleSendTopWipe}
              >
                Выключить сервер
              </Button>
              <Box mt={2}>
                <Button
                  variant="contained"
                  startIcon={<AddBoxOutlined />}
                  onClick={handleSendTopWipe}
                >
                  Выгрузка всех плагинов
                </Button>
                <Box mt={2}>
                  <Button
                    variant="contained"
                    startIcon={<IcecreamOutlined />}
                    onClick={handleSendTopWipe}
                  >
                    Статистика connections/banned
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<IcecreamOutlined />}
                    onClick={handleSendTopWipe}
                  >
                    Статистика среднего онлайна
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<IcecreamOutlined />}
                    onClick={handleSendTopWipe}
                  >
                    Метрика сервера cpu/ram/disk usage
                  </Button>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "column",
                      marginTop: "20px",
                      borderRadius: "white",
                    }}
                  ></Box>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={8}>
              <Paper elevation={3}>
                <ScrollableList ref={scrollableListRef}>
                  <List sx={{ p: 2 }}>
                    {output.map((message, index) => (
                      <ListItemText
                        key={index}
                        primary={message}
                        sx={{ color: "white" }}
                      />
                    ))}
                  </List>
                </ScrollableList>
              </Paper>

              {isReconnecting ? (
                <Box mt={2} sx={{ color: "red" }}>
                  <CircularProgress />
                  Переподключение к серверу...
                </Box>
              ) : (
                <Box mt={2} sx={{ color: "green" }}>
                  Подключено
                </Box>
              )}
              <div className="user-table">
                <h2>Пользователи</h2>
                <table>
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Last Login</th>
                      <th>Balance</th>
                      <th>Purchases</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((user) => (
                      <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.lastLogin}</td>
                        <td>{user.balance}</td>
                        <td>{user.purchases}</td>
                        <td>
                          <button className="edit-btn">Edit</button>
                          <button className="update-btn">Update</button>
                          <button className="delete-btn">Delete</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="pagination">
                  <button className="pagination-btn">+</button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default AdminPage;
