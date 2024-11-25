import { useState } from 'react';
import '../style/ProductForm.css';
import { useForm } from "react-hook-form"
import { post, put } from '../services/crudApi';
import { PRODUCT_API as ENDPOINT } from '../config/endpoints';

function ProductForm({ handlePage, productInfo }) {
    const [selectedCategory, setSelectedCategory] = useState("");


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: productInfo[0]
    })

    const onSubmit = async (data) => {

        const id = data?.id;
        let response;
        try {
            if (id === undefined) {
                response = await post(ENDPOINT, data);
                console.log("Product added successfully ", response);
            } else {
                response = await put(`${ENDPOINT}/${id}`, data);
                console.log("Product updated successfully", response);
            }
        } catch (error) {
            console.error("Error adding product: ", error);
        }
    }

    const handleSelectedCategory = (event) => {
        const { value } = event.target
        setSelectedCategory(value)
    }

    const handleCancel = () => {
        handlePage('Products')
    }

    console.log(watch("example"))

    useState(() => {
        console.log('is there data dear', productInfo.length)
    }, [])

    return (
        <div className='container-product-form'>
            <div className='wrapper-product-form'>
                <h1>Product Information</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='wrapper-form-inputs'>
                        <div className='form-inputs'>
                            {productInfo.length != 0 &&
                                <div className='form-group'>
                                    <label>Product ID</label>
                                    <input id="id" {...register('id')} disabled />
                                </div>
                            }
                            <div className='form-group'>
                                <label>Product Name</label>
                                <input id="name" {...register('name', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>Description</label>
                                <textarea id="description" {...register('description', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>Product Category</label>
                                <select
                                    id="category"
                                    onChange={handleSelectedCategory}
                                    {...register('category', { required: true })}
                                >
                                    <option value="">Select...</option>
                                    <option value="Apparel">Apparel</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Furniture">Furniture</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label>SKU</label>
                                <input id="sku" {...register('sku', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>Brand</label>
                                <input id="brand" {...register('brand', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>Quantity</label>
                                <input type='number' id="quantity" {...register('quantity', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>Unit Price</label>
                                <input type='number' id="unitPrice" {...register('unitPrice', { required: true })} />
                            </div>
                        </div>
                        <div className='form-inputs'>
                            <div className='form-group'>
                                <label>Selling Price</label>
                                <input type='number' id="sellingPrice" {...register('sellingPrice', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>Reorder Level</label>
                                <input type='number' id="reorderLevel" {...register('reorderLevel', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>Supplier ID</label>
                                <input type='number' id="supplierId" {...register('supplierId', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>barcode</label>
                                <input id="barcode" {...register('barcode', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>Location</label>
                                <input id="location" {...register('location', { required: true })} />
                            </div>
                            {productInfo.length != 0 &&
                                <div className='form-group'>
                                    <label>Date Added</label>
                                    <input id="dateAdded" type="datetime" {...register('dateAdded')} disabled />
                                </div>
                            }
                            {productInfo.length != 0 &&
                                <div className='form-group'>
                                    <label>Last Updated</label>
                                    <input id="lastUpdated" type="datetime" {...register('lastUpdated')} disabled />
                                </div>
                            }
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

export default ProductForm;