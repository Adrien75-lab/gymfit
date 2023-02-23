import { Box, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import BodyPart from "./exercises/BodyPart";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import LeftArrowIcon from "../../icons/left-arrow.png";
import RightArrowIcon from "../../icons/right-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  const [isMounted, setIsMounted] = useState(false);
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }, []);
  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  const [isMounted, setIsMounted] = useState(false);
  const [opacity, setOpacity] = useState(0);
   useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }, []);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }, []);
  return (
    <div
      style={{ opacity: opacity, transition: "opacity 1s ease-in-out" }}
      className={`search-exercises ${isMounted ? "fade-in" : ""}`}
    >
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          </Box>
        ))}
      </ScrollMenu>
    </div>
  );
};

export default HorizontalScrollbar;
