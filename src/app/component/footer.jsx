"use client"; // This is a client component 👈🏽

import style from "../../styles/com/header.module.css";
import * as Aiicons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as Faicons from "react-icons/fa";
import * as Biicoins from "react-icons/bi";
import React, { useState } from "react";
function Footer() {
  const [current, setCurrent] = useState(false);
  const footerOption = [
    { logo: <Aiicons.AiFillInfoCircle />, ref: "#", type: "Info" },
    {
      logo: <Aiicons.AiOutlineTwitter />,
      ref: "https://twitter.com/oxdxyz",
      type: "Twitter",
    },
    { logo: <BsIcons.BsDiscord />, ref: "#", type: "Discord" },
    {
      logo: <Faicons.FaTelegramPlane />,
      ref: "https://t.me/oxdxyz",
      type: "Telegram",
    },
    { logo: <Aiicons.AiFillFolder />, ref: "#", type: "Docs" },
    { logo: <Biicoins.BiHelpCircle />, ref: "#", type: "Help" },
  ];
  const Option = ["Info", "Twitter", "Discord", "Telegram", "Docs", "Help"];
  return (
    <div className={style.footer}>
      <div className={style.footer_controller}>
        <div className={style.footer_info_text}>
          <span>
            Trade Crypto Option on the world's first high-performance
            decentralized options marketplace.
          </span>
        </div>
        <div className={style.footerSocial}>
          <ul>
            {footerOption.map((el, key) => {
              return (
                <li
                  onMouseEnter={() => {
                    setCurrent(Option[key]);
                  }}
                  onMouseLeave={() => {
                    setCurrent(false);
                  }}
                  title="twitter"
                  key={key}
                >
                  <h6
                    style={{ display: current == el.type ? "block" : "none" }}
                    className={style.hover_effect}
                  >
                    {current === false ? "" : current}
                  </h6>
                  <a href={el.ref} target="_blank">
                    <span>{el.logo}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
