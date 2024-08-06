import PropTypes from "prop-types";
import "./ContentContentBlockSmall.css";

const ContentContentBlockSmall = ({ className = "", item, prop }) => {
  return (
    <div className={`contentcontent-blocksmall2 ${className}`}>
      <div className="content-block2" />
      <div className="item-container">
        <div className="item2">{item}</div>
        <div className="mrp-1000-same-day-shipping-container">
          <div className="mrp-1000-same-container4">
            <span className="mrp-1000-same-container5">
              <span>{`MRP: `}</span>
              <span className="span2">{prop}</span>
            </span>
          </div>
          <div className="divider-line2" />
        </div>
      </div>
    </div>
  );
};

ContentContentBlockSmall.propTypes = {
  className: PropTypes.string,
  item: PropTypes.string,
  prop: PropTypes.string,
};

export default ContentContentBlockSmall;
