import React from "react"
import styles from "./Pagination.module.css";

const Paginate = ({next, prev, variable}) => {

  const customStyle = variable ? 
    {
      borderColor: "#260900",
      color: "#260900"
    }
    :
    {
      borderColor: "#DBAC00",
      color: "#DBAC00"
    };


  return (
    <div className={styles.Paginate} style={customStyle}>
      <button className={`${styles.Button}`} onClick={prev}>⬅</button>
      <button className={`${styles.Button}`} onClick={next}>➡</button>
    </div>
  );
};

export default Paginate
