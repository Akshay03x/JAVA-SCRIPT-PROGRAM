import {Link, useNavigate} from "react-router-dom";
export default function Header(){
    const navigate=useNavigate();
    return   (
        <>
    <ul class="nav nav-tabs text-white bg-dark">
        <li class="nav-item">
            <Link class="nav-link " aria-current="page" to="/Home">Home</Link>
        </li>

        <li class="nav-item">
            <Link class="nav-link" to="/About">About</Link>
        </li>

        <li class="nav-item">
            <Link class="nav-link" to="/Contact">Contact</Link>
        </li>

        <li class="nav-item">
            <Link class="nav-link" to="/Product">Product</Link>
        </li>

        <li class="nav-item">
            <Link class="nav-link" to="/Student">Student</Link>
        </li>

        <li class="nav-item">
            <Link class="nav-link" to="/Counter">Counter</Link>
        </li>

        <li class="nav-item">
            <Link class="nav-link" to="/ContactForm">ContactForm</Link>
        </li>

        <li class="nav-item">
            <Link class="nav-link" to="/effect">useEffect</Link>
        </li>

        <li class="nav-item">
            <Link class="nav-link" to="/Api">Api</Link>
        </li>

        <li class="nav-item">
            <button  className="nav-link" onClick={()=>navigate(-1)}>Back</button>
        </li>
    </ul>

    </>
    )
}