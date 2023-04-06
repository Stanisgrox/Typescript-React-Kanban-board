import React from 'react';
import './card-block.css';

interface CardBlockProps {
    cardname: string
    children?: React.ReactNode
}

const CardBlock: React.FC<CardBlockProps> = (props:CardBlockProps) => {
    return (
        <div className='card-block'>
            {props.cardname}
            <div className = 'card-canvas'>
                {props.children}
            </div>
            <button>
                + Add card
            </button>
        </div>
    )
}

export default CardBlock;