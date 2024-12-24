import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
const DetailsPage = props => {
    const art = useLoaderData()
    console.log(art)
    const { itemName, subcategoryName, description, price, rating, customization, time, stock, email, name, photo } = art;
    return (
        <div className='md:flex font-Firasans p-2 lg:max-w-7xl py-8 md:py-20 mx-auto gap-6'>
            <div className=' md:w-1/2'>
                <img src={photo} alt="" className='md:h-screen border-8 border-orange-500' />
            </div>
            <div className='lg:w-1/2  lg:space-y-6 content-center'>
                <h3 className='text-3xl font-bold md:text-5xl font-Mergrim text-red-400'>{itemName}</h3>
                <h3 className='text-3xl text-cyan-600'>{subcategoryName}</h3>
                <p>{description}</p>
                <div className='flex gap-6'>
                    <p className='font-semiboldbold text-red-500'>{price} <span className='text-cyan-600'>BDT</span></p>
                    <p className='text-red-500'><span className='text-cyan-600 font-semibold'>Rating:</span> {rating}</p>
                </div>
                <div className='md:flex gap-6'>
                    <p className='text-red-500'><span className='font-semibold text-cyan-600'>Customization:</span> {customization}</p>
                    <p className='text-red-500'><span className='text-cyan-600 font-semibold'>Processing Time:</span> {time}</p>
                </div>
                <div className='md:flex gap-6'>
                    <p className='text-red-500'><span className='font-semibold text-cyan-600'>Stock status:</span> {stock}</p>
                    <p className='text-cyan-600 font-semibold'>Email: <span className='text-red-500'>{email}</span></p>

                </div>
                <p className='font-semibold text-cyan-600'>Artist: <span className='text-red-500 font-semibold'>{name}</span></p>
            </div>
        </div>
    );
};

DetailsPage.propTypes = {

};

export default DetailsPage;