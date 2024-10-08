import { useEffect, useState } from "react";

const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])
    return (
        <div>
            <h3>Bottles here: {bottles.length}</h3>
        </div>
    );
};

export default Bottles;