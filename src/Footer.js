import { Link, Navigate } from "react-router-dom";

export default function Footer(){
    return (<>
        <div className="row align-items-center d-flex ">
            <div className="col-md-6 bg-dark text-white text-center p-4 ">
                <h2 className="text-danger">About</h2>
            <Link class="nav-link " aria-current="page" to="/Home">Home</Link>
            <Link class="nav-link" to="/About">About</Link>
            <Link class="nav-link" to="/Contact">Contact</Link>
            <Link class="nav-link" to="/Product">Product</Link>
            <Link class="nav-link" to="/Student">Student</Link>
            <Link class="nav-link" to="/Counter">Counter</Link>
            <Link class="nav-link" to="/ContactForm">ContactForm</Link>
            <Link class="nav-link" to="/effect">useEffect</Link>
            <Link class="nav-link" to="/Api">Api</Link>
            </div>
            <div className="col-md-2 bg-dark text-white text-center p-4">
            <h2 className="text-danger">help?</h2>
            <Link class="nav-link " aria-current="page" to="/Home">Home</Link>
            <Link class="nav-link" to="/About">About</Link>
            <Link class="nav-link" to="/Contact">Contact</Link>
            <Link class="nav-link" to="/Product">Product</Link>
            <Link class="nav-link" to="/Student">Student</Link>
            <Link class="nav-link" to="/Counter">Counter</Link>
            <Link class="nav-link" to="/ContactForm">ContactForm</Link>
            <Link class="nav-link" to="/effect">useEffect</Link>
            <Link class="nav-link" to="/Api">Api</Link>
            </div>
            <div className="col-md-2 bg-dark text-white text-center p-4">
            <h2 className="text-danger">Fqs?</h2>
            <Link class="nav-link " aria-current="page" to="/Home">Home</Link>
            <Link class="nav-link" to="/About">About</Link>
            <Link class="nav-link" to="/Contact">Contact</Link>
            <Link class="nav-link" to="/Product">Product</Link>
            <Link class="nav-link" to="/Student">Student</Link>
            <Link class="nav-link" to="/Counter">Counter</Link>
            <Link class="nav-link" to="/ContactForm">ContactForm</Link>
            <Link class="nav-link" to="/effect">useEffect</Link>
            <Link class="nav-link" to="/Api">Api</Link>
            </div>
            <div className="col-md-2 bg-dark text-white text-center p-4">
            <h2 className="text-danger">Company</h2>
            <Link class="nav-link " aria-current="page" to="/Home">Home</Link>
            <Link class="nav-link" to="/About">About</Link>
            <Link class="nav-link" to="/Contact">Contact</Link>
            <Link class="nav-link" to="/Product">Product</Link>
            <Link class="nav-link" to="/Student">Student</Link>
            <Link class="nav-link" to="/Counter">Counter</Link>
            <Link class="nav-link" to="/ContactForm">ContactForm</Link>
            <Link class="nav-link" to="/effect">useEffect</Link>
            <Link class="nav-link" to="/Api">Api</Link>
            </div>
        </div>
    </>);
}