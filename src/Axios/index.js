import { useState, useEffect } from 'react'
import axios from 'axios'
function Axios() {
    const [data, setdata] = useState([]);
    const fetchData = async () => {
//       Them Api vao cho trong
        const response = await axios.get(""); 
        setdata(response.data);
    };
    useEffect(() => {
        fetchData();
    }, []);
    return data;
}

export default Axios;
