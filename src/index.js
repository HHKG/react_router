import React from "react";
import ReactDOM from "react-dom";
import { EnhanceMouse, EnhanceCat } from "./coding_share_hoc/ii_index";
import MouseTracker from "./share_coding_render_props/render_props";
import RepeatMountIndex from "./react_practice/index";
import RouterCenter from "./router/index";
ReactDOM.render(
  <React.StrictMode>
    {/* <App render={() => <div>黄华康</div>} /> */}
    开发中
    <EnhanceMouse />
    <EnhanceCat />
    <hr></hr>
    <MouseTracker />
    <RepeatMountIndex />
    <RouterCenter />
  </React.StrictMode>,
  document.getElementById("root")
);
