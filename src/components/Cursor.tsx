"use client";

import React, { use, useEffect, useRef } from "react";

export default function CustomCursor() {
  useEffect(() => {
    let cursorinner = document.querySelector(".cursor2");
    let a = document.querySelectorAll("a");

    document.addEventListener("mousemove", function (e) {
      let x = e.clientX;
      let y = e.clientY;
      cursorinner.style.left = x + "px";
      cursorinner.style.top = y + "px";
    });

    document.addEventListener("mousedown", function () {
      cursorinner.classList.add("cursorinnerhover");
    });

    document.addEventListener("mouseup", function () {
      cursorinner.classList.remove("cursorinnerhover");
    });

    a.forEach((item) => {
      item.addEventListener("mouseover", () => {
        cursorinner.classList.add("hover");
      });
      item.addEventListener("mouseleave", () => {
        cursorinner.classList.remove("hover");
      });
    });
  }, []);
  return (
    <>
      <div className="cursor2"></div>
    </>
  );
}
