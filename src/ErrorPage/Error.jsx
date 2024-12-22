import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Error = props => {
    return (
        <div className='justify-items-center min-h-screen content-center'>
            <h1 className='text-5xl mb-10'>Oops.... <br />
                <span>Page Error</span></h1>
            <Link to='/'><button className='btn btn-primary'>Go Home Page</button></Link>
        </div>
    );
};

Error.propTypes = {

};

export default Error;