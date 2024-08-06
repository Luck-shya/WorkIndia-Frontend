import { useCallback } from "react";
import Header from "../components/Header";
import Search from "../components/Search";
import { useNavigate } from "react-router-dom";
import "./GooglePixel2XLAddItem1.css";

const GooglePixel2XLAddItem1 = () => {
  const navigate = useNavigate();

  const onTabIconsClick = useCallback(() => {
    navigate("/google-pixel-2-xl-1");
  }, [navigate]);

  const onTabIconsClick1 = useCallback(() => {
    navigate("/google-pixel-2-xl-2");
  }, [navigate]);

  return (
    <div className="google-pixel-2-xl-add-item1">
      <Header bG="/bg.svg" />
      <section className="search-and-shipping">
        <Search />
      </section>
      <section className="iosbottom-bar5-tabs1">
        <div className="top-divider1" />
        <footer className="iphone-ui1">
          <div className="background1" />
          <div className="home-indicator2">
            <div className="home-indicator3" />
          </div>
          <div className="tabs">
            <div className="tab-icons1" onClick={onTabIconsClick} />
            <div className="tab-icons1" onClick={onTabIconsClick1} />
            <div className="tab-icons3" />
            <div className="tab-icons4" />
          </div>
          <div className="active-tab1" />
        </footer>
      </section>
    </div>
  );
};

export default GooglePixel2XLAddItem1;
