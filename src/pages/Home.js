import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Products from "./Products";
import '../style/Home.css'

function Home() {
    return (
        <div className="container-home">
            <NavBar />
            <SideBar />
            <div className="content">
                <Products />
            </div>
        </div>
    );
}

export default Home;