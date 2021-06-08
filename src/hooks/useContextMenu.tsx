import { useState, useCallback, useEffect } from "react";

const useContextMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [xPos, setXPos] = useState("");
  const [yPos, setYPos] = useState("");

  const handleContextMenu = useCallback(
    (e: any) => {
      e.preventDefault();

      if (!isMenuOpen) setIsMenuOpen(true);

      setXPos(`${e.pageX}px`);
      setYPos(`${e.pageY}px`);
    },
    [isMenuOpen]
  );

  const handleClick = useCallback(
    (e: any) => {
      e.preventDefault();

      if (isMenuOpen) setIsMenuOpen(false);
    },
    [isMenuOpen]
  );

  useEffect(() => {
    document.addEventListener("click", handleClick);
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [isMenuOpen, handleContextMenu, handleClick]);

  return { xPos, yPos, isMenuOpen, handleClick };
};

export default useContextMenu;
