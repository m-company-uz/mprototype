import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Faqat hash bo'lmasa tepaga chiqadi
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "auto" }); // smooth o'rniga auto
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;