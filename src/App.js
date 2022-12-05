import React from "react";
import {useState}from "react";




function App() {
  
  function randomNumberInRange(min, max) {
    //  get number between min and max
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
      const [num, setNum] = useState(0);
      const [score,setScore] =useState(0);
   
      const refreshPage = ()=>{
        window.location.reload();
     }
      const handleClick = () => {
        setNum(randomNumberInRange(0, 9));
        console.log(num);
       if(num<=5) {
        alert(` Вы проиграли ${num} `)
      setScore(score-num) 
      }
       else {
        alert(` Вы выиграли ${num}  `)
   setScore(score+num)
       }
       
        
      }; 

  return (
   
     
    
    <div className='App'>
       <h1 >Plan9 game</h1>
       <h2>{`Очки:  ${score}`}</h2>
       
 
      <div className='container'></div>
      
      <button  onClick={handleClick }   style={{width:"50px",height:"50px",background:"rgba(189,246,243,.8)",borderRadius:'5px',margin:"10px",borderColor:'agua',cursor:'pointer'}}>📦</button>
      
      <button onClick={handleClick } style={{width:"50px",height:"50px",background:"rgba(189,246,243,.8)",borderRadius:'5px',margin:"10px",top:'15',cursor:'pointer'}} >📦</button>
      <button onClick={handleClick }  style={{width:"50px",height:"50px",background:"rgba(189,246,243,.8)",borderRadius:'5px',margin:"10px",top:'15',cursor:'pointer'}}>📦</button><br></br>
      
      <button onClick={handleClick }  style={{width:"50px",height:"50px",background:"rgba(189,246,243,.8)",borderRadius:'5px',margin:"10px",top:'15',cursor:'pointer'}}>📦</button>
      <button onClick={handleClick }  style={{width:"50px",height:"50px",background:"rgba(189,246,243,.8)",borderRadius:'5px',margin:"10px",top:'15',cursor:'pointer'}}>📦</button>
      <button onClick={handleClick }  style={{width:"50px",height:"50px",background:"rgba(189,246,243,.8)",borderRadius:'5px',margin:"10px",top:'15',cursor:'pointer'}}>📦</button><br></br>
      <button onClick={handleClick }  style={{width:"50px",height:"50px",background:"rgba(189,246,243,.8)",borderRadius:'5px',margin:"10px",top:'15',cursor:'pointer'}}>📦</button>
      <button onClick={handleClick }  style={{width:"50px",height:"50px",background:"rgba(189,246,243,.8)",borderRadius:'5px',margin:"10px",top:'15',cursor:'pointer'}}>📦</button>
      
      <button onClick={handleClick}  style={{width:"50px",height:"50px",background:"rgba(189,246,243,.8)",borderRadius:'5px',margin:"10px",top:'15',cursor:'pointer'}}>📦</button><br></br>
      <button onClick={handleClick} style={{background:"rgba(189,246,243,.8)"}}>Сгенерировать рандомное число</button>
      <br></br>
      <button onClick={refreshPage} style={{background:"rgba(189,246,243,.8)"}}>Обновить страницу</button>
   
    </div>

  );
 
  
  


  }


export default App;