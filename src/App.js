//import logo from './logo.svg';
// import './App.css';
// import Main from './components/pages/main';
// import './bootstrap-5.2.3-dist/css/bootstrap.min.css';
// import './bootstrap-5.2.3-dist/js/bootstrap.bundle.min.js';
// import Banner from './components/pages/banner';
// import Products from './components/products';
// import Footer from './components/pages/footer';
import { Routes,Route} from "react-router-dom";
import Trangchu from "./pages/trang_chu";
import GioiThieu from "./pages/gioi_thieu";
import ThanhToan from "./pages/thanh_toan";
import GioHang from "./pages/gio_hang";
import DangKy from "./pages/dang_ky";
import DangNhap from "./pages/dang_nhap";
import ChiTietSanPham from "./pages/chi_tiet_san_pham";
//import Products from "./components/products";
function App() {
  return (
    <Routes>
    <Route path="/" element={<Trangchu/>}/>
    <Route path="/gioi-thieu" element={<GioiThieu/>}/>
    <Route path="/thanh-toan" element={<ThanhToan/>}/>
    <Route path="/gio-hang" element={<GioHang/>}/>
    <Route path="/dang-ky" element={<DangKy/>}/>
    <Route path="/dang-nhap" element={<DangNhap/>}/>
    <Route path="/san-pham/:spID" element={<ChiTietSanPham/>}/>
    </Routes>
  );
}

export default App;
