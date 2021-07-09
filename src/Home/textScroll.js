import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Pause } from "@material-ui/icons";

const TextScroller = ({ text1, text2, path1, path2 }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 10000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });

  return (
    <div key={key}>
      <animated.div style={scrolling}>
          <Link to={path1}>{text1}</Link>
          <Link to={path2}>{text2}</Link>
      </animated.div>
    </div>
  );
};

export default TextScroller;