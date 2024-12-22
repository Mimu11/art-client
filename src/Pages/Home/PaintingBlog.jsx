import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PaintingBlog = props => {
    return (
        <div className='my-14 p-4'>
            <div className='text-center'>
                <h1 className='text-5xl font-semibold text-cyan-800'>Painting & Art Blog</h1>
                <p className='md:w-2/3 mx-auto font-Firasans text-black my-8'>"At the front, there is a gateway that does not crumble but instead lifts and sustains. It works with hunger for success and leans toward perseverance. Constant strength improves the uplifting motion of progress."</p>
            </div>
            <div className='lg:flex max-w-7xl mx-auto gap-10'>
                <div className=" bg-base-100 flex flex-col  shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/wLnq6r8/Blog-01.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body flex-grow bg-[#fff6e4] space-y-2 text-black">
                        <h2 className="card-title">10 December,2024</h2>
                        <p className='text-2xl font-Mergrim font-semibold text-red-600'>Brush Mastery Unleashed: Insights From The Artist View</p>
                        <p className='font-Firasans'>"Unleash your creativity and bring your ideas to life with our inspiring art and craft resources. Whether you're a seasoned artist or just beginning your creative journey"</p>
                    </div>
                </div>
                <div className=" bg-base-100 flex flex-col shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/wLnq6r8/Blog-01.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body flex-grow bg-[#fff6e4] space-y-2 text-black">
                        <h2 className="card-title">10 December,2024</h2>
                        <p className='text-2xl font-Mergrim font-semibold text-red-600'>Oil And Canvas Painting: Where Imagination Meets Reality</p>
                        <p className='font-Firasans'>"Unleash your creativity and bring your ideas to life with our inspiring art and craft resources. Whether you're a seasoned artist or just beginning your creative journey"</p>
                    </div>
                </div>
                <div className="flex flex-col bg-base-100  shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/wLnq6r8/Blog-01.jpg"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body flex-grow bg-[#fff6e4]  space-y-2 text-black">
                        <h2 className="card-title">10 December,2024</h2>
                        <p className='text-2xl font-Mergrim font-semibold text-red-600'>Art Gallery & Museum: Colors, Stories, And Inspiration</p>
                        <p className='font-Firasans'>"Unleash your creativity and bring your ideas to life with our inspiring art and craft resources. Whether you're a seasoned artist or just beginning your creative journey"</p>
                    </div>
                </div>

            </div>
        </div>

    );
};

PaintingBlog.propTypes = {

};

export default PaintingBlog;