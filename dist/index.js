// ==UserScript==
// @name         剑网三万宝楼点击高亮
// @namespace    https://github.com/bosens-China/wanbaolou-click-highlight
// @version      1.0.0
// @description  剑网三万宝楼点击高亮，用于避免重复点击。
// @author       yliu
// @match        https://jx3.seasunwbl.com/buyer?t=role
// @match        https://jx3.seasunwbl.com/buyer?t=role
// @grant        none
// @license      MIT
// ==/UserScript==
(function () {
  'use strict';

  const bg = `rgb(234 223 223)`;
  document.addEventListener("click", (e) => {
    if (!(e.target instanceof Element && e.target.textContent === "\u8BE6\u60C5")) {
      return;
    }
    const parentElement = e.target.closest(
      '[class*="__roleItem--"]'
    );
    if (!parentElement) {
      return;
    }
    parentElement.style.background = bg;
  });

})();
