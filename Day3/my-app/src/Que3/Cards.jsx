import React from "react";
import styles from "./Cards.module.css";

const Cards = (props) => {
  return (
    <>
        <div className={styles.Box} style = {{backgroundColor: props.mode==="yellow"?"rgb(255,165,0)":"rgb(245,245,245)"}}>
            <div className={styles.firstDiv}>
                <p className={styles.date}>{props.Date}</p>
                <img src = {props.image} alt="logo" />
            </div>
           
            <div className={styles.Case}>Case Study</div>

            <h1 className={styles.heading}>{props.gift}</h1>
            <h1 className={styles.heading} style={{marginTop:"330px"}} >Pay</h1>
            <div className={styles.lastDiv}>
                <h3>{props.medium}</h3>
              <h1 className={styles.symbol}>→	</h1>

            </div>
            
        </div>
       

        </>
  );
};

export default Cards;
