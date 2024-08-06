import { useCallback } from "react";
import Header from "../components/Header";
import FrameComponent from "../components/FrameComponent";
import { useNavigate } from "react-router-dom";
import "./GooglePixel2XLAddItem.css";

const GooglePixel2XLAddItem = () => {
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/google-pixel-2-xl-1");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/google-pixel-2-xl-2");
  }, [navigate]);

  return (
    <div className="google-pixel-2-xl-add-item">
      <Header bG="/bg.svg" />
      <section className="google-pixel-2-xl-add-item-inner">
        <FrameComponent />
      </section>
      <section className="iosbottom-bar5-tabs">
        <div className="top-divider" />
        <footer className="iphone-ui">
          <div className="background" />
          <div className="home-indicator">
            <div className="home-indicator1" />
          </div>
          <div className="tab-icons">
            <div className="tab-icons-child" onClick={onRectangleClick} />
            <div className="tab-icons-child" onClick={onRectangleClick1} />
            <div className="tab-icons-inner" />
            <div className="rectangle-div" />
          </div>
          <div className="active-tab" />
        </footer>
      </section>
    </div>
  );
};

export default GooglePixel2XLAddItem;
