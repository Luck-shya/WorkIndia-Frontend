import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "", bG }) => {
  const navigate = useNavigate();

  const onFilterTextClick = useCallback(() => {
    navigate("/google-pixel-2-xl-2");
  }, [navigate]);

  return (
    <section className={`header ${className}`}>
      <div className="header-child" />
      <a className="explore">Add Item</a>
      <div className="filter-wrapper">
        <a className="filter" onClick={onFilterTextClick}>
          Add
        </a>
      </div>
      <img className="iconx" alt="" src="/iconx@2x.png" />
      <div className="inputsearch">
        <img className="bg-icon" alt="" src={bG} />
        <div className="search">Search</div>
        <img className="iconsend" alt="" src="/iconsend.svg" />
      </div>
    </section>
  );
};

Header.propTypes = {
  className: PropTypes.string,
  bG: PropTypes.string,
};

export default Header;
