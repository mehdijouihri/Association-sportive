import '../ButtonSecondary/ButtonSecondary.css'
import React from 'react'

const ButtonSecondary = (props) => {
    return (
        <a href={props.href} className="button_secondary">{props.value}</a>
    );
};

export default ButtonSecondary;