import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function CreateAppRouter() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/home",
            element: <Home />
        }
    ]);

    return router;
}


export default CreateAppRouter;