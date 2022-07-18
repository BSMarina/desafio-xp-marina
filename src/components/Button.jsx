import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ name, handleClick, isDisabled, buttonTittle }) {
    return (
        <button name={ name } type='button' onClick={ ({ target }) => handleClick(target) } disabled={ isDisabled }>
            {buttonTittle}
        </button>
    );
};

Button.propTypes = {
    name: PropTypes.string,
    handleClick: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool,
    buttonName: PropTypes.string,
};
