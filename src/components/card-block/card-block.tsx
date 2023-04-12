import React from 'react';
import './card-block.css';
import mockWriter from '../../data_engine/localstorage';

interface CardBlockProps {
    cardname: string
    children?: React.ReactNode
}

const BUTTON_TEXT = '+ Add card'

const CardBlock: React.FC<CardBlockProps> = (props:CardBlockProps) => {
    let button: JSX.Element;

    if (props.cardname.toLowerCase() === 'backlog'){
        button = <button onClick={mockWriter}>
            {BUTTON_TEXT}
        </button>
    }
    else{
        button = <button>{BUTTON_TEXT}</button>
    }

    return (
        <div className='card-block'>
            {props.cardname}
            <div className = 'card-canvas'>
                {props.children}
            </div>
            {button}
        </div>
    )
}

export default CardBlock;