import { FIRST_COLOUMN, SECOND_COLOUMN, THIRD_COLOUMN, FOURTH_COLOUMN } from "../../App"
import CardBlock from "../card-block/card-block"


const Main = () => {
    return (
        <main className = 'card-wrapper'>
            <CardBlock cardname = {FIRST_COLOUMN} />
            <CardBlock cardname = {SECOND_COLOUMN} />
            <CardBlock cardname = {THIRD_COLOUMN} />
            <CardBlock cardname = {FOURTH_COLOUMN} />
        </main>
    )
}

export default Main;