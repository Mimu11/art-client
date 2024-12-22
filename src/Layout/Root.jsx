import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
const Root = props => {
    return (
        <div className='font-Mergrim  bg-[#fff6e4]'>
            <Header></Header>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

Root.propTypes = {

};

export default Root;