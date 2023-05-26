import React from "react";
import style from "../../styles/com/header.module.css";
function Hearder() {
  return (
    <div>
      <nav className={style.nav}>
        <div className={style.nav_handler}>
          <div>
            <div className={style.brand}>
              <span>
                <img src="/collection/Image/logo_oxdx.png" />
              </span>
            </div>
          </div>
          <div>
            <div className={style.NavItem}>
              <div>
                <button className={style.Market_btn}>Launch Market</button>
              </div>
              <div>
                <button className={style.exploer_btn}>Explorer</button>
              </div>
            </div>
          </div>{" "}
        </div>
      </nav>
    </div>
  );
}

export default Hearder;
