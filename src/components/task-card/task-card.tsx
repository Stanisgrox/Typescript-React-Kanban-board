import React from 'react';
import './task-card.css';
import { Link } from 'react-router-dom';

interface Props {
    cards: string[]
}

const TaskCardWrapper: React.FC<Props> = ({ cards }) => {

    const renderCard = (): JSX.Element[] => {
        return cards.map(card => {
            //Если в коллекции нет карточек, возвращает пустышку
            if (cards[0] === ''){return(<div key = {card}></div>)}
            
            let cardInfo = JSON.parse(localStorage.getItem(card) || '{}');
            return (
                <Link 
                    to = {`/task/${card}`} 
                    key = {card} 
                    style = {{ textDecoration: 'none' }} 
                    state = {card}
                >
                    <div className='task-card'>
                        {cardInfo.name}
                    </div>
                </Link>
            )
        })
    }

    return (
        <div>
            {renderCard()}
        </div>
    )
}

export default TaskCardWrapper;