import { Box, Button, Container, Grid, Typography } from "@mui/material";
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
      minHeight: "72px", // override the row height
      "&:hover": {
        cursor: "pointer",
        backgroundColor: "#60EFE7",
      },
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "bold",
      borderRadius: "20px",
      justifyContent: "left",
      innerHeight: "20px",
      marginBottom: "20px",
      marginTop: "20px",
    },
  },
  cells: {
    style: {
      fontSize: "15px",
    },
  },
};

const UsersList = () => {
  const navigate = useNavigate();
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
      },
      {
        name: "Убийства",
        selector: (users: User) => users.killedPlayers,
        sortable: true,
      },
      {
        name: "КД",
        selector: (users: User) => kd(users.killedPlayers, users.deaths),
        sortable: true,
      },
      {
        name: "Баланс",
        selector: (users: User) => users.balance,
        sortable: true,
      },
      {
        name: "Убито животных",
        selector: (users: User) => users.killedAnimals,
        sortable: true,
      },
      {
        name: "Убито мутантов",
        selector: (users: User) => users.killedMutants,
        sortable: true,
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
              textTransform: "none",
              textAlign: "left",
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
                  <UserTableComponent2 />
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
