import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return children;
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>

};

PrivateRouter.propTypes = {

};

export default PrivateRouter;