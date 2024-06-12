import { useState } from 'react';
import './styles.css';
import ChangeColor from "./useState";
import {UpdateValues} from "./useEffect";
import {TestValues} from "./useEffect";

function Main(){
    const cards = [<ChangeColor/>,<UpdateValues />, <TestValues />]
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
                <div className='flex flex-row w-fit h-4/5 '>
                    <span className='flex items-end p-5 bg-red' onClick={Prev}>Previous</span>
                    <div className='bg-blue-100 outline-8 outline-black rounded-lg p-10'>
                        {display}
                    </div>
                    <span className='flex items-end p-5 bg-red' onClick={Next}>Next</span>
                </div>
            </div>
        </div>
    );
}

export default Main; 