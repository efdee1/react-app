import { useState } from "react";
const Home = ()=> {
    
    const[name, setName ]=useState('mario')
    const[age, setAge] = useState('26')
    const handleClickAgain = ()=>{
        setName('Luigi');
        setAge('15');
        console.log(age);
        console.log(name);
    }
    // const handleClick = () =>{
        
    // }
    return (
        <div className = 'home'>
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <h1>{age}</h1>
            <button onClick={ handleClickAgain }>Click me again</button>
            {/* <button onClick={handleClick}>change age</button> */}
        </div>
    );
}

export default Home;