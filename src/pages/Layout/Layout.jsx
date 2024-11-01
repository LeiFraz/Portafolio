import { Outlet as Page } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';

function Layout() {

    return(
        <>
            <HomeIcon color="success" fontSize="large"/>
            <Page/>
        </>
    )
}

export default Layout;