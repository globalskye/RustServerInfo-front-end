import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { Box, Button, Modal } from "@mui/material";
import { useEffect, useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { getCurrentUser, getUserInfo, logout } from "../../service";
import { User } from "../../types";
import LoginForm from "../auth/Login";
import RegisterForm from "../auth/Register";
import "./Navbar.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "secondary.main",
  border: "1px solid #40444E",
  boxShadow: 24,
  margin: "20px",
  p: 4,
};
const ResponsiveAppBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<User>();
  const [form, setForm] = useState<ReactJSXElement>();
  const handleClose = () => setOpen(false);
  const [currentUser, setCurrentUser] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const buttonText = isHovered
    ? "Пополнить баланс!"
    : `Текущий баланс ${user?.balance}`;

  useEffect(() => {
    getUserInfo().then(
      (response) => {
        setUser(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  useEffect(() => {
    const user = getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return (
    <>
      <nav>
        <ul>
          <li>
            <button onClick={() => navigate("/")}>Главная</button>
          </li>
          <li>
            <button onClick={() => navigate("/players")}>игроки</button>
          </li>
          <li>
            <button onClick={() => navigate("/clans")}>кланы</button>
          </li>
          <li>
            <button onClick={() => navigate("/shop")}>Магазин Dark Rust</button>
          </li>
        </ul>
        <ul className="nav-right">
          {currentUser ? (
            <>
              <li></li>
              <li>
                <button
                  onClick={()=>{}}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  {buttonText}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    window.location.reload();
                  }}
                >
                  Выйти
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  onClick={() => {
                    setForm(<LoginForm />);
                    setOpen(true);
                  }}
                >
                  Login
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setForm(<RegisterForm />);
                    setOpen(true);
                  }}
                >
                  Register
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div>
        <Modal open={open} onClose={handleClose} sx={{ marginTop: "0" }}>
          <Box sx={style}>{form}</Box>
        </Modal>
      </div>
    </>
  );
};

export default ResponsiveAppBar;
