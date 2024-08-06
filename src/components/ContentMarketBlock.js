import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ContentMarketBlock.css";

const ContentMarketBlock = ({
  className = "",
  propHeight,
  propPosition,
  propTop,
  propLeft,
  item1,
  propHeight1,
  propDisplay,
  prop,
  propWidth,
  propHeight2,
  propMinWidth,
}) => {
  const contentMarketBlockStyle = useMemo(() => {
    return {
      height: propHeight,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propHeight, propPosition, propTop, propLeft]);

  const item1Style = useMemo(() => {
    return {
      height: propHeight1,
      display: propDisplay,
    };
  }, [propHeight1, propDisplay]);

  const divStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight2,
      minWidth: propMinWidth,
    };
  }, [propWidth, propHeight2, propMinWidth]);

  return (
    <div
      className={`contentmarket-block ${className}`}
      style={contentMarketBlockStyle}
    >
      <div className="contentmarket-block-child" />
      <div className="item-1" style={item1Style}>
        {item1}
      </div>
      <div className="div" style={divStyle}>
        {prop}
      </div>
    </div>
  );
};

ContentMarketBlock.propTypes = {
  className: PropTypes.string,
  item1: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propHeight1: PropTypes.any,
  propDisplay: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight2: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default ContentMarketBlock;
