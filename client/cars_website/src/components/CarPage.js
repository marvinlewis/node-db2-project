import React from 'react';
import CarList from './CarList';
import axios from 'axios';

const CarPage = ({ carItem }) => {

    const handleClick = () => {
        
    }

    return (
        <div>
            <p>{carItem.Make}</p>
        </div>
    )
}

export default CarPage;