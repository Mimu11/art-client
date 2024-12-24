import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
const AddCraftItem = props => {
    const handleAddCraft = e => {
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
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;

        // console.log(itemName, subcategoryName, description, price, rating, customization, time, stock, email, name, photo)

        const art = { itemName, subcategoryName, description, price, rating, customization, time, stock, email, name, photo }
        console.log(art)
        fetch('https://art-store-server-sandy.vercel.app/art', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(art)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'The Art added successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
                form.reset()
            })

    }
    return (
        <div className=' font-Firasans'>
            <div className='text-center my-8'>
                <h2 className='text-4xl font-bold text-cyan-800'>Add New Art & Craft</h2>
            </div>
            <form onSubmit={handleAddCraft} className='max-w-4xl p-2 mx-auto'>
                {/* name row */}

                <div className='flex justify-center gap-6'>
                    <div className='w-1/2'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="">Item Name</span>
                            </div>
                            <input type="text" name='itemName' placeholder="Enter Item Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='w-1/2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="">Subcategory Name</span>
                            </div>
                            <input type="text" name='subcategoryName' placeholder="Enter Subcategory Name" className="input input-bordered w-full " />
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
                            <input type="text" name='description' placeholder="Enter short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='w-1/2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="">Price</span>
                            </div>
                            <input type="text" name='price' placeholder="Enter Price" className="input input-bordered w-full " />
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
                            <input type="text" name='rating' placeholder="Enter rating" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='w-1/2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="">Customization</span>
                            </div>
                            <input type="text" name='customization' placeholder="Enter customization" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                <div className='flex justify-center gap-6'>
                    <div className='w-1/2'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="">Processing time</span>
                            </div>
                            <input type="text" name='time' placeholder="Enter processing time" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='w-1/2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="">Stock Status</span>
                            </div>
                            <input type="text" name='stock' placeholder="Enter stock Status" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                <div className='flex justify-center gap-6'>
                    <div className='w-1/2'>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="">Email</span>
                            </div>
                            <input type="text" name='email' placeholder="Enter email" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className='w-1/2'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="">Name</span>
                            </div>
                            <input type="text" name='name' placeholder="Enter Name" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                <div className=''>
                    <label className="form-control">
                        <div className="label">
                            <span className="">Photo</span>
                        </div>
                        <input type="text" name='photo' placeholder="Enter Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>

                <input type="submit" value="Add Art & Craft" className='hover:bg-cyan-800 hover:text-white bg-white text-cyan-800 w-full rounded-lg p-2 my-6 text-xl font-semibold' />

            </form>
        </div>
    );
};

AddCraftItem.propTypes = {

};

export default AddCraftItem;