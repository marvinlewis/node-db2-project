import React, { useState } from 'react';
import axios from "axios";

const CarForm = ({ setData }) => {
    const [ values, setValues ] = useState({
        make : "",
        model : "",
        mileage : '',
        vin : '',
    });

    const onChange = e => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:4000/api/cars', values)
        .then(res =>{
            console.log( 'in submit',res)
           // setData(res.data.data)
           setValues({
            make : "",
            model : "",
            mileage : '',
            vin : '',
           })
        })
        .catch(err => console.log(err))
    }
 

    return (
        <form onSubmit={onSubmit}>
            <input
            name= "make"
            type= "text"
            placeholder= "Car make here...."
            onChange= {onChange}
            />
            <input
            name= "model"
            type= "text"
            placeholder= "Car model here...."
            onChange= {onChange}
            />
            <input
            name= "mileage"
            type= "number"
            placeholder= "Car milegae here...."
            onChange= {onChange}
            />
            <input
            name= "vin"
            type= "text"
            placeholder= "Car vin here...."
            onChange= {onChange}
            />
            <button>Submit</button>
        </form>
    )
}

export default CarForm;