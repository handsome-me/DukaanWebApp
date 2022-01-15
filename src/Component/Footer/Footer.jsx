
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css'
import { useLocation ,useNavigate} from 'react-router-dom';
import { State } from '../../Context/GlobalState';

const Footer = ({order}) => {
     
     const state= useContext(State);
     console.log("orders are",state);
     const navigate=useNavigate();

     //nothing is memorized and code quality is not upto the mark , we need to make many changes in this project
     const cart=state.cart;
     let totalCount=0;
     for(let i=0;i<cart.length;i++){
       
         totalCount+=cart[i].productCount; 
      
        }
  
        function navigateHome(){
            navigate('/');
        }
     
    return (
        <div className={styles.footerContainer}>
        <footer className={styles.footer} style={{display: 'flex'}} >
        <div onClick={navigateHome} className={styles.item}>
        <div>
        <img src="https://img.icons8.com/material-outlined/24/000000/home--v2.png"/>
        <h3 className={styles.footerh3}>Home</h3>
        </div>
        </div> 
        <div className={styles.item}>
        <div>
        <img src="https://img.icons8.com/small/16/000000/variation.png"/>
        <h3 className={styles.footerh3}>Category</h3>
        </div> 
           
         </div> 

         <div className={styles.item}>
        <div style={{position:'relative'}} onClick={()=>{
            navigate('/mycart')
        }}>
        <img src="https://img.icons8.com/ios/50/000000/shopping-bag--v3.png"/>
        <h3 className={styles.footerh3}>Bag</h3>
        <small className={styles.footerSpan}>{totalCount}</small>
        </div>            
         </div> 
         <div className={styles.item}>
        <div>
        <img src="https://img.icons8.com/external-inipagistudio-mixed-inipagistudio/64/000000/external-order-digital-marketing-strategy-inipagistudio-mixed-inipagistudio.png"/>
        <h3 className={styles.footerh3}>Order</h3>
        </div> 
         </div> 
        </footer>
        </div>
    );
};

Footer.propTypes = {
    
};

export default Footer;