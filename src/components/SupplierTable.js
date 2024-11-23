import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import '../style/ProductTable.css'

const SupplierTable = ({ suppliers, handleSelected, tableKey }) => {
    const columns = [
        {
            name: 'Supplier ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Supplier Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Contact Info',
            selector: row => row.contactInfo,
            sortable: true,
        },
        {
            name: 'Address',
            selector: row => row.address,
            sortable: true,
        },
        {
            name: 'Payment Terms',
            selector: row => row.paymentTerms,
        },
        {
            name: 'Product Categories',
            selector: row => row.productCategories,
        },
        {
            name: 'Lead Time (days)',
            selector: row => row.leadTime,
            sortable: true,
        },
        {
            name: 'Discount Rates',
            selector: row => row.discountRates,
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true,
        },
    ];


    const handleRowSelected = (data) => {
        const rowsData = data.selectedRows;
        console.log("Selected rows: ", rowsData);
        handleSelected(rowsData);
    }

    useEffect(() => {
        console.log("Am I here", suppliers);
    }, [])


    return (
        <div className='container-product-table'>
            <DataTable
                key={tableKey}
                columns={columns}
                data={suppliers}
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

export default SupplierTable;
