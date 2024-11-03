import React from 'react';

const Card = ({coffee}) => {
    const {name,image,category,origin,type,id,rating,popularity}=coffee || {};
    
    return (
        <div>
            <h2>{name}</h2>
        </div>
    );
};


export default Card;