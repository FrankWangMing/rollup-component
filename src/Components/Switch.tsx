import React from "react";
import QueueAnim from "rc-queue-anim";
const Switch = () => {
  return (
    <QueueAnim delay={300} className="queue-simple">
      <div key="a">Queue Demo</div>
      <div key="b">Queue Demo</div>
      <div key="c">Queue Demo</div>
      <div key="d">Queue Dddemo</div>
    </QueueAnim>
  );
};
export default Switch;
