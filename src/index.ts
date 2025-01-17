const bg = `rgb(234 223 223)`;

// 监控详情的点击
document.addEventListener("click", (e) => {
  if (!(e.target instanceof Element && e.target.textContent === "详情")) {
    return;
  }
  // 查找上级元素找到类似于下面的元素
  // app-web-page-buyer-components-role-list-index-m__roleItem--2YcKB
  // app-web-page-buyer-components-role-list-index-m__roleItemColumn--1Edir app-web-page-buyer-components-role-list-index-m__roleItemMore--dORmR app-web-page-buyer-components-role-list-index-m__directionRow--xP2He
  const parentElement = e.target.closest(
    '[class*="__roleItem--"]'
  ) as HTMLDivElement | null;
  if (!parentElement) {
    return;
  }
  parentElement.style.background = bg;
});
