import './layout.css'
import Header from "./header/header";
import ContentPage from "./content";
import Footer from "./footer";
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div className="row col-md-12 mb-4"><Header /></div>
            <div className="row col-md-12"><ContentPage /></div>
            <div className="row col-md-12"><Footer /></div>
        </>
    )
}

export default Layout;