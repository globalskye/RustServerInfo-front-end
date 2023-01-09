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
import { getPlayers } from "../../service";
import { Player } from "../../types";
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
  const [Players, setPlayers] = useState<Player[]>();
  useEffect(() => {
    getPlayers().then(
      (response) => {
        setPlayers(response.data);
        setLoading(false);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  const handleRedirect = (name: string) => {
    navigate(`/Players/${name}`);
  };
  const PlayerTableComponent2 = () => {
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
        selector: (Players: Player) => Players.name,
        cell: (Players: Player) => nameButton(Players.name),
        center: true,
        button: true,
        minWidth: "180px",
      },
      {
        name: "Убийства",
        selector: (Players: Player) => Players.killedPlayers,
        sortable: true,
        center: true,
      },
      {
        name: "КД",
        selector: (Players: Player) => kd(Players.killedPlayers, Players.deaths),
        sortable: true,
        center: true,
      },
      {
        name: "Баланс",
        selector: (Players: Player) => Players.balance,
        sortable: true,
        center: true,
      },
      {
        name: <div>Убито животных</div>,
        selector: (Players: Player) => Players.killedAnimals,
        sortable: true,
        center: true,
        
      },
      {
        name: <div>Убито мутантов</div>,
        selector: (Players: Player) => Players.killedMutants,
        sortable: true,
        center: true,
      },
    ];
    const ExpandedComponent: React.FC<ExpanderComponentProps<Player>> = ({
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
    if (Players) {
      return (
        
        <DataTable
          columns={columns}
          data={Players}
          expandableRows={true}
          defaultSortFieldId={2}
          defaultSortAsc={false}
          expandableRowsComponent={ExpandedComponent}
          pagination
          
          customStyles={tableCustomStyles}
        />
      );
    }
    return <>Players not found</>;
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

                  {loading ? <CircularProgress /> : <PlayerTableComponent2 />}
                </Box>
              </Grid>
              <Grid item xs style={gridItem}></Grid>
            </Grid>
          </Container>
        </Box>
      </Grid></Grid>
      
    </>
  );
};
export default PlayersList;
