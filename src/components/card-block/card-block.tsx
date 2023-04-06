import React from 'react';
import './card-block.css';

interface CardBlockProps {
    cardname: string
}

const CardBlock: React.FC<CardBlockProps> = (props:CardBlockProps) => {
    return (
        <div className='card-block'>
            {props.cardname}
        </div>
    )
}

export default CardBlock;