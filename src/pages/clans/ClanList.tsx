import { Box, Container, Grid, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TableClan } from "../../types";
import ResponsiveAppBar from "../navbar/Navbar";
import "./table.css";
import { Link, useNavigate } from "react-router-dom";
import { getClans, getPlayers } from "../../service";

interface TableProps {
  data: TableClan[];
}
const ClansListComponent: React.FC<TableProps> = ({ data }) => {
  const [sortColumn, setSortColumn] = useState<keyof TableClan | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc" | null>(
    null
  );
  const navigate = useNavigate();

  const handleRedirect = (name: string) => {
    navigate(`/clans/${name}`);
  };
  const [searchQuery, setSearchQuery] = useState("");

  const handleHeaderClick = (column: keyof TableClan) => {
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
                              Имя клана
                            </th>

                            <th>Лидер</th>
                            <th onClick={() => handleHeaderClick("level")}>
                              Уровень
                            </th>
                            <th onClick={() => handleHeaderClick("balance")}>
                              Баланс
                            </th>

                            <th onClick={() => handleHeaderClick("tax")}>
                              Налог
                            </th>

                            <th onClick={() => handleHeaderClick("experience")}>
                              Опыт
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredData.map((row) => (
                            <tr
                              key={row._id}
                              
                            >
                              <td style={{ color: "#92a8d1" }} onClick={() => handleRedirect(row.name)}>{row.name}</td>

                              <td style={{ color: "#92a8d1" }}>
                                <Link to={"/players/"+row.leader.name}>{row.leader.name}</Link>
                              </td>
                              <td onClick={() => handleRedirect(row.name)}>{row.level}</td>
                              <td onClick={() => handleRedirect(row.name)}>{row.balance}</td>
                              <td onClick={() => handleRedirect(row.name)}>{row.tax}</td>
                              <td onClick={() => handleRedirect(row.name)}>{row.experience}</td>
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
const ClansList = () => {
  const [data, setClans] = useState<TableClan[]>();
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
  if (data) {
    return <ClansListComponent data={data} />;
  } else {
    return <></>;
  }
};
export default ClansList;
