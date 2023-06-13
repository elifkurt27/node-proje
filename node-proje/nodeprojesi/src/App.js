import { BrowserRouter as Router, Route, Routes, Link, Outlet, Navigate } from 'react-router-dom';
import BasvuruFormu from './compenents/BasvuruFormu';
import SifreDegistir from './compenents/SifreDegistir';
import Giris from "./Giris";
import Kayit from "./Kayit";
import Portal from "./Portal";
import BasvuruGoruntule from './compenents/BasvuruGoruntule';

import BasvuruGuncelleme from './compenents/BasvuruGuncelleme';


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Giris />} />
          <Route path="/kayit" element={<Kayit />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="portal/BasvuruFormu" element={<BasvuruFormu />} />
          <Route path="portal/BasvuruGoruntule" element={<BasvuruGoruntule />} />
          <Route path="portal/BasvuruGuncelleme" element={<BasvuruGuncelleme />} />
          <Route path="/sifreDegistir" element={<SifreDegistir />} />
       </Routes>
      </Router>
  );
}

export default App;
