import axios from 'axios';
import { useEffect, useState } from 'react';
import '../style/Products.css'
import { FaPlus, FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import { productColumns as columns } from '../config/columnsConfig';
import Table from '../components/Table';
import { PRODUCT_API } from '../config/endpoints';
import { get, deleteRequest } from '../services/crudApi';


function Products({ handlePage }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const [tableKey, setTableKey] = useState(0);

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

    const productLoad = async () => {
        let response;
        try {
            response = await get(PRODUCT_API);
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
            setLoading(false);
        }

        return response
    }

    const handleDelete = async () => {
        const id = selectedRows[0]?.id;
        if (id != undefined) {
            try {
                setLoading(true);
                await deleteRequest(`${PRODUCT_API}/${id}`)
                console.log("Product deleted successfully")
                
                //update ui after deletion
                setProducts(prevProducts =>
                    prevProducts.filter(product => product.id !== id)
                );

                setSelectedRows([])
                setTableKey(prevKey => prevKey + 1);
            } catch (error) {
                console.error("Error deleting products: ", error)
            }
            finally {
                setLoading(false);
            }
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
            <h1>Products</h1>
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
                <Table
                    columns={columns}
                    tableKey={tableKey}
                    data={products}
                    handleSelected={handleRowsSelected}
                    selectedRows={selectedRows} />
            </div>
        </div>
    );
}

export default Products;