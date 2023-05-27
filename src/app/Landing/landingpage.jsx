import React from "react";
import style from "../../styles/landingpage.module.css";
const Landingpage = () => {
  return (
    <div>
      <div className={style.bgVideo_loop}>
        <img src="collection/Video/bg_loop_v2.gif" alt="" />
      </div>{" "}
      <div className={style.Landingpage_text}>
        <h2>Multichain Options Marketplace for BRC & DRC</h2>
      </div>
    </div>
  );
};

export default Landingpage;
