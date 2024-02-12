import { Route, Routes } from "react-router-dom";
// const Dashboard = React.lazy(() => import("../pages/Dashboard"));
import Error from "../pages/Error";
import Cashier from "../pages/Cashier";
import SaleVoucher from "../pages/SaleVoucher";
const Path = () => {
  return (
      <Routes>
        <Route path="/" element={<Cashier />} />
        <Route path="/voucher" element={<SaleVoucher />} />
        <Route path="/*" element={<Error />} />
      </Routes>
  );
};

export default Path;
