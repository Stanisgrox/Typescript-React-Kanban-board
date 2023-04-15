import { useLocation } from "react-router-dom";
import *  as storage from '../../data_engine/localstorage';
import './task-overview.css';


const TaskOverview = () => {

    const location = useLocation();
    let cardData = storage.getCardInfo(location.state)

    return (
        <main className="task-wrapper">
            <div className="overview-card">
                <h2 className="overview-card-caption">
                    {cardData.name}
                </h2>
                <p className="overview-card-text">
                    {cardData.description}
                </p>
            </div>
        </main>
    )
}

export default TaskOverview;