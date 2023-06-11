import { Route, Routes } from "react-router-dom";
import AdminPage from "./pages/admin/AdminPage";
import ClanList from "./pages/clans/ClanList";
import ConcretClan from "./pages/clans/ConcretClan";
import RulesComponent from "./pages/home/components/Rules";
import Home from "./pages/home/Home";
import ConcretePlayer from "./pages/players/ConcretPlayer";
import PlayersList from "./pages/players/PlayersList";
import ShopPage from "./pages/shop/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/players" element={<PlayersList />} />
      <Route path="/players/:name" element={<ConcretePlayer />} />
      <Route path="/clans" element={<ClanList />} />
      <Route path="/clans/:name" element={<ConcretClan />} />
      <Route path="/rules" element={<RulesComponent />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
