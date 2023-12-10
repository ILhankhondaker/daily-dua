import { useState, useEffect } from 'react';
const MorningDua = () => {

    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        // Function to fetch and parse JSON data
        const loadJSONData = async () => {
            try {
                // Replace the URL with the actual URL of your JSON data
                const jsonUrl = 'morning.json';

                // Fetch JSON data
                const response = await fetch(jsonUrl);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                // Parse JSON data
                const data = await response.json();

                // Set the parsed JSON data in the state
                setJsonData(data);

                // Example: You can perform additional actions with the data here
                console.log('JSON Data:', data);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        };

        // Call the function to load JSON data when the component mounts
        loadJSONData();
    }, []); // Empty dependency array ensures the effect runs only once

    return (
        <div>
            <h1>Morning Dua </h1>
            <div>


                {/* Example: Displaying data on the page */}

                {jsonData && (
                    <>
                        {jsonData.map((item, _id) => (
                            // <li key={index}>{`${item.name}: ${item.value}`}</li>
                            <div className="my-5 mt-10 mx-auto w-4/5" key={_id}>
                                <h1 className="font-bold text-xl leading-8">⇨{item.title}</h1>
                                <h1 className="font-bold leading-8 text-right">{item.dua}</h1>
                                <p className="leading-8"><span className="font-bold">উচ্চারনঃ</span>  {item.pronunciation} </p>
                                <p className="leading-8"> <span className="font-bold">অর্থ-</span>{item.translate}</p>
                                <p className='font-bold'>{item.source}</p>
                            </div>

                        ))}
                    </>

                )}
            </div>
        </div>
    );
};

export default MorningDua;