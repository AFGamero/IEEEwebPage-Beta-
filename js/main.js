/* =========================================================
   IEEE Unimagdalena — Landing
   Contenido editable en los arrays de abajo.
   Para usar una imagen real, agrega la propiedad `img: "assets/img/archivo.jpg"`.
   ========================================================= */

const WHATSAPP = "https://wa.me/573236656639";

const NEWS = [
  {
    date: "2026-02-15", type: "Taller", featured: true,
    title: "Workshop: Introducción a Machine Learning con Python",
    text: "Sesión práctica de Machine Learning con Python y scikit-learn. Aprende a entrenar tu primer modelo desde cero. Sábado 5:00 p.m., Salón 204.",
  },
  {
    date: "2025-11-20", type: "Evento",
    title: "IEEE Day 2025: Celebración de la Rama",
    text: "Celebramos el día IEEE con charlas, networking y actividades para todos los miembros de la rama.",
  },
  {
    date: "2025-10-10", type: "Evento",
    title: "Hackathon Caribeño de Robótica",
    text: "Competencia regional de 48 horas donde equipos multidisciplinarios diseñan robots autónomos.",
  },
  {
    date: "2025-09-25", type: "Evento",
    title: "Charla: Energía Renovable y el Futuro del Caribe",
    text: "Expertos internacionales discuten el papel de la ingeniería en la transición energética del Caribe.",
  },
  {
    date: "2025-08-15", type: "Evento",
    title: "WIE Summit: Mujeres en Ingeniería",
    text: "Un encuentro que destaca a ingenieras que lideran proyectos transformadores de ciencia y tecnología en el país.",
  },
  {
    date: "2025-08-01", type: "Anuncio",
    title: "Inscripciones abiertas: periodo 2025-2",
    text: "¡Ya puedes hacer parte de la rama! Escríbenos por WhatsApp y te guiamos en el proceso de inscripción.",
  },
];

const PILLARS = [
  {
    title: "Talleres técnicos",
    text: "Aprendizaje práctico orientado a la industria con herramientas actuales.",
    icon: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8M12 16v4M8 9l2 2-2 2M13 13h3"/></svg>',
  },
  {
    title: "Retos de ingeniería",
    text: "Competencias y hackathons que impulsan la innovación y el trabajo en equipo.",
    icon: '<svg viewBox="0 0 24 24"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3"/></svg>',
  },
  {
    title: "Foros de investigación",
    text: "Espacios de diálogo académico e investigación aplicada a problemas reales.",
    icon: '<svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3"/><path d="M7 15h10"/></svg>',
  },
  {
    title: "Programas de liderazgo",
    text: "Formamos a los futuros líderes tecnológicos de la región.",
    icon: '<svg viewBox="0 0 24 24"><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></svg>',
  },
];

const TEAM = [
  { name: "Raúl Bayter Lara", role: "Presidente", text: "Lidera la rama con una visión de innovación y crecimiento comunitario." },
  { name: "Jairo Córdoba Musso", role: "Vicepresidente", text: "Impulsa las iniciativas técnicas y la colaboración entre capítulos." },
  { name: "Dana Aguirre Castro", role: "Secretaria", text: "Gestiona las operaciones y las comunicaciones de la rama." },
  { name: "Iván Sedano Ariza", role: "Tesorero", text: "Administra los recursos para maximizar el impacto de cada proyecto." },
  { name: "Andrés Gamero", role: "Webmaster", text: "Crea experiencias digitales que conectan a los miembros." },
];

const SOCIETIES = [
  { acr: "RAS", name: "Robotics & Automation Society", color: "#00629B", text: "Robótica industrial, drones y sistemas autónomos." },
  { acr: "CS", name: "Computer Society", color: "#0B2545", text: "Inteligencia artificial, ciberseguridad y desarrollo de software." },
  { acr: "WIE", name: "Women in Engineering", color: "#7A4E8C", text: "Liderazgo, mentoría y equidad de género en STEM." },
  { acr: "PES", name: "Power & Energy Society", color: "#2F7D5B", text: "Energía sostenible, redes inteligentes y transición energética." },
  { acr: "OES", name: "Oceanic Engineering Society", color: "#1C7C9C", text: "Exploración marina, acústica submarina y sistemas costeros." },
  { acr: "GRSS", name: "Geoscience & Remote Sensing", color: "#A07A3C", text: "Monitoreo satelital y seguimiento ambiental.", soon: true },
  { acr: "AESS", name: "Aerospace & Electronic Systems", color: "#5B6778", text: "Reactivación del capítulo aeroespacial.", soon: true },
];

const SOCIAL_ICONS = {
  linkedin: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/></svg>',
  instagram: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" class="fill"/></svg>',
};

/* ---------- Utilidades ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const formatDate = (iso) =>
  new Date(iso + "T12:00:00").toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" });

const initials = (name) => name.split(" ").slice(0, 2).map((w) => w[0]).join("");

const media = (item, label, cls = "") =>
  `<div class="ph ${cls}" data-label="${label}">${item.img ? `<img src="${item.img}" alt="" loading="lazy">` : ""}</div>`;

/* ---------- Render ---------- */
function renderNews() {
  $("#newsGrid").innerHTML = NEWS.map((n, i) => `
    <article class="news reveal ${n.featured ? "news--featured" : ""}" data-type="${n.type}" data-index="${i}" data-delay="${(i % 3) * 100}">
      <div class="news__media">
        <span class="tag">${n.type}</span>
        ${media(n, "Imagen")}
      </div>
      <div class="news__body">
        <time class="news__date" datetime="${n.date}">${formatDate(n.date)}</time>
        <h3 class="news__title">${n.title}</h3>
        <p class="news__text">${n.text}</p>
        <button class="news__more" data-news="${i}">Leer más</button>
      </div>
    </article>`).join("");
}

function renderPillars() {
  $("#pillarsGrid").innerHTML = PILLARS.map((p, i) => `
    <article class="pillar reveal" data-delay="${i * 100}">
      <span class="pillar__num">0${i + 1}</span>
      <div class="pillar__icon">${p.icon}</div>
      <h3>${p.title}</h3>
      <p>${p.text}</p>
    </article>`).join("");
}

function renderTeam() {
  $("#teamGrid").innerHTML = TEAM.map((m, i) => `
    <article class="member reveal" data-delay="${i * 90}">
      <div class="member__avatar">${m.img ? `<img src="${m.img}" alt="${m.name}" loading="lazy">` : initials(m.name)}</div>
      <h3>${m.name}</h3>
      <span class="member__role">${m.role}</span>
      <p>${m.text}</p>
      <div class="member__socials">
        <a href="${m.linkedin || "#"}" class="social" aria-label="LinkedIn de ${m.name}">${SOCIAL_ICONS.linkedin}</a>
        <a href="${m.instagram || "#"}" class="social" aria-label="Instagram de ${m.name}">${SOCIAL_ICONS.instagram}</a>
      </div>
    </article>`).join("");
}

function renderSocieties() {
  $("#societiesGrid").innerHTML = SOCIETIES.map((s, i) => `
    <article class="society reveal ${s.soon ? "society--soon" : ""}" data-delay="${(i % 4) * 90}">
      ${s.soon ? '<span class="society__soon">Próximamente</span>' : ""}
      <div class="society__top">
        <div class="society__logo" style="--c:${s.color}">${s.img ? `<img src="${s.img}" alt="${s.acr}">` : s.acr}</div>
        <h3>${s.name}</h3>
      </div>
      <p>${s.text}</p>
      ${s.soon ? "" : `<a href="${s.link || WHATSAPP}" target="_blank" rel="noopener" class="society__link">Conocer más</a>`}
    </article>`).join("");
}

/* ---------- Header: estado al hacer scroll + link activo ---------- */
function initHeader() {
  const header = $("#header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const links = $$(".nav__link");
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === `#${e.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("main section[id]").forEach((s) => spy.observe(s));
}

/* ---------- Menú móvil ---------- */
function initMenu() {
  const burger = $("#burger");
  const nav = $("#nav");
  const toggle = (open) => {
    nav.classList.toggle("is-open", open);
    burger.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  };
  burger.addEventListener("click", () => toggle(!nav.classList.contains("is-open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) toggle(false); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") toggle(false); });
}

/* ---------- Animación de entrada al hacer scroll ---------- */
function initReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.style.transitionDelay = `${el.dataset.delay || 0}ms`;
      el.classList.add("is-visible");
      // Quitamos el delay luego para que los hover respondan de inmediato
      setTimeout(() => (el.style.transitionDelay = ""), 900 + Number(el.dataset.delay || 0));
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  $$(".reveal").forEach((el) => io.observe(el));
}

/* ---------- Contadores animados ---------- */
function initCounters() {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const run = (el) => {
    const target = Number(el.dataset.count);
    const prefix = el.dataset.prefix || "";
    if (reduce) { el.textContent = prefix + target; return; }
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + Math.round(target * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { run(e.target); io.unobserve(e.target); } });
  }, { threshold: 0.6 });
  $$("[data-count]").forEach((el) => io.observe(el));
}

/* ---------- Filtro de novedades ---------- */
function initFilters() {
  const chips = $$("#newsFilters .chip");
  chips.forEach((chip) => chip.addEventListener("click", () => {
    chips.forEach((c) => c.classList.toggle("is-active", c === chip));
    const f = chip.dataset.filter;
    $$("#newsGrid .news").forEach((card) => {
      const show = f === "all" || card.dataset.type === f;
      card.classList.toggle("is-hidden", !show);
      // Con filtro activo, la destacada ocupa una sola columna
      card.classList.toggle("news--featured", f === "all" && NEWS[card.dataset.index].featured === true);
    });
  }));
}

/* ---------- Modal de noticias ---------- */
function initModal() {
  const modal = $("#modal");
  let lastFocus = null;

  const open = (n) => {
    lastFocus = document.activeElement;
    $("#modalTag").textContent = n.type;
    $("#modalDate").textContent = formatDate(n.date);
    $("#modalDate").setAttribute("datetime", n.date);
    $("#modalTitle").textContent = n.title;
    $("#modalText").textContent = n.text;
    $("#modalImg").innerHTML = n.img ? `<img src="${n.img}" alt="">` : "";
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    $(".modal__close", modal).focus();
  };
  const close = () => {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    lastFocus?.focus();
  };

  $("#newsGrid").addEventListener("click", (e) => {
    const btn = e.target.closest("[data-news]");
    if (btn) open(NEWS[btn.dataset.news]);
  });
  modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("is-open")) close(); });
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderNews();
  renderPillars();
  renderTeam();
  renderSocieties();

  initHeader();
  initMenu();
  initReveal();
  initCounters();
  initFilters();
  initModal();

  $("#year").textContent = new Date().getFullYear();
});
