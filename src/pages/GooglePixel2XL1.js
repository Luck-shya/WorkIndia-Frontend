import React, { useCallback, useEffect, useState } from "react";
import Header1 from "../components/Header1";
import ContentMarketBlock from "../components/ContentMarketBlock";
import { useNavigate } from "react-router-dom";
import "./GooglePixel2XL1.css";

const GooglePixel2XL1 = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  const onRectangleClick = useCallback(() => {
    navigate("/google-pixel-2-xl-1");
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
    <div className="google-pixel-2-xl-2">
      <Header1 bG="/bg.svg" />
      <main className="frame-parent">
        <section className="frame-wrapper">
          <div className="frame-group">
            <div className="contentmarket-block-parent">
              {items.slice(0, 5).map((item) => (
                <ContentMarketBlock
                  key={item.id}
                  propHeight="10.375em"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  item1={item.item}
                  propHeight1="unset"
                  propDisplay="unset"
                  prop={`₹${item.price}.0`}
                  propWidth="unset"
                  propHeight2="unset"
                  propMinWidth="3.286em"
                />
              ))}
            </div>
            <div className="contentmarket-block-group">
              {items.slice(5, 9).map((item) => (
                <ContentMarketBlock
                  key={item.id}
                  propHeight="10.375em"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  item1={item.item}
                  propHeight1="unset"
                  propDisplay="unset"
                  prop={`₹${item.price}.0`}
                  propWidth="unset"
                  propHeight2="unset"
                  propMinWidth="3.429em"
                />
              ))}
              <div className="contentmarket-block-container">
                {items.slice(9, 11).map((item) => (
                  <ContentMarketBlock
                    key={item.id}
                    propHeight="100%"
                    propPosition="absolute"
                    propTop="0em"
                    propLeft="0em"
                    item1={item.item}
                    propHeight1="unset"
                    propDisplay="unset"
                    prop={`₹${item.price}.0`}
                    propWidth="unset"
                    propHeight2="unset"
                    propMinWidth="3.429em"
                  />
                ))}
              </div>
              {items.slice(11).map((item) => (
                <ContentMarketBlock
                  key={item.id}
                  propHeight="10.375em"
                  propPosition="unset"
                  propTop="unset"
                  propLeft="unset"
                  item1={item.item}
                  propHeight1="1.214em"
                  propDisplay="inline-block"
                  prop={`₹${item.price}.0`}
                  propWidth="3.429em"
                  propHeight2="1.214em"
                  propMinWidth="unset"
                />
              ))}
            </div>
          </div>
        </section>
        <section className="iosbottom-bar5-tabs3">
          <div className="top-divider3" />
          <footer className="iphone-ui3">
            <div className="background3" />
            <div className="home-indicator6">
              <div className="home-indicator7" />
            </div>
            <div className="rectangle-group">
              <div className="frame-child2" onClick={onRectangleClick} />
              <div className="frame-child3" />
              <div className="frame-child2" onClick={onRectangleClick1} />
              <div className="frame-child5" />
            </div>
            <div className="iphone-ui-child" />
          </footer>
        </section>
      </main>
    </div>
  );
};

export default GooglePixel2XL1;
