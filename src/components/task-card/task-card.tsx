import React from 'react';
import './task-card.css';

interface Props {
    cards: string[]
}

const TaskCardWrapper: React.FC<Props> = ({ cards }) => {

    const renderCard = (): JSX.Element[] => {
        return cards.map(card => {
            let cardInfo = JSON.parse(localStorage.getItem(card) || '{}');
            return (
                <div className='task-card' key={card}>
                    {cardInfo.name}
                </div>
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