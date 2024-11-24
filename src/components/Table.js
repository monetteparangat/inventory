import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import '../style/ProductTable.css'

const Table = ({ data, columns, handleSelected, tableKey }) => {

    const handleRowSelected = (data) => {
        const rowsData = data.selectedRows;
        console.log("Selected rows: ", rowsData);
        handleSelected(rowsData);
    }


    return (
        <div className='container-product-table'>
            <DataTable
                key={tableKey}
                columns={columns}
                data={data}
                pagination
                paginationPerPage={10}
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

export default Table;
