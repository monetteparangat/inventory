import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import '../style/ProductTable.css'

const ProductTable = ({ products, handleSelected, tableKey }) => {
    const columns = [
        {
            name: 'Product ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Product Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Description',
            selector: row => row.description,
        },
        {
            name: 'Category',
            selector: row => row.category,
            sortable: true,
        },
        {
            name: 'SKU',
            selector: row => row.sku,
            sortable: true,
        },
        {
            name: 'Brand',
            selector: row => row.brand,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: row => row.quantity,
            sortable: true,
        },
        {
            name: 'Unit Price',
            selector: row => row.unitPrice,
            sortable: true,
        },
        {
            name: 'Selling Price',
            selector: row => row.sellingPrice,
            sortable: true,
        },
        {
            name: 'Reorder LEvel',
            selector: row => row.reorderLevel,
        },
        {
            name: 'Supplier ID',
            selector: row => row.supplierId,
        },
        {
            name: 'Location',
            selector: row => row.location,
        },
        {
            name: 'Barcode',
            selector: row => row.barcode,
        },
        {
            name: 'Date Added',
            selector: row => row.dateAdded,
        },
        {
            name: 'Last Updated',
            selector: row => row.lastUpdated,
        },
    ];

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
                data={products}
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

export default ProductTable;
