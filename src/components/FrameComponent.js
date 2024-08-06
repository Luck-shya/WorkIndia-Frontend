import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();

  const onInputSearchContainerClick = useCallback(() => {
    navigate("/google-pixel-2-xl-add-item");
  }, [navigate]);

  const onInputSearchContainerClick1 = useCallback(() => {
    navigate("/google-pixel-2-xl-2");
  }, [navigate]);

  return (
    <div className={`inputsearch-parent ${className}`}>
      <div className="inputsearch1">
        <img className="bg-icon1" alt="" src="/bg.svg" />
        <div className="item-name">Item Name</div>
        <img className="iconsend1" alt="" src="/iconsend.svg" />
      </div>
      <div className="inputsearch2">
        <img className="bg-icon1" alt="" src="/bg.svg" />
        <div className="item-price">Item Price</div>
        <img className="iconsend1" alt="" src="/iconsend.svg" />
      </div>
      <div className="inputsearch3" onClick={onInputSearchContainerClick}>
        <img className="bg-icon3" alt="" src="/bg.svg" />
        <div className="shipping-method">Shipping Method</div>
        <img className="iconsend3" alt="" src="/iconsend.svg" />
        <div className="teenyiconsdown-solid-wrapper">
          <img
            className="teenyiconsdown-solid"
            alt=""
            src="/teenyiconsdownsolid.svg"
          />
        </div>
      </div>
      <div className="inputsearch4" onClick={onInputSearchContainerClick1}>
        <img className="bg-icon1" alt="" src="/bg.svg" />
        <div className="submit">Submit</div>
        <img className="iconsend1" alt="" src="/iconsend.svg" />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
