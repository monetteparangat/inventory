import { useState } from 'react';
import '../style/ProductForm.css';
import { useForm } from "react-hook-form"
import axios from 'axios';
import StockMovement from './StockMovement';
import { post, put } from '../services/crudApi';
import { STOCK_MOVEMENT_API as ENDPOINT } from '../config/endpoints';

function StockMovementForm({ handlePage, stockMovementInfo }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: stockMovementInfo[0]
    })

    const onSubmit = async (data) => {
        const id = data?.id;
        let response;
        try {
            if (id === undefined) {
                response = await post(ENDPOINT, data);
                console.log("STOCK MOVEMENT added successfully ", response);
            } else {
                response = await put(`${ENDPOINT}/${id}`, data);
                console.log("STOCK MOVEMENT  updated successfully", response);
            }
        } catch (error) {
            console.error("Error adding product: ", error);
        }
    }

    const handleCancel = () => {
        handlePage('stockMovement')
    }

    console.log(watch("example"))

    useState(() => {
        console.log('is there data dear', stockMovementInfo.length)
    }, [])

    return (
        <div className='container-product-form'>
            <div className='wrapper-product-form'>
                <h1>Stock Movement Information</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='wrapper-form-inputs'>
                        <div className='form-inputs'>
                            {stockMovementInfo.length != 0 &&
                                <div className='form-group'>
                                    <label>ID</label>
                                    <input id="id" {...register('id')} disabled />
                                </div>
                            }
                            <div className="form-group">
                                <label>Product ID</label>
                                <input
                                    id="productId"
                                    type="number"
                                    {...register('productId', { required: true })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Transaction Type</label>
                                <select
                                    id="transactionType"
                                    {...register('transactionType', { required: true })}
                                >
                                    <option value="">Select...</option>
                                    <option value="IN">Incoming</option>
                                    <option value="OUT">Outgoing</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Quantity Changed</label>
                                <input
                                    id="quantityChanged"
                                    type="number"
                                    {...register('quantityChanged', { required: true })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Date</label>
                                <input
                                    id="date"
                                    type="datetime-local"
                                    {...register('date', { required: true })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    id="price"
                                    type="number"
                                    step="0.01"
                                    {...register('price', { required: true })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Reason</label>
                                <textarea
                                    id="reason"
                                    {...register('reason', { required: true })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Reference Number</label>
                                <input
                                    id="referenceNumber"
                                    type="text"
                                    {...register('referenceNumber', { required: true })}
                                />
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

export default StockMovementForm;