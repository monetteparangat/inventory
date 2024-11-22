import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../style/Products.css'
import { FaPlus, FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import DataTable from 'react-data-table-component';
import ProductTable from '../components/ProductTable';
import { set } from 'react-hook-form';

function Products({ handlePage }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const [tableKey, setTableKey] = useState(0);

    const productLoad = async () => {
        const response = await axios.get('http://localhost:8080/api/products')
            .then(response => {
                setProducts(response.data);
                setLoading(false);
            }).catch(error => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });

        return response
    }

    const handleRowsSelected = (data) => {
        setSelectedRows(data)
    }

    const handleAdd = () => {
        handlePage('Add-Product', selectedRows)
    }

    const handleEdit = () => {
        console.log(selectedRows.length === 1)
        if (selectedRows.length === 1) {
            handlePage('Edit-product', selectedRows)
        }
    }

    const handleDelete = () => {
        const productId = selectedRows[0]?.id;
        // setSelectedRows(prevProducts =>
        //     prevProducts.filter(product => product.id !== productId))

        if (productId != undefined) {
            axios
                .delete(`http://localhost:8080/api/products/${productId}`)
                .then(() => {
                    console.log("Product deleted successfully")
                    //update ui after deletion
                    setProducts(prevProducts =>
                        prevProducts.filter(product => product.id !== productId)
                    );

                    // setSelectedRows(prevProducts =>
                    //     prevProducts.filter(product => product.id !== productId)
                    // );
                    setSelectedRows([])
                    setTableKey(prevKey => prevKey + 1);

                    console.log("selected rows", selectedRows);
                })
                .catch(error => {
                    console.error("Error deleting products: ", error)
                })

        }

    }

    useEffect(() => {
        productLoad();
    }, []);

    useEffect(() => {
        console.log("selected rows", selectedRows);
    }, [selectedRows])


    return (
        <div className="container-products">
            <div className='wrapper-actions'>
                {selectedRows.length == 0 ?
                    <div className='icon-actions add' onClick={handleAdd}>
                        <FaPlus />
                        <label className='label-add'>ADD</label>
                    </div>
                    :
                    <div className='icon-actions edit' onClick={handleEdit} >
                        <FaEdit />
                        <label className='label-edit'>EDIT</label>
                    </div>
                }
                <div className='icon-actions delete' onClick={handleDelete}>
                    <FaTrash />
                    <label className='label-delete'>DELETE</label>
                </div>
            </div>
            <div className="wrapper-table">
                <ProductTable
                    tableKey={tableKey}
                    products={products}
                    handleSelected={handleRowsSelected}
                    selectedRows={selectedRows} />
            </div>
        </div>
    );
}

export default Products;