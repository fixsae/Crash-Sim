// Screenshots: put files named 1.jpg, 2.jpg ... (or .png / .webp) into /screenshots.
// The page finds them automatically. Up to 12 are shown.
const MAX_SHOTS = 12;
const EXTS = ["jpg", "png", "webp", "jpeg"];

function tryLoad(n) {
  return new Promise((resolve) => {
    let i = 0;
    const next = () => {
      if (i >= EXTS.length) return resolve(null);
      const src = `screenshots/${n}.${EXTS[i++]}`;
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = next;
      img.src = src;
    };
    next();
  });
}

(async () => {
  const gallery = document.getElementById("gallery");
  const found = (await Promise.all(Array.from({ length: MAX_SHOTS }, (_, i) => tryLoad(i + 1)))).filter(Boolean);
  if (!found.length) {
    document.getElementById("galleryEmpty").hidden = false;
    return;
  }
  const hero = document.getElementById("heroShot");
  hero.innerHTML = `<img src="${found[0]}" alt="Crash Sim, скриншот игры">`;
  found.forEach((src, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.setAttribute("aria-label", `Открыть скриншот ${i + 1}`);
    b.innerHTML = `<img src="${src}" alt="Скриншот ${i + 1}" loading="lazy">`;
    b.addEventListener("click", () => openLightbox(src));
    gallery.appendChild(b);
  });
})();

const lb = document.getElementById("lightbox");
function openLightbox(src) {
  lb.querySelector("img").src = src;
  lb.classList.add("open");
}
lb.addEventListener("click", () => lb.classList.remove("open"));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") lb.classList.remove("open"); });
document.getElementById("year").textContent = new Date().getFullYear();
