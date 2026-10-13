/* ============ أدوات ============ */
const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const get = (obj, path) => path.split(".").reduce((o, k) => o?.[k], obj);
const save = (k, v) => { try { localStorage.setItem(k, v); } catch (e) { } };

let lang = document.documentElement.lang === "ar" ? "ar" : "en";
const T = () => CONTENT[lang];

const ICONS = {
    email: '<svg viewBox="0 0 24 24"><path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.8"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z" fill="currentColor"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24"><path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.6-1.2A9 9 0 1 0 12 3z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M9 8.5c0 3.5 2.9 6.5 6.5 6.5l1-1.6-2-1-1 .9a5 5 0 0 1-2.4-2.4l.9-1-1-2z" fill="currentColor"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M4 9h3.5v11H4zM5.7 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM10 9h3.3v1.6c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.2 2.4 4.2 5.4V20h-3.5v-5.2c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V20H10z" fill="currentColor"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z" fill="currentColor"/></svg>',
    sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
    moon: '<svg viewBox="0 0 24 24"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
    cert: '<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="13" rx="2" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="17" r="3" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m10.5 19.5-.8 3 2.3-1 2.3 1-.8-3M7 8h10M7 11h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
    arrow: '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
};

function contactLinks() {
    const L = T().contactLabels;
    const list = [
        { key: "email", label: L.email, value: PROFILE.email, href: `mailto:${PROFILE.email}` },
        { key: "phone", label: L.phone, value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
        { key: "whatsapp", label: L.whatsapp, value: PROFILE.phone, href: `https://wa.me/${PROFILE.whatsapp}` },
        { key: "linkedin", label: L.linkedin, value: PROFILE.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""), href: PROFILE.linkedin },
    ];
    if (PROFILE.github) list.push({ key: "github", label: "GitHub", value: PROFILE.github.replace(/^https?:\/\//, ""), href: PROFILE.github });
    return list;
}

/* ============ عرض المحتوى ============ */
function render() {
    const t = T();
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = `${t.name} — ${t.role.replace(/\.$/, "")}`;

    // نصوص بسيطة
    document.querySelectorAll("[data-t]").forEach((el) => (el.textContent = get(t, el.dataset.t) ?? ""));
    $("#langBtn").textContent = t.btn.lang;
    $("#cvBtn").textContent = t.btn.cv;
    $("#cvBtn").href = CV_FILES[lang];

    // القائمة
    $("#menu").innerHTML = Object.entries(t.nav)
        .map(([id, label]) => `<a href="#${id}" data-id="${id}">${esc(label)}</a>`).join("");

    // روابط التواصل المختصرة
    $("#socials").innerHTML = contactLinks()
        .map((c) => `<a href="${esc(c.href)}" target="_blank" rel="noopener" aria-label="${esc(c.label)}">${ICONS[c.key]}</a>`).join("");

    // الإحصائيات
    const count = (n) => n.replace("{projects}", PROJECTS.length).replace("{certs}", CERTIFICATES.length);
    $("#certCount").textContent = CERTIFICATES.length;
    $("#stats").innerHTML = t.stats.map(([n, l]) => `<div class="stat"><b>${esc(count(n))}</b><span>${esc(l)}</span></div>`).join("");

    // نبذة
    $("#aboutBody").innerHTML = t.about.body.map((p) => `<p>${esc(p)}</p>`).join("");
    $("#facts").innerHTML = t.about.facts.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");

    // الخبرات
    $("#timeline").innerHTML = t.experience.map((e) => `
        <article class="card job">
            <div class="job-head">
                <div><h3>${esc(e.title)}</h3><p class="accent">${esc(e.org)}</p></div>
                <span class="mono pill">${esc(e.date)}</span>
            </div>
            <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        </article>`).join("");

    // المشاريع
    $("#projectList").innerHTML = PROJECTS.map((p, i) => {
        const d = p[lang];
        const tag = p.link ? "a" : "div";
        const attrs = p.link ? ` href="${esc(p.link)}" target="_blank" rel="noopener"` : "";
        return `<${tag} class="card project${p.link ? " clickable" : ""}"${attrs}>
            <div class="project-cover" data-logo="${i}"><span>${esc(p.name)}</span></div>
            <div class="project-body">
                <p class="mono tag-sm">${esc(d.label)}</p>
                <h3>${esc(p.name)}</h3>
                <p class="muted">${esc(d.desc)}</p>
                <div class="chips">${p.tags.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div>
                ${p.link ? `<span class="link">${esc(t.btn.open)} ${ICONS.arrow}</span>` : ""}
            </div>
        </${tag}>`;
    }).join("");
    loadProjectLogos();

    // المهارات
    $("#skillGrid").innerHTML = SKILLS.map((g) => `
        <div class="card skill">
            <p class="mono tag-sm">${esc(t.skillGroups[g.key])}</p>
            <div class="chips">${g.items.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div>
        </div>`).join("");

    // التعليم
    $("#edu").innerHTML = `<span class="edu-icon">🎓</span>
        <div><h3>${esc(t.education.title)}</h3><p class="accent">${esc(t.education.org)}</p></div>
        <span class="mono pill">${esc(t.education.date)}</span>`;

    // الشهادات
    $("#certGrid").innerHTML = CERTIFICATES.map((c, i) => {
        const d = c[lang];
        return `<article class="card cert" data-i="${i}">
            <div class="cert-cover">${ICONS.cert}</div>
            <div class="cert-body">
                <h3>${esc(d.name)}</h3>
                <p class="accent">${esc(d.issuer)}</p>
                ${d.date ? `<p class="mono muted small">${esc(d.date)}</p>` : ""}
                <button type="button" class="link cert-view" data-view="${i}">${esc(t.btn.view)} ${ICONS.arrow}</button>
            </div>
        </article>`;
    }).join("");
    loadCertImages();

    // التواصل
    $("#contactCards").innerHTML = contactLinks().map((c) => `
        <a class="card contact-card" href="${esc(c.href)}" target="_blank" rel="noopener">
            <span class="contact-icon">${ICONS[c.key]}</span>
            <span><small class="muted">${esc(c.label)}</small><b class="ltr">${esc(c.value)}</b></span>
        </a>`).join("");

    renderATS();
    updateThemeBtn();
    observeReveal();
}

/* ============ صور الشهادات ============ */
const certState = {}; // index -> "img" | "pdf" | null

function loadCertImages() {
    CERTIFICATES.forEach((c, i) => {
        const card = document.querySelector(`.cert[data-i="${i}"]`);
        if (!c.image) return;
        if (/\.pdf$/i.test(c.image)) {
            certState[i] = "pdf";
            card.classList.add("has-file");
            return;
        }
        const img = new Image();
        img.alt = c[lang].name;
        img.onload = () => {
            certState[i] = "img";
            const cover = card.querySelector(".cert-cover");
            cover.innerHTML = "";
            cover.appendChild(img);
            cover.dataset.view = i;
            card.classList.add("has-file");
        };
        img.src = c.image;
    });
}

const viewer = $("#viewer");
document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-view]");
    if (el) {
        const i = +el.dataset.view;
        const c = CERTIFICATES[i];
        if (certState[i] === "pdf") return window.open(c.image, "_blank");
        if (certState[i] !== "img") return;
        $("#viewerImg").src = c.image;
        $("#viewerCaption").textContent = `${c[lang].name} — ${c[lang].issuer}`;
        viewer.showModal();
    }
    if (e.target === viewer || e.target.closest(".viewer-close")) viewer.close();
});

/* ============ نسخة ATS (للطباعة / PDF) ============ */
function renderATS() {
    const t = T(), a = t.ats;
    const linkedin = PROFILE.linkedin.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
    $("#ats").innerHTML = `
        <h1>${esc(t.name)}</h1>
        <p class="ats-head">${esc(a.headline)}</p>
        <p class="ats-contact">${esc(t.location)} | <span class="ltr">${esc(PROFILE.phone)}</span> | ${esc(PROFILE.email)} | ${esc(linkedin)}</p>
        <h2>${esc(a.summaryTitle)}</h2>
        <p>${esc(a.summary)}</p>
        <h2>${esc(a.expTitle)}</h2>
        ${t.experience.map((e) => `
            <div class="ats-entry">
                <p class="ats-row"><b>${esc(e.title)}</b><span>${esc(e.date)}</span></p>
                <p><i>${esc(e.org)}</i></p>
                <ul>${e.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
            </div>`).join("")}
        <h2>${esc(a.eduTitle)}</h2>
        <p class="ats-row"><b>${esc(t.education.title)}</b><span>${esc(t.education.date)}</span></p>
        <p><i>${esc(t.education.org)}</i></p>
        <h2>${esc(a.skillsTitle)}</h2>
        <ul>${SKILLS.map((g) => `<li><b>${esc(t.skillGroups[g.key])}:</b> ${g.items.join(", ")}</li>`).join("")}</ul>
        <h2>${esc(a.certsTitle)}</h2>
        <ul>${CERTIFICATES.map((c) => `<li><b>${esc(c[lang].name)}</b> – ${esc(c[lang].issuer)}${c[lang].date ? ` (${esc(c[lang].date)})` : ""}</li>`).join("")}</ul>`;
}

/* ============ الثيم ============ */
const isDark = () => document.documentElement.dataset.theme !== "light";
function updateThemeBtn() { $("#themeBtn").innerHTML = isDark() ? ICONS.sun : ICONS.moon; }

$("#themeBtn").addEventListener("click", () => {
    const next = isDark() ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    save("theme", next);
    updateThemeBtn();
});

/* ============ اللغة ============ */
$("#langBtn").addEventListener("click", () => {
    lang = lang === "ar" ? "en" : "ar";
    save("lang", lang);
    render();
});

/* ============ شعارات المشاريع ============ */
function loadProjectLogos() {
    PROJECTS.forEach((p, i) => {
        if (!p.logo) return;
        const img = new Image();
        img.alt = p.name;
        img.onload = () => {
            const cover = document.querySelector(`[data-logo="${i}"]`);
            cover.innerHTML = "";
            cover.appendChild(img);
            cover.classList.add("has-logo");
        };
        img.src = p.logo;
    });
}

/* ============ قائمة الجوال ============ */
$("#burger").addEventListener("click", () => document.body.classList.toggle("menu-open"));
$("#menu").addEventListener("click", (e) => { if (e.target.closest("a")) document.body.classList.remove("menu-open"); });

/* ============ تمييز القسم الحالي ============ */
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
        if (!en.isIntersecting) return;
        document.querySelectorAll("#menu a").forEach((a) => a.classList.toggle("active", a.dataset.id === en.target.id));
    });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => sectionObserver.observe(s));

window.addEventListener("scroll", () => document.body.classList.toggle("scrolled", scrollY > 10), { passive: true });

/* ============ ظهور تدريجي ============ */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); revealObserver.unobserve(en.target); } });
}, { threshold: 0.12 });
function observeReveal() { document.querySelectorAll(".reveal:not(.in)").forEach((el) => revealObserver.observe(el)); }

/* ============ الساعة ============ */
function tick() {
    $("#clock").textContent = new Date().toLocaleTimeString(lang === "ar" ? "ar-SA" : "en-US",
        { timeZone: PROFILE.timezone, hour: "2-digit", minute: "2-digit", second: "2-digit" });
}
setInterval(tick, 1000);

/* ============ الصورة الشخصية ============ */
const photo = $("#photo");
photo.onload = () => document.querySelector(".ring").classList.add("has-photo");
photo.src = PROFILE.photo;

/* ============ خلفية النقاط ============ */
(function background() {
    const cv = $("#bg"), ctx = cv.getContext("2d");
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w, h, pts;
    function size() {
        w = cv.width = innerWidth; h = cv.height = innerHeight;
        pts = Array.from({ length: Math.min(70, Math.floor(w * h / 18000)) }, () => ({
            x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
        }));
    }
    function draw() {
        const color = getComputedStyle(document.documentElement).getPropertyValue("--accent-rgb").trim();
        ctx.clearRect(0, 0, w, h);
        for (const p of pts) {
            p.x += p.vx; p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
            ctx.fillStyle = `rgba(${color},.5)`;
            ctx.fillRect(p.x, p.y, 1.6, 1.6);
        }
        for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
            const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
            if (d < 120) {
                ctx.strokeStyle = `rgba(${color},${(1 - d / 120) * .12})`;
                ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
            }
        }
        if (!reduce) requestAnimationFrame(draw);
    }
    addEventListener("resize", size);
    size(); draw();
})();

/* ============ تشغيل ============ */
$("#year").textContent = new Date().getFullYear();
render();
tick();
