import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Products from "./Products";
import '../style/Home.css'
import { useState } from "react";
import ProductForm from "./ProductForm";
import Category from "./Category";
import CategoryForm from "../components/CategoryForm";
import Supplier from "./Supplier";
import SupplierForm from "./SupplierForm";

function Home() {
    const [page, setPage] = useState('suppliers');
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
                {page.toLowerCase() === 'categories' &&
                    <Category handlePage={handlePage} />
                }
                {(page.toLowerCase() === 'add-category' || page.toLowerCase() === 'edit-category') &&
                    <CategoryForm handlePage={handlePage} categoryInfo={data} />
                }
                {page.toLowerCase() === 'suppliers' &&
                    <Supplier handlePage={handlePage} />
                }
                {(page.toLowerCase() === 'add-supplier' || page.toLowerCase() === 'edit-supplier') &&
                    <SupplierForm handlePage={handlePage} supplierInfo={data}/>
                }
            </div>
        </div>
    );
}

export default Home;