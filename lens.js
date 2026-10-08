(() => {
  const root = document.documentElement;
  const hero = document.getElementById("hero");
  const opticalObject = document.getElementById("optical-object");
  const pointLight = document.getElementById("point-light");

  if (!hero || !opticalObject || !pointLight) return;

  root.classList.add("has-js");
  requestAnimationFrame(() => root.classList.add("is-ready"));

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (reducedMotion.matches) return;

  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const target = { x: 0, y: 0, turn: 0 };
  const current = { x: 0, y: 0, turn: 0 };
  let animationFrame = 0;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function draw() {
    animationFrame = 0;
    const ease = 0.085;

    current.x += (target.x - current.x) * ease;
    current.y += (target.y - current.y) * ease;
    current.turn += (target.turn - current.turn) * ease;

    opticalObject.style.setProperty("--tilt-x", `${(-current.y * 2.1).toFixed(3)}deg`);
    opticalObject.style.setProperty("--tilt-y", `${(current.x * 2.1).toFixed(3)}deg`);
    opticalObject.style.setProperty("--turn", `${(current.turn * 10).toFixed(3)}deg`);
    opticalObject.style.setProperty("--caustic-x", `${(-current.x * 18).toFixed(2)}px`);
    opticalObject.style.setProperty("--caustic-y", `${(current.y * 9).toFixed(2)}px`);

    pointLight.setAttribute("x", String(360 + current.x * 255));
    pointLight.setAttribute("y", String(220 + current.y * 210));

    const unsettled =
      Math.abs(target.x - current.x) > 0.001 ||
      Math.abs(target.y - current.y) > 0.001 ||
      Math.abs(target.turn - current.turn) > 0.001;

    if (unsettled) animationFrame = requestAnimationFrame(draw);
  }

  function scheduleDraw() {
    if (!animationFrame) animationFrame = requestAnimationFrame(draw);
  }

  if (finePointer) {
    hero.addEventListener("pointermove", (event) => {
      const bounds = hero.getBoundingClientRect();
      target.x = clamp(((event.clientX - bounds.left) / bounds.width) * 2 - 1, -1, 1);
      target.y = clamp(((event.clientY - bounds.top) / bounds.height) * 2 - 1, -1, 1);
      scheduleDraw();
    }, { passive: true });

    hero.addEventListener("pointerleave", () => {
      target.x = 0;
      target.y = 0;
      scheduleDraw();
    }, { passive: true });
  }

  function updateScrollTurn() {
    target.turn = clamp(window.scrollY / Math.max(hero.offsetHeight * 1.15, 1), 0, 1);
    scheduleDraw();
  }

  window.addEventListener("scroll", updateScrollTurn, { passive: true });
  updateScrollTurn();
})();
