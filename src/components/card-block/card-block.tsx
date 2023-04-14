import React from 'react';
import './card-block.css';
import * as storage from '../../data_engine/localstorage';

interface CardBlockProps {
    cardname: string
    children?: React.ReactNode
}

const POST_BUTTON_TEXT = 'Submit';
const PREPARE_BUTTON_TEXT = '+ Add card';

const CardBlock: React.FC<CardBlockProps> = (props:CardBlockProps) => {
    let PostButton: JSX.Element;
    let PrepareButton: JSX.Element
    let buttonRole = props.cardname.toLocaleLowerCase();

    PrepareButton = 
        <button 
            onClick={storage.buttonHandler}
            data-role = {buttonRole}
            className = 'canvas-button'
        >
            {PREPARE_BUTTON_TEXT}
        </button>

    PostButton = 
        <button
            data-role = {buttonRole}
            className = 'canvas-button post-button'
        >
            {POST_BUTTON_TEXT}
        </button>

    return (
        <div className='card-block'>
            {props.cardname}
            <div className = 'card-canvas'>
                {props.children}
            </div>
            <input className = 'card-name-input task-card' placeholder='Enter task name'/>
            {PrepareButton}
        </div>
    )
}

export default CardBlock;