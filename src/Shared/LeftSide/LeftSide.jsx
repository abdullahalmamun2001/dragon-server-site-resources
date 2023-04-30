import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h2>All Category</h2>
            <div className='ps-3'>
                {
                    categories.map(category => <p><Link className='text-decoration-none p-3' to={`category/${category.id}`}>{category.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSide;