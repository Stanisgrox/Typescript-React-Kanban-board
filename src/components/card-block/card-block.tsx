import React, { useState } from 'react';
import './card-block.css';
import * as storage from '../../data_engine/localstorage';

interface CardBlockProps {
    cardname: string
    children: React.ReactNode
    cardMakerState?:  boolean
}

const POST_BUTTON_TEXT = 'Submit';
const PREPARE_BUTTON_TEXT = '+ Add card';

const CardBlock: React.FC<CardBlockProps> = (props:CardBlockProps) => {
    const [modeSwitch, changeMode] = useState(false);

    let PrepareButton: JSX.Element
    let buttonRole = props.cardname.toLocaleLowerCase();
    let displayState = 'none';
    let postButtonClass = '';

    if (modeSwitch){
        postButtonClass = 'post-button';
        displayState = 'block';
    }

    PrepareButton = 
        <button 
            onClick = {
                () => {
                    if (modeSwitch){
                        storage.buttonHandler(buttonRole, 'mewCard');
                    }
                    changeMode(!modeSwitch); 
                }
            }
            className = {`canvas-button ${postButtonClass}`}
        >
            {modeSwitch ? POST_BUTTON_TEXT : PREPARE_BUTTON_TEXT}
        </button>

    return (
        <div className='card-block'>
            {props.cardname}
            <div className = 'card-canvas'>
                {props.children}
            </div>
            <input className = 'card-name-input task-card' placeholder='Enter task name' style={{display: displayState}} />
            {PrepareButton}
        </div>
    )
}

export default CardBlock;