import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Template = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Template;
