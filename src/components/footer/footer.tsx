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
    finished = storage.finishedCounter()

    return (
        <footer className='footer navigation'>
            <div>
                <div>
                    Active tasks: N
                </div>
                <div>
                    Finished tasks: {finished}
                </div>
            </div>
            <div>
                Kanban board by {props.author}, {props.year}
            </div>
        </footer>
    )
}

export default Footer;