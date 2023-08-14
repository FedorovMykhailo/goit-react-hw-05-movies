import { Link, Outlet} from "react-router-dom";
import { Suspense } from "react";
import { Header } from "./SharedLayout.styled";

const SharedLayout = () => {
    // console.log("shared layout");
    return <>
        <Header>
        <Link to="/">Main</Link>
        <Link to="/movies">Movie</Link>  
        </Header>
        <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
        </Suspense>
    </>
} 
export default SharedLayout