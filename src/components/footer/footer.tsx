import React from 'react';
import './footer.css';
import *  as storage from '../../data_engine/localstorage';

interface FooterProps {
    author: string
    year: number
    updater?: React.Dispatch<React.SetStateAction<number>>
    updateState?: number
}


const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    let finished: number;
    let active : number;
    finished = storage.finishedCounter()
    active = storage.activeCounter();

    return (
        <footer className='footer navigation'>
            <div className = 'footer-leftbar'>
                <div className='footer-leftbar-counter'>
                    Active tasks: {active}
                </div>
                <div className='footer-leftbar-counter'>
                    Finished tasks: {finished}
                </div>
            </div>
            <div className =  'footer-rightbar'>
                Kanban board by {props.author}, {props.year}
            </div>
        </footer>
    )
}

export default Footer;