import React from "react";
import classes from "./SubHeader1.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";
import RightIcon from "./RightIcon";

function SubHeader1() {
  var today = new Date(),
    time = today.getHours() + ":" + today.getMinutes();

    const state = {

        currentTime : time
    }

  return (
    <div className={classes.subHeader1}>
      <div className={classes.leftIcon}>
        <h6>{state.currentTime}</h6>
        <FontAwesomeIcon icon={faWhatsapp} />
        <FontAwesomeIcon icon={faInstagram} />
      </div>

      <div>
        <RightIcon />
      </div>
    </div>
  );
}

export default SubHeader1;
