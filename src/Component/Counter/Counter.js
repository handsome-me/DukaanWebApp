import React, { useState } from 'react';
import styles from './styles.module.css';
const INCREAMENT_COUNT="INCREAMENT_COUNT";
const DECREAMENT_COUNT="DECREAMENT_COUNT";

const Counter = props => {
     const [counter,setCounter]=useState(0);

     const btn_click=function(event){
         
      const  id=event.target.id;
      event.stopPropagation();
      console.log("event target click",id);
         

          if(id===INCREAMENT_COUNT){
  
            setCounter((preCounter)=>{
                return preCounter+1;
            })
            return;
          } 
          if(id===DECREAMENT_COUNT){
            if(counter===0)return;
            setCounter((preCounter)=>{
                return preCounter-1;
            })
              return;
          }

     }

    return (
        <div style={{display:"flex",border:'1px solid #52b0cf',borderRadius:"2px"}}>
         <div   onClick={btn_click}  id={DECREAMENT_COUNT} className={styles.buttonContainer}>
            <button  id={DECREAMENT_COUNT}   ><span  id={DECREAMENT_COUNT} className={styles.buttonSpan}>-</span></button>
             </div> 
             <div  className={styles.counterNumber}><span  style={{fontSize:"large"}}>{counter}</span></div> 
             <div    onClick={btn_click}  id={INCREAMENT_COUNT} className={styles.buttonContainer}>
            <button style={{position:'relative',zIndex:10}}    id={INCREAMENT_COUNT}  value="+"   ><span  id={INCREAMENT_COUNT} style={{position:"relative",zIndex:0}} className={styles.buttonSpan}>+</span></button>
             </div>   
        </div>
    );
};

Counter.propTypes = {
    
};

export default Counter;