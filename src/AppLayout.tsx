import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";

export const AppLayout = () => (
  <>
    <Header title="React Js Blof" />
    <Nav />
    <Outlet />
    <Footer />
  </>
);
