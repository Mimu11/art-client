import PropTypes from 'prop-types';
import slider1 from '../../assets/slider-2-1.jpg'
import slider2 from '../../assets/slider-2-2.jpg'
import slider3 from '../../assets/slider-2-3.jpg'
import slider4 from '../../assets/slider-2-4.jpg'
import Header from '../../Shared/Header';
import Marquee from "react-fast-marquee";
import { BsFlower2 } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Banner = props => {
    return (
        <div className='w-auto text-white'>
            <div className="carousel  relative lg:min-h-screen  w-full">
                <div id="slide1" className="carousel-item  bg-cover bg-no-repeat  w-full"
                    style={{ backgroundImage: `url(${slider4})` }}>
                    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className='justify-items-center drop-shadow-lg w-full my-4 content-center space-y-8 '>
                        <h1 className=' text-4xl font-bold md:text-6xl text-center '>Selecting Creative Art
                            Events</h1>
                        <p className='md:w-2/3 text-center font-Firasans mx-auto'> "Nor should there be any pressure in the fermentum, the placement of the urn. In this condition, it is important to not disturb the ease of action."</p>
                        <Link to='/myArt'>
                            <button className='bg-cyan-800 text-white mt-8 hover:bg-white hover:text-cyan-800 p-3 rounded-lg'>View Collection</button>
                        </Link>
                    </div>
                    <div className="absolute  bg-opacity-50 left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item bg-cover  bg-no-repeat relative w-full"
                    style={{ backgroundImage: `url(${slider2})` }}>
                    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className='justify-items-center text-white drop-shadow-lg my-4 w-full content-center  space-y-8 '>
                        <h1 className='text-4xl font-bold md:text-6xl text-center '>Selecting Creative Art Events</h1>
                        <p className='md:w-2/3 mx-auto text-center font-Firasans '> "Nor should there be any pressure in the fermentum, the placement of the urn. In this condition, it is important to not disturb the ease of action."</p>
                        <Link to='/myArt'>
                            <button className='bg-cyan-800 mt-8 text-white hover:bg-white hover:text-cyan-800 p-3 rounded-lg'>View Collection</button>
                        </Link>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item bg-cover bg-no-repeat relative w-full"
                    style={{ backgroundImage: `url(${slider3})` }}>
                    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className='justify-items-center drop-shadow-lg my-4 w-full content-center  space-y-8 '>
                        <h1 className='text-4xl font-bold md:text-6xl text-center '>Selecting Creative Art Events</h1>
                        <p className='md:w-2/3 mx-auto text-center font-Firasans'> "Nor should there be any pressure in the fermentum, the placement of the urn. In this condition, it is important to not disturb the ease of action."</p>
                        <Link to='/myArt'>
                            <button className='bg-cyan-800 mt-8 text-white hover:bg-white hover:text-cyan-800 p-3 rounded-lg'>View Collection</button>
                        </Link>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item bg-cover bg-no-repeat relative w-full"
                    style={{ backgroundImage: `url(${slider1})` }}>
                    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
                    <div className='justify-items-center drop-shadow-lg my-4 content-center w-full  space-y-8 '>
                        <h1 className='text-4xl font-bold md:text-6xl text-center '>Selecting Creative Art Events</h1>
                        <p className='md:w-2/3 mx-auto text-center font-Firasans'> "Nor should there be any pressure in the fermentum, the placement of the urn. In this condition, it is important to not disturb the ease of action."</p>
                        <Link to='/myArt'>
                            <button className='bg-cyan-800 mt-8 text-white hover:bg-white hover:text-cyan-800 p-3 rounded-lg'>View Collection</button>
                        </Link>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <Marquee className='bg-cyan-800 py-10 text-white pause' >
                <div className='flex gap-4 lg:gap-16'>

                    <p className='text-3xl ml-4 lg:ml-16 '> 40% Off Hand Made Paintings</p>
                    <p className='content-center text-3xl'><BsFlower2 /></p>
                    <p className='text-3xl'> Free Shipping On Order Over 6000 Taka</p>
                    <p className='content-center text-3xl'><BsFlower2 /></p>
                    <p className='text-3xl'> Free Painting Beginners Courses</p>
                    <p className='content-center text-3xl'><BsFlower2 /></p>
                    <p className='text-3xl'>Free Yearly Exhibition Pass</p>
                    <p className='content-center text-3xl'><BsFlower2 /></p>

                </div>
            </Marquee>

        </div>

    );
};

Banner.propTypes = {

};

export default Banner;