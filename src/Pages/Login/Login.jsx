import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
const Login = props => {
    const navigate = useNavigate();
    const location = useLocation();
    const { singIn, googleLogin } = useContext(AuthContext);
    const handleSignIn = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        singIn(email, password)
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Logged in",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                alert(error)
            })
    }
    const googleSignIn = () => {
        googleLogin()
            .then(result => {
                console.log(result.user)
                if (result.user) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Login successfull",
                        timer: 1500,
                        confirmButtonText: 'Done'
                    });
                }
                navigate('/')

            })
            .catch()
    }
    return (
        <div className="hero font-Firasans bg-base-200 md:min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-semibold text-center mt-6">Login now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                            <small>Don't have an account? Please <Link to='/register'><button className="btn btn-link">Register</button></Link> </small>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <div className="form-control mt-2">
                            <button onClick={googleSignIn} className="btn btn-primary">Google Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {

};

export default Login;