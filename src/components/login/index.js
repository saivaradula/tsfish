import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from 'react-router-dom';
import actions from '../../constants/actionTypes'
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const LoginComponent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const loginFailed = () => {
        confirmAlert({
            title: 'Invalid Username or Password',
            message: 'Please verify credientials !!!',
            buttons: [
                {
                    label: 'Okay',
                    onClick: () => { return }
                }
            ]
        });
    }

    const login = async (u, p) => {
        if (u === 'admin') {
            if (p === 'admin') {
                let user = {
                    name: 'Administrator',
                    phone: '0000000000',
                    dept: 'Fishery Dept',
                    role: 'admin'
                }
                localStorage.setItem("user", JSON.stringify(user))
                dispatch({
                    type: actions.LOGIN_SUCCESS,
                    payload: { user: user }
                });
                navigate("/dashboard");
            } else {
                loginFailed()
            }
        } else {
            loginFailed()
        }
    }

    const handleSubmit = () => dispatch(() => login(username, password))

    if (isLoggedIn) {
        navigate("/dashboard");
    }

    return (
        <div className='row'>
            <div className='col-md-12 loginbox'>
                <div className='row col-md-12'>
                    <h4>Login</h4>
                </div>
                <div>&nbsp;</div>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-2 mt-2'>
                        <label>Username:</label>
                    </div>
                    <div className='col-md-7'>
                        <input type='text' onChange={e => setUserName(e.target.value)} className='form-control' />
                    </div>
                </div>
                <div>&nbsp;</div>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-2 mt-2'>
                        <label>Password:</label>
                    </div>
                    <div className='col-md-7'>
                        <input type='password' onChange={e => setPassword(e.target.value)} className='form-control' />
                    </div>
                </div>
                <div>&nbsp;</div>
                <div className='row'>
                    <div className='col-md-6'></div>
                    <div className='col-md-6'>
                        <button onClick={handleSubmit} className='border btn btn-secondary'>Submit</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginComponent;