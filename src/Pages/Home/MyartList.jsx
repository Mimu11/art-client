import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyartList = ({ art, arts, setArts }) => {
    const { _id, itemName, subcategoryName, price, rating, customization, time, stock, photo } = art;


    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/art/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Art & Craft has been deleted.",
                                icon: "success"
                            });
                            const remainingArts = arts.filter(art => art._id !== id)
                            setArts(remainingArts)
                        }
                    })
            }
        });

    }
    return (
        <div className='border font-Firasans p-4 rounded-xl shadow-lg'>
            <div>
                <img src={photo} alt="" className='w-auto' />
            </div>
            <div className='mt-2 content-center'>
                <h3 className=' font-Mergrim text-red-400 font-bold'>{itemName}</h3>
                <h3 className=' text-cyan-600'>{subcategoryName}</h3>
                <div className='flex gap-6'>
                    <p className='font-semiboldbold text-red-500'>{price} <span className='text-cyan-600'>BDT</span></p>
                    <p className='text-red-500'><span className='text-cyan-600 font-semibold'>Rating:</span> {rating}</p>
                </div>
                <div className='gap-6'>
                    <p className='text-red-500'><span className='font-semibold text-cyan-600'>Customization:</span> {customization}</p>
                    <p className='text-red-500'><span className='text-cyan-600 font-semibold'>Processing Time:</span> {time}</p>
                </div>
                <div className='flex gap-6'>
                    <p className='text-red-500'><span className='font-semibold text-cyan-600'>Stock status:</span> {stock}</p>
                </div>
                <div className='flex gap-4 justify-center mt-4 '>
                    <button onClick={() => handleDelete(_id)} className='bg-red-500 text-white
                     hover:bg-white hover:text-cyan-800 p-2 rounded-md'>Delete</button>

                    <Link to={`/update/${_id}`}>
                        <button className='bg-cyan-800 text-white
                     hover:bg-white hover:text-cyan-800 p-2 rounded-lg'>Update</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

MyartList.propTypes = {

};

export default MyartList;