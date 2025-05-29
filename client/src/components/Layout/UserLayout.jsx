import { Outlet } from "react-router-dom";
import Footer from "../Common/Footer";
import Header from "../Common/Header";


const UserLayout = () => {
  return (
    <>
      {/* HEADER */}
      <Header />
      {/* MAIN CONTENT */}
      <main>
        <Outlet />
      </main>
      {/* FOOTER */}
      <Footer />
    </>
  )
}

export default UserLayout;
