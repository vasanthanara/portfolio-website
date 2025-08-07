gsap.from("header h1", { y: -30, opacity: 0, duration: 1 });
gsap.from("header h3", { y: -20, opacity: 0, delay: 0.5, duration: 1 });

gsap.from(".linkedin-link", {
  scale: 0,
  opacity: 0,
  duration: 1.2,
  delay: 0.4,
  ease: "back.out(1.7)"
});

gsap.utils.toArray(".card").forEach((section, i) => {
  gsap.from(section, {
    opacity: 0,
    y: 30,
    delay: 1.5 + i * 0.3,
    duration: 1,
    ease: "power2.out"
  });
});