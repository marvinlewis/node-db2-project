import React from 'react';
import CarPage from './CarPage';

const CarList = ({ cars, setData }) => {
    console.log( "cars booboohead",cars)
    return(
        <div>
            {cars.map(car => {
                return (
                <CarPage key={car.id} carItem={car}/>
                )
            })}
        </div>
    )
}

export default CarList;