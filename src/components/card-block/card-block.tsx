import React, { useState } from 'react';
import './card-block.css';
import * as storage from '../../data_engine/localstorage';
import TaskCardWrapper from '../task-card/task-card';
import { FIRST_COLOUMN, SECOND_COLOUMN, THIRD_COLOUMN, FOURTH_COLOUMN } from '../../App';

interface CardBlockProps {
    cardname: string
}

const POST_BUTTON_TEXT = 'Submit';
const PREPARE_BUTTON_TEXT = '+ Add card';

export const previousCard = (currentCard: string | undefined) => {
    switch (currentCard){
        case FIRST_COLOUMN.toLowerCase(): return '';
        case SECOND_COLOUMN.toLowerCase(): return FIRST_COLOUMN.toLowerCase();
        case THIRD_COLOUMN.toLowerCase(): return SECOND_COLOUMN.toLowerCase();
        case FOURTH_COLOUMN.toLowerCase(): return THIRD_COLOUMN.toLowerCase();
    }
    return '';
}

const buttonChecker = (triggered:boolean, input:boolean):boolean =>{
    if (!triggered) return false;
    if (!input) return true;
    return false;
}

const optionRender = (blockName:string): JSX.Element[] => {
    let cards: string[];
    cards = storage.prepareCards(previousCard(blockName.toLowerCase()))
    return cards.map(card => {
        let cardInfo = JSON.parse(localStorage.getItem(card) || '{}');
        return (
            <option value={card} key = {card}>
                {cardInfo.name}
            </option>
        )
    })
}

const CardBlock: React.FC<CardBlockProps> = (props:CardBlockProps) => {
    const [modeSwitch, changeMode] = useState(false);
    const [cardName, setName] = useState('');
    const [publishReady, setReady] = useState(false);

    let PrepareButton: JSX.Element;
    let MainInput: JSX.Element;
    let buttonRole = props.cardname.toLocaleLowerCase();
    let currentInput: HTMLInputElement;

    PrepareButton = 
        <button 
            onClick = {
                () => {
                    if (modeSwitch){
                        storage.buttonHandler(buttonRole, cardName);
                        setName('');
                    }
                    changeMode(!modeSwitch); 
                }
            }
            className = {`canvas-button ${modeSwitch ? 'post-button' : ''}`}
            disabled = {buttonChecker(modeSwitch, publishReady)}
        >
            {modeSwitch ? POST_BUTTON_TEXT : PREPARE_BUTTON_TEXT}
        </button>
    
    if (props.cardname === FIRST_COLOUMN){
        MainInput = 
            <input 
                className = 'card-name-input task-card' 
                placeholder = 'Enter task name' 
                style={{display: modeSwitch ? 'block' : 'none'}}
                id = {props.cardname}
                value = {cardName}
                onInput={e  => {
                    currentInput = e.currentTarget;
                    setName(currentInput.value);
                    if (currentInput.value !== '') {setReady(true)}
                    if (!currentInput.value) {setReady(false)}
                }}
            />
    } else {
        MainInput = 
            <select 
                className = 'card-name-input task-card' 
                style={{display: modeSwitch ? 'block' : 'none'}}
                onInput={e  => {
                    setName(e.currentTarget.value);
                    if (e.currentTarget.value !== '') {setReady(true)}
                    if (!e.currentTarget.value) {setReady(false)}
                }}
            >
                <option value={''}></option>
                {optionRender(props.cardname)}
            </select>
    }

    return (
        <div className='card-block' id = {props.cardname.toLowerCase()}>
            {props.cardname}
            <div className = 'card-canvas'>
                <TaskCardWrapper cards = {storage.prepareCards(props.cardname.toLowerCase())} />
            </div>
            {MainInput}
            {PrepareButton}
        </div>
    )
}

export default CardBlock;