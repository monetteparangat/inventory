import { useState } from 'react';
import '../style/ProductForm.css';
import { useForm } from "react-hook-form"
import axios from 'axios';

function SupplierForm({ handlePage, supplierInfo }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: supplierInfo[0]
    })

    const onSubmit = (data) => {
        console.log('SUBMIT YEY', data);
        axios
            .post("http://localhost:8080/api/suppliers", data)
            .then(response => {
                console.log("Product added successfully ", response);
            })
            .catch(error => {
                console.error("Error adding product: ", error);
            });
    }

    const handleCancel = () => {
        handlePage('Suppliers')
    }

    console.log(watch("example"))

    useState(() => {
        console.log('is there data dear', supplierInfo?.length)
    }, [])

    return (
        <div className='container-product-form'>
            <div className='wrapper-product-form'>
                <h1>Product Information</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='wrapper-form-inputs'>
                        <div className='form-inputs'>
                            {supplierInfo?.length != 0 &&
                                <div className='form-group'>
                                    <label>Product ID</label>
                                    <input id="id" {...register('id')} disabled />
                                </div>
                            }
                            <div className='form-group'>
                                <label>Supplier Name</label>
                                <input id="name" {...register('name', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>Contact Info</label>
                                <input id="contactInfo" {...register('contactInfo', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>Address</label>
                                <input id="address" {...register('address', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>Payment Terms</label>
                                <input id="paymentTerms" {...register('paymentTerms', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>Product Categories</label>
                                <input id="productCategories" {...register('productCategories', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>Lead Time (days)</label>
                                <input
                                    type="number"
                                    id="leadTime"
                                    {...register('leadTime', { required: true, valueAsNumber: true })}
                                />
                            </div>
                            <div className='form-group'>
                                <label>Discount Rates</label>
                                <input id="discountRates" {...register('discountRates')} />
                            </div>
                            <div className='form-group'>
                                <label>Status</label>
                                <select id="status" {...register('status', { required: true })}>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='form-button'>
                        <button className='cancel' onClick={handleCancel}>CANCEL</button>
                        <button type="submit" className='submit'>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SupplierForm;