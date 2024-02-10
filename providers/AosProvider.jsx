"use client";
import React, { useEffect } from "react";
import Aos from "aos";

function AosProvider({ children }) {
  useEffect(() => {
    Aos.init();
  }, []);

  return <div></div>;
}

export default AosProvider;
