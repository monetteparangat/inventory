import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Products from "./Products";
import '../style/Home.css'
import { useState } from "react";
import ProductForm from "./ProductForm";

function Home() {
    const [page, setPage] = useState('Products');
    const [data, setData] = useState([])

    const handlePage = (navToPage, data) => {
        setPage(navToPage);
        setData(data);
    }

    return (
        <div className="container-home">
            <NavBar />
            <SideBar handlePage={handlePage} />
            <div className="content">
                {page.toLowerCase() === 'products' &&
                    <Products handlePage={handlePage} />
                }
                {(page.toLowerCase() === 'add-product' || page.toLowerCase() === 'edit-product') &&
                    <ProductForm handlePage={handlePage} productInfo={data} />
                }
            </div>
        </div>
    );
}

export default Home;