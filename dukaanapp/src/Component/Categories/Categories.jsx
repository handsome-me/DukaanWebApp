import React from "react";
import image from './spices.png'
import styles from './style.module.css';
export default function Categories({ title, imagePath ,category_id}) {
  console.log("imagepath", image);
  const path="./spices.png"
  const itemId=category_id;
  function onClickOnItem(){
    //navigate to different component
    console.log("item id id",itemId);
  }
  return <div className={styles.cardcss} itemID={category_id} onClick={onClickOnItem}>
    <a href="google.com" >
    <img className={styles.imagecss} src={image}></img>
    </a>
     <div className={styles.CategoriesTitleContainer}>
      <h3>{title}</h3>
     </div>
  </div>;
} 