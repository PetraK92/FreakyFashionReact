import ProductTable from "../../components/ProductTable/ProductTable";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div>
      <h1>Admin - Produkthantering</h1>
      <ProductTable />
      <Outlet />
    </div>
  );
};

export default Admin;
