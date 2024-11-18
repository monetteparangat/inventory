import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Products from "./Products";
import '../style/Home.css'
import { useState } from "react";
import ProductForm from "./ProductForm";

function Home() {
    const [page, setPage] = useState('Product');

    const handlePage = (data) => {
        setPage(data);
    }

    return (
        <div className="container-home">
            <NavBar />
            <SideBar />
            <div className="content">
                {page === 'Product' &&
                    <Products handlePage={handlePage} />
                }
                {page === 'Add-Product' &&
                    <ProductForm handlePage={handlePage} />
                }
            </div>
        </div>
    );
}

export default Home;