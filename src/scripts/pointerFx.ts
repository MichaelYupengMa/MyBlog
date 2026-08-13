// Publishes pointer state used by decorative effects:
//   --cursor-x / --cursor-y   absolute position, drives the ambient glow
//   --pointer-nx / --pointer-ny  -1..1 offset from centre, drives parallax
//
// Only activates on fine-pointer devices that don't request reduced motion, so
// touch devices and motion-sensitive users get the static layout. Values are
// written to <html> (which persists across view transitions) and the ready
// class is re-applied to <body> on each page load.
const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (fine && !reduced) {
  const root = document.documentElement;
  let pending = false;
  let x = window.innerWidth / 2;
  let y = 0;

  const paint = () => {
    pending = false;
    root.style.setProperty("--cursor-x", `${x}px`);
    root.style.setProperty("--cursor-y", `${y}px`);
    root.style.setProperty(
      "--pointer-nx",
      ((x / window.innerWidth) * 2 - 1).toFixed(3)
    );
    root.style.setProperty(
      "--pointer-ny",
      ((y / window.innerHeight) * 2 - 1).toFixed(3)
    );
    document.body?.classList.add("cursor-glow-ready");
  };

  window.addEventListener(
    "pointermove",
    event => {
      x = event.clientX;
      y = event.clientY;
      if (!pending) {
        pending = true;
        requestAnimationFrame(paint);
      }
    },
    { passive: true }
  );

  // Re-apply the ready class after client-side navigations swap <body>.
  document.addEventListener("astro:page-load", () => {
    if (root.style.getPropertyValue("--cursor-x")) {
      document.body.classList.add("cursor-glow-ready");
    }
  });
}
