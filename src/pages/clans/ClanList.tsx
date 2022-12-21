import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { getUsers } from "../../service";
import { getClans } from "../../service/ClanService";
import { Clan, User } from "../../types";
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
  const [clans, setClans] = useState<Clan[]>();
  useEffect(() => {
    getClans().then(
      (response) => {
        setClans(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const handleRedirect = (name: string) => {
    navigate(`/clans/${name}`);
  };
  const UserTableComponent2 = () => {
   

    const columns = [
      {
        name: "Клан",
        selector: (clan: Clan) => clan.name,
        cell: (clan: Clan) => nameButton(clan.name),
      },
    
      {
        name: "Аббревиатура",
        selector: (clan: Clan) => clan.abbr,
        sortable:true
        
      },
      
      {
        name: "Уровень",
        selector: (clan: Clan) => clan.level,
        sortable:true
      },
      {
        name: "Баланс",
        selector: (clan: Clan) => clan.balance,
        sortable:true
      },
      {
        name: "Опыт",
        selector: (clan: Clan) => clan.experience,
        sortable:true
      },
      
    ];
    const ExpandedComponent: React.FC<ExpanderComponentProps<Clan>> = ({
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
    if (clans) {
      return (
        <DataTable
          columns={columns}
          data={clans}
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
