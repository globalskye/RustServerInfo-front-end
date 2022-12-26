import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { minWidth } from "@mui/system";
import { useEffect, useState } from "react";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../service";
import { User } from "../../types";
import ResponsiveAppBar from "../home/components/Navbar";

const gridItem = {
  paddingRight: "12px",
  paddingLeft: "12px",
};

const gridContainer = {
  paddingTop: "24px",
  paddingBottom: "24px",
};

const tableCustomStyles = {
  rows: {
    style: {
      minHeight: "60px", // override the row height
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#60EFE7",
      },
    },
  },
  headCells: {
    style: {
      fontSize: "18px",
      fontWeight: "bold",
      borderRadius: "20px",
      innerHeight: "20px",
      marginBottom: "20px",
      marginTop: "20px",
    },
  },
  cells: {
    style: {
      fontSize: "25px",
    },
  },
};

const UsersList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<Boolean>(true);
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    getUsers().then(
      (response) => {
        setUsers(response.data);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const handleRedirect = (name: string) => {
    navigate(`/users/${name}`);
  };
  const UserTableComponent2 = () => {
    const kd = (kill: number, deaths: number) => {
      if (deaths === 0) {
        return kill;
      }
      if (kill === 0) {
        return 0;
      }
      return (kill / deaths).toFixed(2);
    };

    const columns = [
      {
        name: "Никнейм",
        selector: (users: User) => users.name,
        cell: (users: User) => nameButton(users.name),
        center: true,
        button: true,
        minWidth: "180px",
      },
      {
        name: "Убийства",
        selector: (users: User) => users.killedPlayers,
        sortable: true,
        center: true,
      },
      {
        name: "КД",
        selector: (users: User) => kd(users.killedPlayers, users.deaths),
        sortable: true,
        center: true,
      },
      {
        name: "Баланс",
        selector: (users: User) => users.balance,
        sortable: true,
        center: true,
      },
      {
        name: <div>Убито животных</div>,
        selector: (users: User) => users.killedAnimals,
        sortable: true,
        center: true,
      },
      {
        name: <div>Убито мутантов</div>,
        selector: (users: User) => users.killedMutants,
        sortable: true,
        center: true,
      },
    ];
    const ExpandedComponent: React.FC<ExpanderComponentProps<User>> = ({
      data,
    }) => {
      return <pre>НЕ ДОДЕЛАНО!</pre>;
    };
    const nameButton = (name: string) => {
      return (
        <>
          <Button
            sx={{
              fontWeight: "bold",
              fontSize: "15px",
              color: "blue",
            }}
            onClick={() => {
              handleRedirect(name);
            }}
          >
            {name}
          </Button>
        </>
      );
    };
    if (users) {
      return (
        <DataTable
          columns={columns}
          data={users}
          expandableRows={true}
          defaultSortFieldId={2}
          defaultSortAsc={false}
          expandableRowsComponent={ExpandedComponent}
          pagination
          customStyles={tableCustomStyles}
        />
      );
    }
    return <>Users not found</>;
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
                <Box
                  textAlign={"center"}
                  bgcolor="white"
                  sx={{
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                  }}
                >
                  <Typography fontSize={"40px"}></Typography>

                  {loading ? <CircularProgress /> : <UserTableComponent2 />}
                </Box>
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
