import { Link } from "react-router-dom";

// import "./test.css"
const Drop = () => {


    return (
        <div className="dropdown-menu">
            <ul>
                <li><Link className=" hover:text-white" to="">Home</Link></li>
                <li><Link className=" hover:text-white" to="dailyDua">Daily Dua</Link></li>
                <li > <Link className="hover:text-white" to="/morningDua">Morning Dua </Link></li>
            </ul>
        </div>
    );
};

export default Drop;