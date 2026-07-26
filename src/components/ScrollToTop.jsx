import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Every route in this app is a distinct page, so we scroll to top
// on each navigation instead of relying on in-page anchor scrolling.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
