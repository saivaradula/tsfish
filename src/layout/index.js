import './layout.css'
import Header from "./header/header";
import ContentPage from "./content";
import Footer from "./footer";

const Layout = () => {
    return (
        <>
            <div><Header /></div>
            <div><ContentPage /></div>
            <div><Footer /></div>
        </>
    )
}

export default Layout;