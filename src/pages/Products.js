import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../style/Products.css'
import { FaPlus, FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import DataTable from 'react-data-table-component';
import ProductTable from '../components/ProductTable';

function Products({ handlePage }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    const productLoad = async () => {
        const response = await axios.get('/data.json')
            .then(response => {
                setProducts(response.data.products);
                setLoading(false);
            }).catch(error => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });

        return response
    }

    const handleAdd = () => {
        handlePage('Add-Product')
    }

    useEffect(() => {
        productLoad();
    }, []);

    return (
        <div className="container-products">
            <div className='wrapper-actions'>
                <div className='icon-actions' onClick={handleAdd}>
                    <FaPlus />
                    <label className='label-add'>ADD</label>
                </div>
                <div className='icon-actions'>
                    <FaTrash />
                    <label className='label-delete'>DELETE</label>
                </div>
                <div className='icon-actions'>
                    <FaEdit />
                    <label className='label-edit'>EDIT</label>
                </div>
            </div>
            <div className="wrapper-table">
                {/* <Table striped hover className="table-products">
                    <thead className='thead-products'>
                        <tr>
                            <th></th>
                            {tableHeader.map((header, i) => (
                                <th>{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className='tbody-products'>
                        {loading ? (
                            <tr>
                                <td colSpan={4}>...loading</td>
                            </tr>
                        ) : (
                            products.map((product, i) => (
                                <tr key={i}>
                                    <td>
                                        <input
                                            type='checkbox' />
                                    </td>
                                    <td>{product.ProductID}</td>
                                    <td>{product.ProductName}</td>
                                    <td>{product.Category}</td>
                                    <td>{product.Price}</td>
                                    <td>{product.StockQuantity}</td>
                                    <td>{product.StockStatus}</td>
                                    <td>{product.Description}</td>
                                    <td>{product.DateAdded}</td>
                                    <td>{product.LastUpdated}</td>
                                    <td>{product.Supplier}</td>
                                    <td>{product.Discount}</td>
                                    <td>{product.CostPrice}</td>
                                    <td>{product.SalesPrice}</td>
                                    <td>{product.ProductStatus}</td>
                                </tr>
                            ))
                        )}

                    </tbody>
                </Table> */}

                <ProductTable products={products} />
            </div>
        </div>
    );
}

export default Products;