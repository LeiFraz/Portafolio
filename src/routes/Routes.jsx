import { useRoutes } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import Index from "../pages/Home";

export const Routes = () => {

    const routes = [
        {
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Index/>
                },
            ],
        }
    ]

    return useRoutes(routes);
}