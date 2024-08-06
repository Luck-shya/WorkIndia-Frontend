import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import GooglePixel2XLAddItem from "./pages/GooglePixel2XLAddItem";
import GooglePixel2XLAddItem1 from "./pages/GooglePixel2XLAddItem1";
import GooglePixel2XL from "./pages/GooglePixel2XL";
import GooglePixel2XL1 from "./pages/GooglePixel2XL1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/google-pixel-2-xl-add-item":
        title = "";
        metaDescription = "";
        break;
      case "/google-pixel-2-xl-1":
        title = "";
        metaDescription = "";
        break;
      case "/google-pixel-2-xl-2":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<GooglePixel2XLAddItem />} />
      <Route
        path="/google-pixel-2-xl-add-item"
        element={<GooglePixel2XLAddItem1 />}
      />
      <Route path="/google-pixel-2-xl-1" element={<GooglePixel2XL />} />
      <Route path="/google-pixel-2-xl-2" element={<GooglePixel2XL1 />} />
    </Routes>
  );
}
export default App;
