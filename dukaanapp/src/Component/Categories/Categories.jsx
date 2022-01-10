import React from "react";
import { useNavigate } from "react-router";
import image from './spices.png'
import styles from './style.module.css';
export default function Categories({ title, imagePath ,category_id}) {
  const navigate=useNavigate();
  console.log("imagepath", image);
  const path="./spices.png"
  const itemId=category_id;
  function onClickOnItem(){
    //navigate to different component
    console.log("item id id",itemId);
    navigate('/productList',{state:{
      category_id:itemId
    }});
  }
  return <div className={styles.cardcss} id={category_id} onClick={onClickOnItem}>
    <a href="google.com" >
    <img className={styles.imagecss} src={image}></img>
    </a>
     <div className={styles.CategoriesTitleContainer}>
      <h3>{title}</h3>
     </div>
  </div>;
} 