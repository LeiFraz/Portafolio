import { Outlet as Page } from "react-router-dom";
import NavBar from "../../components/NavBar/Navbar";

function Layout() {

    return(
        <>
            <NavBar />
            <Page/>
        </>
    )
}

export default Layout;