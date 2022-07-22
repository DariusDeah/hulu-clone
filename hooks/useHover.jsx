import { useEffect, useState } from "react";

const useHover = (effect, cleanUp) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  useEffect(() => {
    if (hover) {
      effect();
    }
    return () => {
      cleanUp;
    };
  }, [hover]);

  return { handleMouseEnter, handleMouseLeave, hover };
};
export default useHover;
