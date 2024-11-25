import axios from 'axios';
import { useEffect, useState } from 'react';
import '../style/Products.css'
import { FaPlus, FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import Table from '../components/Table';
import { stockMovementColumns as columns } from '../config/columnsConfig';
import { deleteRequest, get } from '../services/crudApi';
import { STOCK_MOVEMENT_API } from '../config/endpoints';

function StockMovement({ handlePage }) {
    const [stockMovements, setStockMovements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const [tableKey, setTableKey] = useState(0);

    const dataLoad = async () => {
        let response;
        try {
            response = await get(STOCK_MOVEMENT_API);
            setStockMovements(response.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
            setLoading(false);
        }

        return response
    }

    const handleRowsSelected = (data) => {
        setSelectedRows(data)
    }

    const handleAdd = () => {
        handlePage('Add-stock-movement', selectedRows)
    }

    const handleEdit = () => {
        console.log(selectedRows.length === 1)
        if (selectedRows.length === 1) {
            handlePage('Edit-stock-movement', selectedRows)
        }
    }

    const handleDelete = async () => {
        const id = selectedRows[0]?.id;

        if (id != undefined) {
            try {
                setLoading(true);
                await deleteRequest(`${STOCK_MOVEMENT_API}/${id}`)
                console.log("Stock Movement deleted successfully")

                //update ui after deletion
                setStockMovements(prevStockMovements =>
                    prevStockMovements.filter(stockMovement => stockMovement.id !== id)
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
        console.log(STOCK_MOVEMENT_API)
        dataLoad();
    }, []);

    useEffect(() => {
        console.log("selected rows", selectedRows);
    }, [selectedRows])


    return (
        <div className="container-products">
            <h1>Stock Movements</h1>
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
                    data={stockMovements}
                    handleSelected={handleRowsSelected}
                    selectedRows={selectedRows} />
            </div>
        </div>
    );
}

export default StockMovement;