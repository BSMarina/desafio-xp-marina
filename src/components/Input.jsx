import React from "react";
import PropTypes from 'prop-types';

export default function Input({type, name, onChange, value, placeholder, inputTittle}) {
    return (
        <label htmlFor={name}>
            {inputTittle}
        <input type={type} name={name} onChange={onChange} value={value} placeholder={placeholder}/>
        </label>
)};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    inputTittle: PropTypes.string,
};