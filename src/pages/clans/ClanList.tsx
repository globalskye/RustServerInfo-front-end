import {
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { getPlayers } from "../../service";
import { getClans } from "../../service/ClanService";
import { Clan, Player } from "../../types";
import ResponsiveAppBar from "../Navbar";

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

const PlayersList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<Boolean>(true);
  const [clans, setClans] = useState<Clan[]>();
  useEffect(() => {
    getClans().then(
      (response) => {
        setClans(response.data);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const handleRedirect = (name: string) => {
    navigate(`/clans/${name}`);
  };
  const ClanTableComponent = () => {
    const columns = [
      {
        name: "Клан",
        selector: (clan: Clan) => clan.name,
        cell: (clan: Clan) => nameButton(clan.name),
        center: true,
      },

      {
        name: "Аббревиатура",
        selector: (clan: Clan) => clan.abbr,
        sortable: true,
        center: true,
      },

      {
        name: "Уровень",
        selector: (clan: Clan) => clan.level,
        sortable: true,
        center: true,
      },
      {
        name: "Баланс",
        selector: (clan: Clan) => clan.balance,
        sortable: true,
        center: true,
      },
      {
        name: "Опыт",
        selector: (clan: Clan) => clan.experience,
        sortable: true,
        center: true,
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
          defaultSortFieldId={3}
          defaultSortAsc={false}
          expandableRowsComponent={ExpandedComponent}
          pagination
          customStyles={tableCustomStyles}
        />
      );
    }
    return <>Clans not found</>;
  };

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
                    
                    {loading ? <CircularProgress /> : <ClanTableComponent />}
                  </Box>
                </Grid>
                <Grid item xs style={gridItem}></Grid>
              </Grid>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default PlayersList;
