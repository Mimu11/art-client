import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const CraftItem = ({ art }) => {
    const { _id, photo, itemName, subcategoryName, price } = art;
    return (
        <div className="flex flex-col bg-base-100 lg:w-96 mx-auto shadow-xl">
            <figure>
                <img
                    src={photo}
                    alt="Shoes" className='border-8 border-orange-500' />
            </figure>
            <div className="card-body bg-[#fff6e4] gap-0 md:gap-1 flex-grow  text-center">
                <h2 className="text-xl text-cyan-600 font-Firasans">{itemName}</h2>
                <p className='text-4xl font-semibold text-red-500 mt-4'>{subcategoryName} </p>
                <p className='text-xl mt-4'>{price} BDT</p>
                <div className=" mt-4 flex justify-center  ">
                    <Link to={`details/${_id}`}><button className="btn text-white bg-cyan-800 hover:bg-white hover:text-cyan-600">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

CraftItem.propTypes = {

};

export default CraftItem;