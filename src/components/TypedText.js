import React, { useRef, useEffect } from "react";
import { Typed } from "react-typed";

const TypedText = () => {
  const typedTextRef = useRef(null);

  useEffect(() => {
    if (typedTextRef.current) {
      const typed = new Typed(typedTextRef.current, {
        strings: ["Hello, my name is Sugal :)", "Welcome to my portfolio! "],
        typeSpeed: 50,
        backSpeed: 45,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return <span ref={typedTextRef}></span>;
};

export default TypedText;
