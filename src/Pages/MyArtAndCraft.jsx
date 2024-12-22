import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import CraftItem from './Home/CraftItem';
import MyartList from './Home/MyartList';
import { useState } from 'react';
const MyArtAndCraft = () => {
    const loadedArts = useLoaderData()
    const [arts, setArts] = useState(loadedArts)
    return (
        <div className='grid lg:grid-cols-4 gap-6 max-w-7xl mx-auto my-6 md:my-20'>
            {
                arts.map(art => <MyartList
                    setArts={setArts}
                    arts={arts}
                    key={art._id}
                    art={art}></MyartList>)
            }
        </div>
    );
};

MyArtAndCraft.propTypes = {

};

export default MyArtAndCraft;