import React from "react";
import "./UniqueFeatures.css";

import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";
import SystemUpdateTwoToneIcon from "@material-ui/icons/SystemUpdateTwoTone";

export const UniqueFeatures = () => {
  return (
    <div className="all-in">
      <div className="main-feature-box">
        <div className="unique-featureContainer">
          <div className="commonfeaturebox">
            <OndemandVideoIcon className="icons" />
            <div className="unique-featureBox">
              Customizable Streaming Platform
            </div>
          </div>
          <div className="commonfeaturebox">
            <DynamicFeedIcon className="icons" />
            <div className="unique-featureBox"> Pro User Feedback</div>
          </div>
          <div className="commonfeaturebox">
            <AccessibilityNewIcon className="icons" />
            <div className="unique-featureBox">
              Free access to multiple content
            </div>
          </div>
          <div className="commonfeaturebox">
            <SystemUpdateTwoToneIcon className="icons" />
            <div className="unique-featureBox">Accurate Leveling System</div>
          </div>
        </div>
      </div>
    </div>
  );
};
