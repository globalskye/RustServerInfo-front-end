import { Box, Container, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TablePlayer } from "../../types";
import ResponsiveAppBar from "../navbar/Navbar";
import "./table.css";
import { useNavigate } from "react-router-dom";
import { getPlayers } from "../../service";

interface TableProps {
  data: TablePlayer[];
}
const PlayerListComponent: React.FC<TableProps> = ({ data }) => {
  const [sortColumn, setSortColumn] = useState<keyof TablePlayer | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );
  const navigate = useNavigate();

  const handleRedirect = (name: string) => {
    navigate(`/players/${name}`);
  };
  const [searchQuery, setSearchQuery] = useState("");

  const handleHeaderClick = (column: keyof TablePlayer) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredData = data
    .filter((row) => row.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (!sortColumn) return 0;
      if (a[sortColumn] === null || b[sortColumn] === null) return 0;
      if (sortDirection === "asc") {
        if (a[sortColumn] < b[sortColumn]) return -1;
        if (a[sortColumn] > b[sortColumn]) return 1;
        return 0;
      } else {
        if (a[sortColumn] > b[sortColumn]) return -1;
        if (a[sortColumn] < b[sortColumn]) return 1;
        return 0;
      }
    });

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
              <Grid container>
                <Grid item xs={1}></Grid>
                <Grid item xs={9}>
                  <Box
                    textAlign={"center"}
                    bgcolor={"secondary.main"}
                    border={"1px solid #40444E"}
                    sx={{
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                    }}
                  >
                    <div style={{ margin: "20px" }}>
                      <TextField
                        type="text"
                        variant="outlined"
                        label="Поиск..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <table className="table">
                        <thead>
                          <tr>
                            <th onClick={() => handleHeaderClick("name")}>
                              Name
                            </th>

                            <th
                              onClick={() => handleHeaderClick("killedPlayers")}
                            >
                              <div>Убито</div>
                              <div>Игроков</div>
                            </th>
                            <th onClick={() => handleHeaderClick("deaths")}>
                              Смертей
                            </th>

                            <th
                              onClick={() => handleHeaderClick("killedAnimals")}
                            >
                              <div>Убито</div>
                              <div>Животных</div>
                            </th>
                            <th
                              onClick={() => handleHeaderClick("killedMutants")}
                            >
                              <div>Убито</div>
                              <div>Мутантов</div>
                            </th>
                            <th onClick={() => handleHeaderClick("balance")}>
                              Balance
                            </th>

                            <th onClick={() => handleHeaderClick("online")}>
                              <div>Часов</div>
                              <div>На сервере</div>
                            </th>
                            <th onClick={() => handleHeaderClick("raid")}>
                              <div>Зарейжено</div>
                              <div>Объектов</div>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredData.map((row) => (
                            <tr
                              key={row._id}
                              onClick={() => handleRedirect(row.name)}
                            >
                              <td style={{color:'#92a8d1'}}>{row.name}</td>

                              <td>{row.killedPlayers}</td>
                              <td>{row.deaths}</td>
                              <td>{row.killedAnimals}</td>
                              <td>{row.killedMutants}</td>
                              <td>{row.balance}</td>

                              <td>{(row.online / 64).toFixed(2)}</td>
                              <td>{row.raid}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
const PlayerList = () => {
  const [data, setPlayers] = useState<TablePlayer[]>();
  useEffect(() => {
    getPlayers().then(
      (response) => {
        setPlayers(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  if (data) {
    return <PlayerListComponent data={data} />;
  } else {
    return <></>;
  }
};
export default PlayerList;
