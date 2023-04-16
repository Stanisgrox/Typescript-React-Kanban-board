import { useState } from "react";
import { FIRST_COLOUMN, SECOND_COLOUMN, THIRD_COLOUMN, FOURTH_COLOUMN } from "../../App"
import CardBlock from "../card-block/card-block"
import Footer from "../footer/footer";


const Main = () => {

    const [updator, updater] = useState(0);

    return (
        <div>
            <main className = 'card-wrapper' >
                <CardBlock cardname = {FIRST_COLOUMN} updater = {updater} updateState = {updator}/>
                <CardBlock cardname = {SECOND_COLOUMN} updater = {updater} updateState = {updator}/>
                <CardBlock cardname = {THIRD_COLOUMN} updater = {updater} updateState = {updator}/>
                <CardBlock cardname = {FOURTH_COLOUMN} updater = {updater} updateState = {updator}/>
            </main>
            <Footer author = '<NAME>' year={2023} updater = {updater} updateState = {updator} />
        </div>
    )
}

export default Main;