import './styles.css';
import { useState } from 'react';

import {UpdateValues} from "./useEffect";
import ChangeColor from "./useState";
import Menu from "./navbar";

function Main(){
    const cards = [<Menu />, <ChangeColor/>,<UpdateValues />]
    let [index, setIndex] = useState(0);
    let [display, setDisplay] = useState(cards[index]);

    function Prev(){
        if(index<=0){
            setDisplay (cards[0]);
        }
        else{
            setDisplay(cards[index-1]);
            setIndex(index-1);
        }
        }

    function Next(){

        //the last array element is cards.length-1
        if(index >= cards.length-1){
            setDisplay(cards[cards.length-1]);
        }
        else if(index < cards.length){
            setDisplay(cards[index+1]);
            setIndex(index+1);
        }
    }

    return(
        <div>
            <div className='h-screen flex justify-center items-center flex-col'>
                <div className='flex h-4/5 '>
                    <div className='flex items-end' onClick={Prev}>
                        <span  className='p-2 bg-blue-100 cursor-pointer rounded-lg px-3' >&lt; Previous</span>
                    </div>
                    <div className='bg-blue-100 outline-8 outline-black rounded-lg p-10 mx-10 w-96'>
                        {display}
                    </div>
                    <div className='flex items-end' onClick={Next}>
                        <span className='p-2 bg-blue-100 cursor-pointer rounded-lg px-5' >Next &gt;</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main; 