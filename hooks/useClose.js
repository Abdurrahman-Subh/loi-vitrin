import { useEffect } from "react";

function useClose(ref, handler) {
  useEffect(() => {
    const click = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    const keyDown = (event) => {
      if (event.keyCode === 27) {
        handler(event);
      }
      return;
    };
    document.addEventListener("mousedown", click);
    document.addEventListener("keydown", keyDown);
    document.addEventListener("touchstart", click);
    return () => {
      document.removeEventListener("mousedown", click);
      document.removeEventListener("keydown", keyDown);
      document.removeEventListener("touchstart", click);
    };
  }, [ref, handler]);
}

export default useClose;
