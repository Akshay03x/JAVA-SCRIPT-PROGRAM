import {Link} from "react-router-dom";
export default function Header(){
    return (
        <>
            <Link to="./Home">Home</Link>&nbsp;
            <Link to="./About">About</Link>&nbsp;
            <Link to="./Contact">Contact</Link>
        </>
    )
}