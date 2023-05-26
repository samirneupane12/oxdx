import React from "react";
import style from "../../styles/landingpage.module.css";
const Landingpage = () => {
  return (
    <div>
      <div className={style.bgVideo_loop}>
        <img src="collection/video/bg_loop_v2.gif" alt="" />
      </div>{" "}
      <div className={style.Landingpage_text}>
        <h2>On-Chain Options Marketplace Has Arrived</h2>
      </div>
    </div>
  );
};

export default Landingpage;
