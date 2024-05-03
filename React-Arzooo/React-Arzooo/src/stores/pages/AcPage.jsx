import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

const AcPage = () => {
    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await fetch('http://192.168.1.163:8093/getProducts');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setApiData(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    return (
        <>
            <Navbar />
            <img className='image' src="/banner.jpeg" alt="" />
            <div className="fullpage">
                <div className='pageSection'>
                    {apiData.length > 0 ? (
                        apiData.map((item) => (
                            <div key={item.id}>
                                <Link to={`/ac/${item.id}`}>
                                    <div className="pageImg">
                                        <img className='image2' src={`data:image/jpeg;base64,${item.image_url}`} alt={item.productName} />
                                    </div>
                                </Link>
                                <div className="proModel">
                                    {item.productName}
                                </div>
                                <div className="proModel2">
                                    <FontAwesomeIcon icon={faIndianRupeeSign} />
                                    {item.price}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AcPage;
