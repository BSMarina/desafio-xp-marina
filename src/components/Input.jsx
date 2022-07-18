import React from "react";

export default function Input({type, name, onChange, value, placeholder, inputTittle}) {
    return (
        <label htmlFor={name}>
            {inputTittle}
<input type={type} name={name} onChange={onChange} value={value} placeholder={placeholder}/>
        </label>
)};