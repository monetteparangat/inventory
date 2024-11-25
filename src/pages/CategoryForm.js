import { useState } from 'react';
import '../style/ProductForm.css';
import { useForm } from "react-hook-form"
import { post, put } from '../services/crudApi';
import { CATEGORY_API as ENDPOINT } from '../config/endpoints';

function CategoryForm({ handlePage, categoryInfo }) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: categoryInfo[0]
    })

    const onSubmit = async (data) => {
        const id = data?.id;
        let response;
        console.log('is id undefined', id)
        try {
            if (id === undefined) {
                response = await post(ENDPOINT, data);
                console.log("Category added successfully ", response);
            } else {
                response = await put(`${ENDPOINT}/${id}`, data);
                console.log("Category updated successfully", response);
            }
        } catch (error) {
            console.error("Error adding product: ", error);
        }
    }


    const handleCancel = () => {
        handlePage('Categories')
    }

    console.log(watch("example"))

    useState(() => {
        console.log('is there data dear', categoryInfo.length)
    }, [])

    return (
        <div className='container-product-form'>
            <div className='wrapper-product-form'>
                <h1>Category Information</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='wrapper-form-inputs'>
                        <div className='form-inputs'>
                            {categoryInfo.length != 0 &&
                                <div className='form-group'>
                                    <label>Category ID</label>
                                    <input id="id" {...register('id')} disabled />
                                </div>
                            }
                            <div className='form-group'>
                                <label>Category Name</label>
                                <input id="name" {...register('name', { required: true })} />
                            </div>
                            <div className='form-group'>
                                <label>Description</label>
                                <textarea id="description" {...register('description', { required: true })} />
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

export default CategoryForm;