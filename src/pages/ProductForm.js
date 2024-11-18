import { useState } from 'react';
import '../style/ProductForm.css';
import { useForm } from "react-hook-form"

function ProductForm({handlePage}) {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedStatus, setSelectedStatus] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    const handleSelectedCategory = () => { }
    const handleSelectedStatus = () => { }
    const handleCancel = () => {
        handlePage('Product')
    }

    console.log(watch("example"))

    return (
        <div className='container-product-form'>
            <div className='wrapper-product-form'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-inputs'>
                        <div className='form-group'>
                            <label>Product Name</label>
                            <input />
                        </div>
                        <div className='form-group'>
                            <label>Product Category</label>
                            <select value={selectedCategory} onChange={handleSelectedCategory}>
                                <option value="">Select...</option>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label>SKU</label>
                            <input />
                        </div>
                        <div className='form-group'>
                            <label>price</label>
                            <input type='number' />
                        </div>
                        <div className='form-group'>
                            <label>Quantity in Stock</label>
                            <input type='number' />
                        </div>
                        <div className='form-group'>
                            <label>Supplier</label>
                            <input type='number' />
                        </div>
                        <div className='form-group'>
                            <label>Product Image</label>
                            <input type='file' accept='image/*' />
                        </div>
                        <div className='form-group'>
                            <label>Product Status</label>
                            <select value={selectedStatus} onChange={handleSelectedStatus}>
                                <option value="">Select...</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
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