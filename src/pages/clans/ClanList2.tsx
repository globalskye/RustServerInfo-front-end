import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  InputAdornment,
} from "@mui/material";
import { SetStateAction, useEffect, useState } from "react";
import { getClans } from "../../service";
import { Clan } from "../../types";

const ClanTable = () => {
  const [clans, setClans] = useState<Clan[]>();
  const [clansData, setClansData] = useState<Clan[]>();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

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

  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
    setClansData(
      clans?.filter((clan: Clan) =>
        clan.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  const handleChangePage = (event: any, newPage: SetStateAction<number>) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string; }; }) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <TableContainer component={Paper}>
      <TextField
        id="search"
        label="Search by name"
        value={search}
        onChange={handleSearchChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              
            </InputAdornment>
          ),
        }}
      />
      <Table aria-label="clan table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Abbr</TableCell>
            <TableCell align="right">Leader</TableCell>
            <TableCell align="right">Created</TableCell>
            <TableCell align="right">Balance</TableCell>
            <TableCell align="right">Tax</TableCell>
            <TableCell align="right">Level</TableCell>
            <TableCell align="right">Experience</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {clans?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((clan: Clan) => (
              <TableRow key={clan._id} hover>
                <TableCell component="th" scope="row">
                  {clan.name}
                </TableCell>
                <TableCell align="right">{clan.abbr}</TableCell>
                <TableCell align="right">{clan.leader.name}</TableCell>
                <TableCell align="right">{clan.created}</TableCell>
                <TableCell align="right">{clan.balance}</TableCell>
                <TableCell align="right">{clan.tax}</TableCell>
                <TableCell align="right">{clan.level}</TableCell>
                <TableCell align="right">{clan.experience}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default ClanTable;