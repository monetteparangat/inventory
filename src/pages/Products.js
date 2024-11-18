import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../style/Products.css'
import { FaPlus, FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';

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
                <Table striped hover className="table-products">
                    <thead className='thead-products'>
                        <tr>
                            <th></th>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
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
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>{product.price}</td>
                                </tr>
                            ))
                        )}

                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Products;