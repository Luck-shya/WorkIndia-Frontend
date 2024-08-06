import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Search.css";

const Search = ({ className = "" }) => {
  const navigate = useNavigate();

  const onInputSearchContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={`search1 ${className}`}>
      <div className="inputsearch5">
        <img className="bg-icon5" alt="" src="/bg.svg" />
        <div className="item-name1">Item Name</div>
        <img className="iconsend5" alt="" src="/iconsend.svg" />
      </div>
      <div className="inputsearch5">
        <img className="bg-icon5" alt="" src="/bg.svg" />
        <div className="item-price1">Item Price</div>
        <img className="iconsend5" alt="" src="/iconsend.svg" />
      </div>
      <div className="shipping">
        <div className="inputsearch7" onClick={onInputSearchContainerClick}>
          <img className="bg-icon7" alt="" src="/bg.svg" />
          <div className="shipping-method1">Shipping Method</div>
          <img className="iconsend7" alt="" src="/iconsend.svg" />
          <div className="dropdown-icon">
            <img
              className="teenyiconsdown-solid1"
              alt=""
              src="/teenyiconsdownsolid.svg"
            />
          </div>
        </div>
        <div className="shipping-options">
          <div className="inputsearch8">
            <img className="bg-icon8" alt="" src="/bg.svg" />
            <div className="submit1">Submit</div>
            <img className="iconsend5" alt="" src="/iconsend.svg" />
            <div className="same-day-shipping2">Same Day Shipping</div>
          </div>
          <div className="shipping-options-child" />
          <div className="same-day-shipping3">Same Day Shipping</div>
          <input className="none" placeholder="None" type="text" />
        </div>
      </div>
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

export default Search;
