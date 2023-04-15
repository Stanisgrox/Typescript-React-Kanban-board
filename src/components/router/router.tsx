import { Route, Routes } from 'react-router-dom';
import Main from '../main/main';
import TaskOverview from '../task-overview/task-overview';


const MainRouter = () => {
    return (
        <Routes>
            <Route path = '/' Component={Main}/>
            <Route path = '/task/:id' Component={TaskOverview} />
        </Routes>
    )
}

export default MainRouter;