import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import actions from '../../constants/actionTypes'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth);

    const logout = () => {
        dispatch({
            type: actions.LOGOUT
        });
        navigate("/home");
    }

    const logmeout = () => dispatch(() => logout())

    if (!isLoggedIn) {
        navigate("/home");
    }

    return (
        <>
            <div className="row">
                <div className="col-md-11"></div>
                <div className="col-md-1">
                    <button onClick={logmeout}>Logout</button>
                </div>
            </div>
            <div className="row">
                <h6>DEVELOPMENT OF FISHERIES:</h6>
            </div>
            <span style={{ color: 'red', 'font-weight': '650' }}>Supply of fish seed & Prawn Juveniles on 100% grant:</span>
            <p>
                Under the scheme, stocking of fish seed/prawn juveniles are stocked in all the water bodies existing in the state based on the water spread areaon 100% grant.
                The details of year wise fish seed stocking are given in tables below:
            </p>
            <span style={{ color: 'red', 'font-weight': '650' }}>
                Stocking of Fish Seed – IFDS, NSP & TSP
            </span>
            <div>&nbsp;</div>

            <table style={{ margin: 'auto', width: '50%' }}>
                <tr>
                    <th>Year</th>
                    <th>No. of water bodies</th>
                    <th>Seed stocked (In crores)</th>
                    <th>Expenditure (Rs. in crores)</th>
                </tr>
                <tr>
                    <td>2016-17</td>
                    <td>3,939</td>
                    <td>27.85</td>
                    <td>22.46</td>
                </tr>
                <tr>
                    <td>2017-18</td>
                    <td>11,067</td>
                    <td>51.08</td>
                    <td>44.08</td>
                </tr>
            </table>
        </>
    )
}

export default Dashboard;