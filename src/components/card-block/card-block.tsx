import React, { useState } from 'react';
import './card-block.css';
import * as storage from '../../data_engine/localstorage';
import TaskCardWrapper from '../task-card/task-card';

interface CardBlockProps {
    cardname: string
    cardMakerState?:  boolean
}

const POST_BUTTON_TEXT = 'Submit';
const PREPARE_BUTTON_TEXT = '+ Add card';

const CardBlock: React.FC<CardBlockProps> = (props:CardBlockProps) => {
    const [modeSwitch, changeMode] = useState(false);

    let PrepareButton: JSX.Element;
    let buttonRole = props.cardname.toLocaleLowerCase();

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
            className = {`canvas-button ${modeSwitch ? 'post-button' : ''}`}
        >
            {modeSwitch ? POST_BUTTON_TEXT : PREPARE_BUTTON_TEXT}
        </button>

    return (
        <div className='card-block'>
            {props.cardname}
            <div className = 'card-canvas'>
                <TaskCardWrapper cards = {storage.prepareCards(props.cardname.toLowerCase())} />
            </div>
            <input className = 'card-name-input task-card' placeholder='Enter task name' style={{display: modeSwitch ? 'block' : 'none'}} />
            {PrepareButton}
        </div>
    )
}

export default CardBlock;