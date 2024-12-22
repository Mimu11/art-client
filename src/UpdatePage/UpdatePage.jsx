import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
const UpdatePage = props => {
    const arts = useLoaderData();
    const { _id, itemName, subcategoryName, description, price, rating, customization, time, stock, photo } = arts
    const handleUpdateCraft = (e) => {
        e.preventDefault()
        const form = e.target;
        const itemName = form.itemName.value;
        const subcategoryName = form.subcategoryName.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const customization = form.customization.value;
        const time = form.time.value;
        const stock = form.stock.value;
        const photo = form.photo.value;
        const updateArt = { itemName, subcategoryName, description, price, rating, customization, time, stock, photo }
        console.log(updateArt);
        fetch(`http://localhost:5000/art/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateArt)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Art Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })

    }
    return (
        <div className=' font-Firasans'>
            <div className='text-center my-8'>
                <h2 className='text-4xl text-cyan-800 font-bold '>Update Art & Craft</h2>
            </div>
            <form onSubmit={handleUpdateCraft} className='max-w-4xl p-2 mx-auto'>
                {/* name row */}

                <div className='flex justify-center gap-6'>
                    <div className='w-1/2'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="">Item Name</span>
                            </div>
                            <input type="text" name='itemName' defaultValue={itemName} placeholder="Enter Item Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='w-1/2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="">Subcategory Name</span>
                            </div>
                            <input type="text" name='subcategoryName' defaultValue={subcategoryName} placeholder="Enter Subcategory Name" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* Supply row */}

                <div className='flex justify-center gap-6'>
                    <div className='w-1/2'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="">Short description</span>
                            </div>
                            <input type="text" name='description' defaultValue={description} placeholder="Enter short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='w-1/2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="">Price</span>
                            </div>
                            <input type="text" name='price' defaultValue={price} placeholder="Enter Price" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* Category row */}

                <div className='flex justify-center gap-6'>
                    <div className='w-1/2'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="">Rating</span>
                            </div>
                            <input type="text" name='rating' defaultValue={rating} placeholder="Enter rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='w-1/2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="">Customization</span>
                            </div>
                            <input type="text" name='customization' defaultValue={customization} placeholder="Enter customization" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                <div className='flex justify-center gap-6'>
                    <div className='w-1/2'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="">Processing time</span>
                            </div>
                            <input type="text" name='time' defaultValue={time} placeholder="Enter processing time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='w-1/2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="">Stock Status</span>
                            </div>
                            <input type="text" name='stock' defaultValue={stock} placeholder="Enter stock Status" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                <div className=''>
                    <label className="form-control">
                        <div className="label">
                            <span className="">Photo</span>
                        </div>
                        <input type="text" name='photo' defaultValue={photo} placeholder="Enter Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>

                <input type="submit" value="Update Coffee" className='hover:bg-cyan-800 hover:text-white bg-white text-cyan-800 w-full rounded-lg p-2 my-6 text-xl font-semibold' />

            </form>
        </div>
    );
};

UpdatePage.propTypes = {

};

export default UpdatePage;