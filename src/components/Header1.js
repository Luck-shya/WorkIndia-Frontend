import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({ className = "", bG }) => {
  return (
    <div className={`header1 ${className}`}>
      <div className="header-background" />
      <div className="page-header">
        <a className="explore1">Explore</a>
        <div className="filter-container">
          <a className="filter1">Filter</a>
        </div>
        <img className="iconx1" alt="" src="/iconx@2x.png" />
      </div>
      <div className="inputsearch9">
        <img className="bg-icon9" loading="lazy" alt="" src={bG} />
        <a className="search2">Search</a>
        <img className="iconsend9" alt="" src="/iconsend.svg" />
      </div>
    </div>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
  bG: PropTypes.string,
};

export default Header1;
