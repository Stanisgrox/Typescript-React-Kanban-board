import { Link, useLocation } from "react-router-dom";
import *  as storage from '../../data_engine/localstorage';
import './task-overview.css';
import cross from '../../images/cross.svg';
import Footer from "../footer/footer";

const TaskOverview = () => {

    const location = useLocation();
    let cardData = storage.getCardInfo(location.state)

    return (
        <div>
            <main className="task-wrapper">
                <div className="overview-card">
                    <h2 className="overview-card-caption">
                        {cardData.name}
                    </h2>
                    <Link 
                        to = {`/`} 
                        style = {{textDecoration: 'none', color: '#FFF'}} 
                    >
                        <button className="overview-card-close">
                            <img 
                                src = {cross} 
                                alt = 'profile avatar' 
                            />
                        </button>
                    </Link>
                    <p className="overview-card-text">
                        {cardData.description}
                    </p>
                </div>
            </main>
            <Footer author = '<NAME>' year={2023} />
        </div>
    )
}

export default TaskOverview;