
import Drop from "./Drop";
import "./test.css"

import { useState } from "react";



const Test = () => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
    };

    const handleMouseLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <div className="App">
            <header className="App-header">
                <div
                    className="menu"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <button>Dropdown Menu</button>
                    {/* <DropdownMenu /> */}
                    {isDropdownVisible && <Drop></Drop>}
                </div>
            </header>
            <h1>Ilhan Khondaker</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro libero non dolores explicabo praesentium iusto maiores aliquam. Esse, maiores.</p>
        </div>
    );
};

export default Test;