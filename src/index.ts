const bg = `rgb(234 223 223)`;

// 监控详情的点击
document.addEventListener("click", (e) => {
  if (!(e.target instanceof Element && e.target.textContent === "详情")) {
    return;
  }
  // 查找上级元素找到类似于下面的元素
  // app-web-page-buyer-components-role-list-index-m__roleItem--2YcKB
  // app-web-page-buyer-components-role-list-index-m__roleItemColumn--1Edir app-web-page-buyer-components-role-list-index-m__roleItemMore--dORmR app-web-page-buyer-components-role-list-index-m__directionRow--xP2He

  // app-web-page-follow-components-styles-components-m__flexWrap--1vtQV app-web-page-follow-components-styles-components-m__followItemWrap--3niqc
  // app-web-page-follow-components-styles-components-m__flexWrap--1vtQV
  // app-web-page-follow-components-styles-components-m__underlineHighlightText--VybWq app-web-page-follow-components-styles-components-m__cursorPointer--3rNUg app-web-page-follow-components-styles-components-m__mr20--2fq8z
  const parentElement = (e.target.closest('[class*="__roleItem--"]') ||
    e.target.closest(
      '[class*="-components-m__followItemWrap--"]'
    )) as HTMLDivElement | null;
  if (!parentElement) {
    return;
  }
  parentElement.style.background = bg;
});
