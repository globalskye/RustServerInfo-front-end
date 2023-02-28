import {
  Box,
  Chip,
  CircularProgress,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { TableClan } from "../../types";
import ResponsiveAppBar from "../navbar/Navbar";
import "./table.css";
import { Link, useNavigate } from "react-router-dom";
import { getClans } from "../../service";

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

          height: "auto !important",
        }}
      >
        <ResponsiveAppBar></ResponsiveAppBar>
        <Grid>
          <Box sx={{ flexGrow: 1 }}>
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
                  sx={{
                    width: "100%",
                    border: "1px solid #40444E",

                    marginBottom: "10px",
                  }}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <table className="table">
                  <thead>
                    <tr>
                      <th>Имя клана</th>
                      <th>Аббревиатура</th>

                      <th>Лидер</th>
                      <th onClick={() => handleHeaderClick("level")}>
                        Уровень
                      </th>
                      <th onClick={() => handleHeaderClick("balance")}>
                        Баланс
                      </th>

                      <th onClick={() => handleHeaderClick("tax")}>Налог</th>

                      <th onClick={() => handleHeaderClick("experience")}>
                        Опыт
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((row) => (
                      <tr key={row._id}>
                        <td>
                          <Chip
                            key={row._id}
                            label={row.name}
                            sx={{
                              border: "1px solid #40444E",
                              borderRadius: "5px",
                              fontSize: "25px",

                              color: "#85DED6",
                            }}
                            onClick={() => handleRedirect(row.name)}
                            clickable
                          />
                        </td>
                        <td onClick={() => handleRedirect(row.name)}>
                          {row.abbr}
                        </td>
                        <td>
                          <Chip
                            key={row._id}
                            label={row.leader.name}
                            sx={{
                              border: "1px solid #40444E",
                              borderRadius: "5px",
                              fontSize: "25px",

                              color: "#85DED6",
                            }}
                            onClick={() =>
                              navigate("/players/" + row.leader.name)
                            }
                            clickable
                          />
                        </td>
                        <td onClick={() => handleRedirect(row.name)}>
                          {row.level}
                        </td>
                        <td onClick={() => handleRedirect(row.name)}>
                          {row.balance}
                        </td>
                        <td onClick={() => handleRedirect(row.name)}>
                          {row.tax}
                        </td>
                        <td onClick={() => handleRedirect(row.name)}>
                          {row.experience}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
const ClansList = () => {
  const [data, setClans] = useState<TableClan[]>();
  const [loading, setLoading] = useState<boolean>(true);

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
  if (data) {
    return <ClansListComponent data={data} />;
  } else {
    return (
      <>
        <Grid
          style={{
            width: "1500px",
            margin: "0 auto",

            height: "auto !important",
          }}
        >
          <ResponsiveAppBar></ResponsiveAppBar>
          <Grid>
            <Box sx={{ flexGrow: 1 }}>
              <Box
                textAlign={"center"}
                bgcolor={"secondary.main"}
                border={"1px solid #40444E"}
                sx={{
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                  height:'100vh'
                }}
              >
                <CircularProgress sx={{color:'white'}} size={300} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  }
};
export default ClansList;
