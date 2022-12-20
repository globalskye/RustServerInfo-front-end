import ResponsiveAppBar from "../home/components/Navbar";
import {
  Grid,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Typography,
  Table,
  Box,
  Stack,
  Container,
  Button,
} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUsers } from "../../service";
import { User } from "../../types";
import TopPvP from "../home/components/TopPvP";
import ServerStatistic from "../home/components/ServerStatistic";
import InfoButtons from "../home/components/InfoButtons";

const gridItem = {
  paddingRight: "12px",
  paddingLeft: "12px",
};

const gridContainer = {
  paddingTop: "24px",
  paddingBottom: "24px",
};

const UsersList = () => {
  const navigate = useNavigate();
  const [clickedItem, setClickedItem] = useState<User>();
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    getUsers().then(
      (response) => {
        setUsers(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const handleRedirect = (name: string) => {
    navigate(`/users/${name}`);
  };

  const UserTableComponent = () => {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Никнейм</TableCell>
              <TableCell align="right">Убийства</TableCell>
              <TableCell align="right">КД</TableCell>
              <TableCell align="right">Баланс</TableCell>
              <TableCell align="right">Убито животных</TableCell>
              <TableCell align="right">Убито мутантов</TableCell>
              <TableCell align="right">Зарейжено объектов</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map((item: User) => (
              <TableRow hover={true} key={item.name} >
                <TableCell scope="row">
                  <Button
                    variant="text"
                    onClick={() => handleRedirect(item.name)}
                  >
                    {item.name}
                  </Button>
                </TableCell>

                <TableCell align="center">{item.killedPlayers}</TableCell>
                <TableCell align="center">
                  {(item.killedPlayers / item.deaths).toFixed(2)}
                </TableCell>
                <TableCell align="center">{item.balance}</TableCell>
                <TableCell align="center">{item.killedAnimals}</TableCell>
                <TableCell align="center">{item.killedMutants}</TableCell>
                <TableCell align="center">{item.raid}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <Grid>
        <Box sx={{ flexGrow: 1 }}>
          <Container maxWidth="xl">
            <Grid container style={gridContainer}>
              <Grid item xs={1}></Grid>
              <Grid item xs={9} style={gridItem}>
                <UserTableComponent />
              </Grid>
              <Grid item xs style={gridItem}></Grid>
            </Grid>
          </Container>
        </Box>
      </Grid>
    </>
  );
};
export default UsersList;
