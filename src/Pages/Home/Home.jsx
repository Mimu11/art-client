import PropTypes from 'prop-types';
import Banner from './Banner';
import CraftItem from './CraftItem';
import { useLoaderData } from 'react-router-dom';
import PaintingBlog from './PaintingBlog';
import Accordian from './Accordian';
import { Helmet } from 'react-helmet-async';
const Home = props => {
    const arts = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>Art & Craft</title>
            </Helmet>
            <Banner></Banner>
            <div className='text-center mt-10'>
                <h1 className='text-4xl md:text-5xl text-cyan-800 font-bold'>Art Collections</h1>
                <p className='md:w-2/3 mx-auto font-Firasans text-black mt-8'>"Smooth movement in front with measured rhythm and coordinated timing. My time is controlled without any sudden motions, maintaining a sense of balance and grace."</p>
            </div>
            <div className='grid px-4 md:grid-cols-3 gap-6 max-w-7xl mx-auto my-10 md:my-20'>
                {
                    arts.map(art => <CraftItem key={art._id} art={art}></CraftItem>)
                }
            </div>
            <Accordian></Accordian>
            <PaintingBlog></PaintingBlog>
        </div>
    );
};

Home.propTypes = {

};

export default Home;