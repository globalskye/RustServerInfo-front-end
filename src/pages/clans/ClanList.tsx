import { useEffect, useState } from "react";
import { getUsers } from "../../service";
import { getClans } from "../../service/ClanService";
import { Clan, User } from "../../types";
import ResponsiveAppBar from "../home/components/Navbar";




const ClanList = () => {
  const [clans, setClans] = useState<Clan[]>()
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
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
    </>
  );
};
export default ClanList;
