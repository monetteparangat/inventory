export const stockMovementColumns = [
    {
        name: 'ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Product ID',
        selector: row => row.productId,
        sortable: true,
    },
    {
        name: 'Transaction Type',
        selector: row => row.transactionType,
        sortable: true,
    },
    {
        name: 'Quantity Changed',
        selector: row => row.quantityChanged,
        sortable: true,
    },
    {
        name: 'Date',
        selector: row => row.date,
        sortable: true,
    },
    {
        name: 'Price',
        selector: row => row.price,
        sortable: true,
    },
    {
        name: 'Reason',
        selector: row => row.reason,
    },
    {
        name: 'Reference Number',
        selector: row => row.referenceNumber,
    },
];

export const productColumns = [
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

export const categoryColumns = [
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

export const supplierColumns = [
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
