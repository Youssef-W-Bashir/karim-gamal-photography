import { Outlet } from "react-router-dom";
import Footer from "./Components/Shared/Footer/Footer";

export default function Layout() {
  return (
    <>
      <Outlet></Outlet>
      <Footer />
    </>
  );
}
