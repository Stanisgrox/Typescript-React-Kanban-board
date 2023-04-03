import React from 'react';
import './footer.css';

interface FooterProps {
    active: number,
    finished: number,
    author: string,
    year: number
}


const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    return (
        <footer className='footer navigation'>
            <div>
                <div>
                    Active tasks: {props.active}
                </div>
                <div>
                    Finished tasks: {props.finished}
                </div>
            </div>
            <div>
                Kanban board by {props.author}, {props.year}
            </div>
        </footer>
    )
}

export default Footer;