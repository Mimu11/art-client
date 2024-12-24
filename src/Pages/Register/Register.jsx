import PropTypes from 'prop-types';
import Swal from 'sweetalert2'
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
const Register = props => {
    const { createUser, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const [error, setError] = useState('')
    const handleSignUp = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        setError('')
        if (!/(?=.*[a-z])(?=.*[A-Z]).{6,}/.test(password)) {
            setError('Password must be an upper and lowercase and length atleast 6 characters')
            return;
        }
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const user = { name, email, password, photo }
                fetch('https://art-store-server-sandy.vercel.app/user', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'success!',
                                text: 'Registered successfully',
                                icon: 'success',
                                confirmButtonText: 'Done'
                            })
                        }
                        navigate('/login')
                    })

            })
            .catch(error => {
                console.error(error)
            })

    }
    const handleGoogleLogIn = () => {
        googleLogin()
            .then(result => {
                if (result.user) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Registered successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero font-Firasans bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-semibold text-center mt-6">Register now!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo Url" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <small className='text-red-600'>{error}</small>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <small>Already have an account? Please <Link to='/login'><button className="btn btn-link">Login</button></Link></small>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className="form-control mt-2">
                            <button onClick={handleGoogleLogIn} className="btn btn-primary">Sign up with Google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

Register.propTypes = {

};

export default Register;