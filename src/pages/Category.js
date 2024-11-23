import { useEffect, useState } from "react";
import CategoryTable from "../components/CategoryTable";
import axios from "axios";
import { FaPlus, FaTrash } from 'react-icons/fa6';
import { FaEdit } from 'react-icons/fa';

function Category({handlePage}) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedRows, setSelectedRows] = useState([]);
    const [tableKey, setTableKey] = useState(0);

    const handleRowsSelected = (data) => {
        setSelectedRows(data)
    }

    const categoriesLoad = async () => {
        const response = await axios.get('http://localhost:8080/api/product-categories')
            .then(response => {
                setCategories(response.data);
                console.log("data categories are: ", response.data)
                setLoading(false);
            }).catch(error => {
                console.error("Error fetching data: ", error);
                setLoading(false);
            });

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

    const handleDelete = () => {
        const id = selectedRows[0]?.id;

        if (id != undefined) {
            axios
                .delete(`http://localhost:8080/api/product-categories/${id}`)
                .then(() => {
                    console.log("category deleted successfully")
                    //update ui after deletion
                    setCategories(prevCategories =>
                        prevCategories.filter(category => category.id !== id)
                    );

                    setSelectedRows([])
                    setTableKey(prevKey => prevKey + 1);

                    console.log("selected rows", selectedRows);
                })
                .catch(error => {
                    console.error("Error deleting category: ", error)
                })

        }
    }

    useEffect(() => {
        categoriesLoad();
    }, []);

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
                <CategoryTable
                    tableKey={tableKey}
                    categories={categories}
                    handleSelected={handleRowsSelected}
                    selectedRows={selectedRows} />
            </div>
        </div>
    )
}

export default Category;