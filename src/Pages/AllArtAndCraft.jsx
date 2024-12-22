import PropTypes from 'prop-types';
import { Link, useLoaderData } from 'react-router-dom';
const AllArtAndCraft = props => {
    const arts = useLoaderData();
    const { itemName, subcategoryName, description, price, rating, customization, time, stock, email, name, photo } = arts;
    console.log(arts)
    return (
        <div className="overflow-x-auto lg:max-w-6xl mx-auto text-black font-Firasans">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className='text-black'>
                        <th>Art Demo</th>
                        <th>Name of Art</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                {
                    arts.map(art => <tbody key={art._id}>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={art.photo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {art.itemName}
                                <br />

                            </td>
                            <td>{art.price}</td>
                            <th>
                                <Link to={`/details/${art._id}`}><button className='bg-cyan-800 text-white hover:bg-white hover:text-cyan-800 p-2 rounded-lg'>View Details</button></Link>
                            </th>
                        </tr>
                    </tbody>)
                }

            </table>
        </div>
    );
};

AllArtAndCraft.propTypes = {

};

export default AllArtAndCraft;