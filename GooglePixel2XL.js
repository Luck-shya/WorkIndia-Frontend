import React, { useCallback, useEffect, useState } from "react";
import Header1 from "../components/Header1";
import ContentContentBlockSmall from "../components/ContentContentBlockSmall";
import { useNavigate } from "react-router-dom";
import "./GooglePixel2XL.css";

const GooglePixel2XL = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/google-pixel-2-xl-2");
  }, [navigate]);

  const onRectangleClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/200998b7-f48d-4456-a639-0b5d2d275c12"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="google-pixel-2-xl-1">
      <Header1 bG="/bg.svg" />
      <main className="content-blocks-parent">
        <section className="content-blocks">
          <div className="contentcontent-blocksmall-parent">
            {items.map((item) => (
              <div className="contentcontent-blocksmall" key={item.id}>
                <div className="content-block" />
                <div className="item-parent">
                  <img
                    src="https://placehold.co/50x50.png"
                    alt={item.item}
                    className="item-icon"
                  />
                  <div className="item">{item.item}</div>
                  <div className="mrp-1000-same-day-shipping-parent">
                    <div className="mrp-1000-same-container">
                      <span className="mrp-1000-same-container1">
                        <span className="mrp-1000">
                          <span className="mrp">{`MRP: `}</span>
                          <span className="span">{`₹${item.price}.0             `}</span>
                        </span>
                        <span className="same-day-shipping">
                          {item.shipping_method || "Not specified"}
                        </span>
                      </span>
                    </div>
                    <div className="divider-line" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="iosbottom-bar5-tabs2">
          <div className="top-divider2" />
          <footer className="iphone-ui2">
            <div className="background2" />
            <div className="home-indicator4">
              <div className="home-indicator5" />
            </div>
            <div className="rectangle-parent">
              <div className="frame-child" />
              <div className="frame-item" onClick={onRectangleClick} />
              <div className="frame-item" onClick={onRectangleClick1} />
              <div className="frame-child1" />
            </div>
            <div className="bottom-divider" />
          </footer>
        </section>
      </main>
    </div>
  );
};

export default GooglePixel2XL;
