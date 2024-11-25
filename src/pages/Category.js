import { useEffect, useState } from "react";
import axios from "axios";
import { FaPlus, FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';
import { categoryColumns as columns } from "../config/columnsConfig";
import Table from '../components/Table';
import { CATEGORY_API } from '../config/endpoints';
import { deleteRequest, get } from "../services/crudApi";


function Category({ handlePage }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const [tableKey, setTableKey] = useState(0);

    const handleRowsSelected = (data) => {
        setSelectedRows(data)
    }

    const categoriesLoad = async () => {
        let response;

        try {
            response = await get(CATEGORY_API);
            setCategories(response?.data);
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
            setLoading(false);
        }

        return response
    }

    const handleAdd = () => {
        handlePage('Add-Category', selectedRows)
    }

    const handleEdit = () => {
        console.log(selectedRows.length === 1)
        if (selectedRows.length === 1) {
            handlePage('Edit-category', selectedRows)
        }
    }

    const handleDelete = async () => {
        const id = selectedRows[0]?.id;

        if (id !== undefined) {
            try {
                setLoading(true);
                await deleteRequest(`${CATEGORY_API}/${id}`)
                console.log("Product deleted successfully")

                //update ui after deletion
                setCategories(prevCategories =>
                    prevCategories.filter(category => category.id !== id)
                );

                setSelectedRows([])
                setTableKey(prevKey => prevKey + 1);
            } catch (error) {
                console.error("Error deleting category: ", error)
            } finally {
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        categoriesLoad();
    }, []);

    return (
        <div className="container-products">
            <h1>Categories</h1>
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
                    data={categories}
                    handleSelected={handleRowsSelected}
                    selectedRows={selectedRows} />
            </div>
        </div>
    )
}

export default Category;