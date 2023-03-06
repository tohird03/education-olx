import React from 'react';

const Button = ({type, text}) => {
    console.log(type);
    return (
        <button className={type == "light" ? "btn--light" : "btn--dark"}>
            {text}
        </button>
    );
}

const Link = () => {
    return (
        <div>

        </div>
    );
}

export {Button, Link};
