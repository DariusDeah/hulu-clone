import { useEffect, useState } from "react";

const useDelyedHover = (effect, delay) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    console.log(hover);
    let timeOut;
    if (hover) {
      timeOut = setTimeout(effect, delay);
    }
    return () => {
      clearTimeout(timeOut);
    };
  }, [hover]);

  return { handleMouseEnter, handleMouseLeave, hover };
};
export default useDelyedHover;
