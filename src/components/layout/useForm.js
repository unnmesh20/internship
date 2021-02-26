import React, { useState, useEffect } from 'react';

const useForm = (validateInfo) => {
    const[values, setValues]=useState({
        first_name:"",
        last_name:"",
        email:"",
        phone_number:"",
        percentage10:"",
        percentage12:"",
        cgpa:""

    })
    const [errors,setErrors]=useState({})
    
    const handleChange=e =>{
        const{name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        })
    }
    const handleSubmit=e =>{
        e.preventDefault();
        setErrors(validateInfo(values));
    }
    const handleBlur =event=>{
       // event.preventDefault();
        setErrors(validateInfo(values));
    }
    return {handleChange,values,handleSubmit, handleBlur,errors};
}
 
export default useForm;