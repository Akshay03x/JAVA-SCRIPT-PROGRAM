import {Link} from "react-router-dom";
export default function Header(){
    return (
        <>
    <ul class="nav nav-tabs">
        <li class="nav-item">
            <Link class="nav-link " aria-current="page" to="./Home">Home</Link>
        </li>

        <li class="nav-item">
            <Link class="nav-link" to="./About">About</Link>
        </li>

        <li class="nav-item">
            <Link class="nav-link" to="./Contact">Contact</Link>
        </li>

        <li class="nav-item">
            <Link class="nav-link" to="./Product">Product</Link>
        </li>

        <li class="nav-item">
            <Link class="nav-link" to="./Student">Student</Link>
        </li>

    </ul>
    </>
    )
}