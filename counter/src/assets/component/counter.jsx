import React, { useState } from "react";
import style from "./index.module.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={style.container}>
      <p className={style.para}>
        <h2>
          <mark className={style.mark}>{count}</mark>
        </h2>
      </p>
      <section className={style.sectionBtn}>
        <button
          className={style.btn}
          onClick={() => {
            count > 0
              ? setCount(count - 1)
              : prompt("Ops you reached to the end bro");
          }}
        >
          decrease
        </button>
        <button
          className={style.btn}
          onClick={() => {
            setCount(count + 1);
          }}
        >
          increase
        </button>
      </section>
    </div>
  );
};

export default Counter;
