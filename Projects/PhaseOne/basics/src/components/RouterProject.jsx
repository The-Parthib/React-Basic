import { Outlet } from "react-router";
import Footer from "./Router/Footer/Footer";
import Header from "./Router/Header/Header";

const RouterProject = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RouterProject;
