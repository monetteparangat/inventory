import React from 'react';
import DataTable from 'react-data-table-component';
import '../style/ProductTable.css'

const ProductTable = ({ products }) => {
    const columns = [
        {
            name: 'Product ID',
            selector: row => row.ProductID,
            sortable: true,
        },
        {
            name: 'Product Name',
            selector: row => row.ProductName,
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row.Category,
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.Price,
            sortable: true,
        },
        {
            name: 'Stock Quantity',
            selector: row => row.StockQuantity,
            sortable: true,
        },
        {
            name: 'Stock Status',
            selector: row => row.StockStatus,
            sortable: true,
        },
        {
            name: 'Description',
            selector: row => row.Description,
        },
        {
            name: 'Date Added',
            selector: row => row.DateAdded,
            sortable: true,
        },
        {
            name: 'Last Updated',
            selector: row => row.LastUpdated,
            sortable: true,
        },
        {
            name: 'Supplier',
            selector: row => row.Supplier,
        },
        {
            name: 'Discount',
            selector: row => row.Discount,
        },
        {
            name: 'Cost Price',
            selector: row => row.CostPrice,
        },
        {
            name: 'Sales Price',
            selector: row => row.SalesPrice,
        },
        {
            name: 'Product Status',
            selector: row => row.ProductStatus,
        },
    ];

    return (
        <div className='container-product-table'>
            <DataTable
                columns={columns}
                data={products}
                pagination
                paginationPerPage={5}
                paginationRowsPerPageOptions={[5, 10, 15, 20]}
                highlightOnHover
                striped
                responsive
                selectableRows
                selectableRowsHighlight
            />
        </div>
    );
};

export default ProductTable;
