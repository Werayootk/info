import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../data/portfolio";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="theme-text" style={{ color: props.theme.secondaryText }}>
          Toggle Theme
        </p>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          ⓒ Werayoot Kunphai
        </p>
        {/* <ToggleSwitch theme={props.theme} onToggle={props.onToggle}/> */}
      </Fade>
    </div>
  );
}
