"use client";

import React, { useEffect } from "react";

export default function CustomCursor() {
  useEffect(() => {
    let cursorinner = document.querySelector(".cursor2") as HTMLElement;
    let a = document.querySelectorAll("a");

    document.addEventListener("mousemove", function (e) {
      let x = e.clientX;
      let y = e.clientY;
      cursorinner.style.left = x + "px";
      cursorinner.style.top = y + "px";
    });

    document.addEventListener("mousedown", function () {
      if (cursorinner) {
        cursorinner.classList.add("cursorinnerhover");
      }
    });

    document.addEventListener("mouseup", function () {
      if (cursorinner) {
        cursorinner.classList.remove("cursorinnerhover");
      }
    });
  }, []);

  useEffect(() => {
    const a = document.querySelectorAll("a");
    a.forEach((item) => {
      item.addEventListener("mouseover", () => {
        let cursorinner = document.querySelector(".cursor2") as HTMLElement;
        if (cursorinner) {
          cursorinner.classList.add("hover");
        }
      });
      item.addEventListener("mouseleave", () => {
        let cursorinner = document.querySelector(".cursor2") as HTMLElement;
        if (cursorinner) {
          cursorinner.classList.remove("hover");
        }
      });
    });
  }, []);
  return (
    <>
      <div className="cursor2"></div>
    </>
  );
}
