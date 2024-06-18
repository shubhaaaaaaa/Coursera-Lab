function DisplayMessage(){

const currentDay = new Date().getDay();
const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
console.log(daysOfWeek[currentDay]);

const message = (currentDay === 0 || currentDay === 6) ? "Time to rest" : "Time to work";
const imageSrc = (currentDay === 0 || currentDay === 6)? require('./assets/resting.png') : require('./assets/working.png');
return(
     <div>
     <p style={{fontSize: "23px", textTransform: "uppercase", color: 'blue'}} className='font-bold flex items-center justify-center'>Conditional Rendering</p><br />
     <p className="flex flex-col justify-center items-center">
     <h1 className="flex justify-center items-center">Today is {daysOfWeek[currentDay]} !! </h1>
        <h3>{message}</h3>
        <img className='pt-4' src={imageSrc} alt={message} />
     </p>
     </div>
);
}

export default DisplayMessage;