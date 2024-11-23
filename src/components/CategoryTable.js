import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import '../style/ProductTable.css'

const CategoryTable = ({ categories, handleSelected, tableKey }) => {
    const columns = [
        {
            name: 'Category ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Category Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Description',
            selector: row => row.description,
        },

    ];

    const handleRowSelected = (data) => {
        const rowsData = data.selectedRows;
        console.log("Selected rows: ", rowsData);
        handleSelected(rowsData);
    }

    useEffect(() => {
        console.log("Am I here", categories);
    }, [])


    return (
        <div className='container-product-table'>
            <DataTable
                key={tableKey}
                columns={columns}
                data={categories}
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 15, 20]}
                highlightOnHover
                striped
                responsive
                selectableRows
                selectableRowsHighlight
                onSelectedRowsChange={handleRowSelected}
            />
        </div>
    );
};

export default CategoryTable;
