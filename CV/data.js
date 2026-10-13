/* =========================================================
   كل محتوى الموقع هنا — عدّل هذا الملف فقط
   All site content lives here — edit this file only
   ========================================================= */

const PROFILE = {
    phone: "+966 54 707 7600",
    whatsapp: "966547077600",
    email: "ans125na@gmail.com",
    linkedin: "https://www.linkedin.com/in/",   // ← ضع رابط حسابك
    github: "",                                 // ← اختياري: رابط GitHub
    photo: "assets/photo.jpg",                  // ← ضع صورتك الشخصية بهذا الاسم
    timezone: "Asia/Riyadh",
};

/* الشهادات: لإضافة صورة شهادة، حط الصورة في مجلد certificates
   واكتب اسمها في image. مثال: image: "certificates/ibm.jpg"
   يدعم jpg / png / webp / pdf */
const CERTIFICATES = [
    {
        image: "certificates/english.jpg",
        en: { name: "English Language Certificates (Levels 2, 3 & 4)", issuer: "Al-Musheer Language Institute", date: "Oct 2025 – Jan 2026" },
        ar: { name: "شهادات اللغة الإنجليزية (المستويات 2، 3، 4)", issuer: "معهد المشير للغات", date: "أكتوبر 2025 – يناير 2026" },
    },
    {
        image: "certificates/ibm-cybersecurity.jpg",
        en: { name: "Cybersecurity Fundamentals with Capstone Project", issuer: "IBM SkillsBuild", date: "Nov 2025" },
        ar: { name: "أساسيات الأمن السيبراني مع مشروع تطبيقي", issuer: "IBM SkillsBuild", date: "نوفمبر 2025" },
    },
    {
        image: "certificates/sdaia-ai-principles.jpg",
        en: { name: "AI Principles and Advanced Applications", issuer: "SDAIA", date: "Sep 2025" },
        ar: { name: "مبادئ الذكاء الاصطناعي وتطبيقاته المتقدمة", issuer: "سدايا (SDAIA)", date: "سبتمبر 2025" },
    },
    {
        image: "certificates/sdaia-ai-advanced.jpg",
        en: { name: "Advanced AI Concepts and Applications", issuer: "SDAIA", date: "Sep 2025" },
        ar: { name: "مفاهيم وتطبيقات متقدمة في الذكاء الاصطناعي", issuer: "سدايا (SDAIA)", date: "سبتمبر 2025" },
    },
    {
        image: "certificates/tuwaiq-ux.jpg",
        en: { name: "Humanizing Digital Experiences for Better Usability", issuer: "Tuwaiq Academy", date: "Aug 2025" },
        ar: { name: "أنسنة التجارب الرقمية لتحسين قابلية الاستخدام", issuer: "أكاديمية طويق", date: "أغسطس 2025" },
    },
   
    {
        image: "certificates/sdaia.jpg",
        en: { name: "Large Language Model Application Engineering", issuer: "SDAIA", date: "Oct 2026" },
        ar: { name: "هندسة تطبيقات النماذج اللغوية الكبيره", issuer: "سدايا", date: "2026 اكتوبر" },
    },
];

/* المشاريع: لإضافة مشروع جديد انسخ أي مشروع من { إلى }, وعدّل بياناته.
   logo: شعار المشروع — حطه في مجلد assets/projects  (png / svg / jpg)
   link: رابط المشروع — لما الزائر يضغط على المشروع يفتح هذا الرابط
   (اتركه "" إذا ما عندك رابط) */
const PROJECTS = [
    {
        name: "Player Broker App",
        logo: "assets/projects/player-broker.png",
        link: "https://www.playerbroker.com",
        tags: ["Flutter", "Dart", "PHP", "SQL", "REST API"],
        en: { label: "Mobile · Sports", desc: "A cross-platform mobile app for iOS and Android connecting players with opportunities. Full system design, PHP/SQL backend, REST APIs, account and transaction management — built and shipped end-to-end." },
        ar: { label: "جوال · رياضة", desc: "تطبيق جوال متعدد المنصات لـ iOS و Android يربط اللاعبين بالفرص. تصميم كامل للنظام، خلفية PHP/SQL، واجهات REST API، وإدارة الحسابات والمعاملات — من الفكرة حتى الإطلاق." },
    },
    // مثال لمشروع ثاني — احذف // من بداية الأسطر وعدّل البيانات:
     {
        name: "أجا AJA ",
         logo: "assets/projects/Aja.png",
         link: "https://aja.center",
         tags: ["Flutter", "Firebase"],
         en: { label: "Web · Education", desc: "Aja is a platform for outings and camping trips for the people of Hail.." },
        ar: { label: "ويب · سياحة", desc: "أجا منصة طلعات ومخيمات لي اهل حائل" },
     },
       {
        name: "فرنشايز فرايز  ",
         logo: "assets/projects/Fir.png",
         link: "https://franchise-fries.netlify.app/menu.html",
         tags: ["html", "js","css","supabase"],
         en: { label: "Web · Restaurant", desc: "Complete cashier system for food trucks." },
        ar: { label: "ويب · مطعم", desc: "نظام كاشير كامل ل فود ترك" },
     },
];

/* ملف السيرة الذاتية للتحميل (PDF) — نسخة لكل لغة */
const CV_FILES = {
    en: "assets/CV-Anas-Alshammari-EN.pdf",
    ar: "assets/CV-Anas-Alshammari-AR.pdf",
};

const SKILLS = [
    { key: "mobile", items: ["Flutter", "Dart", "iOS", "Android"] },
    { key: "backend", items: ["PHP", "SQL", "Supabase", "REST APIs"] },
    { key: "languages", items: ["Python", "Java", "JavaScript", "HTML", "CSS"] },
    { key: "ai", items: ["Data Science", "NLP", "ChatGPT", "Gemini", "DeepSeek"] },
    { key: "infra", items: ["Networking", "TCP/IP", "Active Directory", "UML"] },
    { key: "tools", items: ["Git", "Figma", "UI/UX", "MS Office"] },
];

const CONTENT = {
    en: {
        name: "Anas Naif Alshammari",
        first: "Anas",
        role: "Software Engineer.",
        sub: "Flutter Mobile Developer",
        location: "Hail, Saudi Arabia",
        city: "Hail",
        hello: "Hello, I'm",
        intro: "I build cross-platform mobile apps end-to-end — Flutter interfaces backed by PHP & SQL services, clean APIs, and solid IT foundations.",
        nav: { home: "Home", about: "About", experience: "Experience", projects: "Projects", skills: "Skills", certs: "Certificates", contact: "Contact" },
        btn: { projects: "View Projects", contact: "Get in Touch", cv: "Download CV", talk: "Let's Talk", view: "View certificate", open: "Open project", lang: "ع", },
        stats: [["{projects}", "Projects"], ["2", "Roles"], ["{certs}", "Certificates"], ["B.Sc", "Software Eng."]],
        about: {
            tag: "Who I Am",
            title: "About Me",
            body: [
                "I'm a results-driven Software Engineer with a Bachelor's degree from the University of Hail. I founded and lead the development of Player Broker App — a cross-platform mobile app that I architected, built, and maintain from the database to the UI.",
                "Before that, I worked in IT at Hail Chamber, managing internal networks, supporting staff, and running AV/IT for meetings and conferences. That mix gives me both product-building skills and a practical understanding of infrastructure.",
            ],
            facts: [["Name", "Anas Naif Alshammari"], ["Location", "Hail, Saudi Arabia"], ["Email", "ans125na@gmail.com"], ["Phone", "+966 54 707 7600"], ["Status", "Open to work ✓"]],
        },
        expTag: "Experience",
        expTitle: "Where I've worked.",
        experience: [
            {
                title: "Founder & Lead Developer", org: "Player Broker App", date: "Jan 2026 – Present",
                points: [
                    "Architected and designed the complete system for a cross-platform mobile application for iOS and Android using Flutter.",
                    "Developed and hosted backend services and built databases using PHP and SQL to manage accounts and transaction data.",
                    "Designed and built REST APIs to integrate the mobile frontend with the backend for efficient data retrieval.",
                    "Conducted performance testing and debugging, optimizing app responsiveness under various conditions.",
                    "Managed the full Software Development Life Cycle (SDLC), from inception and design to launch and maintenance.",
                ],
            },
            {
                title: "IT Specialist", org: "Hail Chamber", date: "Jun 2025 – Jan 2026",
                points: [
                    "Managed and operated internal communication networks and monitored the connectivity of chamber devices to the internet.",
                    "Provided technical support to staff and troubleshot issues with desktop computers, printers, and software.",
                    "Set up and maintained AV/IT equipment for the chamber's meeting rooms, events, and conferences.",
                ],
            },
        ],
        projTag: "My Work",
        projTitle: "Projects",
        skillsTag: "Skills",
        skillsTitle: "My toolkit.",
        skillGroups: { mobile: "Mobile", backend: "Backend & Data", languages: "Languages & Web", ai: "Data & AI", infra: "IT Infrastructure", tools: "Tools & Design" },
        eduTag: "Education & Training",
        eduTitle: "Certificates & learning.",
        education: { title: "Bachelor's Degree in Software Engineering", org: "University of Hail", date: "2026" },
        contactTag: "Contact",
        contactBody: "Open to full-time roles, freelance projects, and collaborations. Reach out and I'll reply as soon as possible.",
        contactLabels: { email: "Email", phone: "Phone", whatsapp: "WhatsApp", linkedin: "LinkedIn" },
        footer: "Software Engineer",
        // نسخة ATS (تظهر فقط عند تحميل الـ CV)
        ats: {
            headline: "Software Engineer | Flutter Mobile Developer",
            summaryTitle: "Professional Summary",
            summary: "Results-driven Software Engineer with hands-on experience in full-stack mobile development and IT infrastructure. Founder and lead developer of Player Broker App, a cross-platform mobile application built with Flutter and a PHP/SQL backend, with prior IT experience at Hail Chamber managing internal networks and providing technical support. Holds a Bachelor's Degree in Software Engineering and combines strong technical problem-solving with a collaborative, solution-oriented mindset.",
            expTitle: "Work Experience", eduTitle: "Education", skillsTitle: "Skills", certsTitle: "Certifications & Training",
        },
    },

    ar: {
        name: "أنس نايف الشمري",
        first: "أنس",
        role: "مهندس برمجيات.",
        sub: "مطوّر تطبيقات جوال Flutter",
        location: "حائل، المملكة العربية السعودية",
        city: "حائل",
        hello: "مرحباً، أنا",
        intro: "أبني تطبيقات جوال متعددة المنصات من البداية للنهاية — واجهات Flutter مع خدمات خلفية PHP و SQL، وواجهات API نظيفة، وأساس قوي في تقنية المعلومات.",
        nav: { home: "الرئيسية", about: "نبذة", experience: "الخبرات", projects: "المشاريع", skills: "المهارات", certs: "الشهادات", contact: "تواصل" },
        btn: { projects: "شاهد المشاريع", contact: "تواصل معي", cv: "تحميل السيرة", talk: "تواصل", view: "عرض الشهادة", open: "فتح المشروع", lang: "EN" },
        stats: [["{projects}", "مشاريع"], ["2", "خبرات عملية"], ["{certs}", "شهادات"], ["بكالوريوس", "هندسة برمجيات"]],
        about: {
            tag: "من أنا",
            title: "نبذة عني",
            body: [
                "مهندس برمجيات حاصل على البكالوريوس من جامعة حائل. أسست وأقود تطوير تطبيق Player Broker — تطبيق جوال متعدد المنصات صممته وبنيته وأديره من قاعدة البيانات حتى الواجهة.",
                "قبلها عملت في تقنية المعلومات بغرفة حائل: إدارة الشبكات الداخلية، دعم الموظفين فنياً، وتجهيز الأنظمة السمعية والبصرية للاجتماعات والمؤتمرات. هذا المزيج يعطيني مهارة بناء المنتجات وفهماً عملياً للبنية التحتية.",
            ],
            facts: [["الاسم", "أنس نايف الشمري"], ["الموقع", "حائل، السعودية"], ["البريد", "ans125na@gmail.com"], ["الجوال", "+966 54 707 7600"], ["الحالة", "متاح للعمل ✓"]],
        },
        expTag: "الخبرات",
        expTitle: "أين عملت.",
        experience: [
            {
                title: "المؤسس والمطور الرئيسي", org: "تطبيق Player Broker", date: "يناير 2026 – حتى الآن",
                points: [
                    "تصميم وبناء البنية الكاملة لتطبيق جوال متعدد المنصات (iOS و Android) باستخدام Flutter.",
                    "تطوير واستضافة الخدمات الخلفية وبناء قواعد البيانات باستخدام PHP و SQL لإدارة الحسابات وبيانات المعاملات.",
                    "تصميم وبناء واجهات REST API لربط واجهة التطبيق بالنظام الخلفي واسترجاع البيانات بكفاءة.",
                    "إجراء اختبارات الأداء ومعالجة الأخطاء وتحسين سرعة استجابة التطبيق في ظروف مختلفة.",
                    "إدارة دورة حياة تطوير البرمجيات (SDLC) كاملة من الفكرة والتصميم حتى الإطلاق والصيانة.",
                ],
            },
            {
                title: "أخصائي تقنية معلومات", org: "غرفة حائل", date: "يونيو 2025 – يناير 2026",
                points: [
                    "إدارة وتشغيل شبكات الاتصال الداخلية ومراقبة اتصال أجهزة الغرفة بالإنترنت.",
                    "تقديم الدعم الفني للموظفين وحل مشكلات أجهزة الحاسب والطابعات والبرامج.",
                    "تجهيز وصيانة الأنظمة السمعية والبصرية لقاعات الاجتماعات والفعاليات والمؤتمرات.",
                ],
            },
        ],
        projTag: "أعمالي",
        projTitle: "المشاريع",
        skillsTag: "المهارات",
        skillsTitle: "أدواتي.",
        skillGroups: { mobile: "تطبيقات الجوال", backend: "الخلفية والبيانات", languages: "اللغات والويب", ai: "البيانات والذكاء الاصطناعي", infra: "البنية التحتية", tools: "الأدوات والتصميم" },
        eduTag: "التعليم والتدريب",
        eduTitle: "الشهادات والتعلّم.",
        education: { title: "بكالوريوس هندسة البرمجيات", org: "جامعة حائل", date: "2026" },
        contactTag: "تواصل",
        contactBody: "متاح للوظائف بدوام كامل، والمشاريع الحرة، والتعاون. راسلني وبرد عليك بأسرع وقت.",
        contactLabels: { email: "البريد", phone: "الجوال", whatsapp: "واتساب", linkedin: "لينكدإن" },
        footer: "مهندس برمجيات",
        ats: {
            headline: "مهندس برمجيات | مطوّر تطبيقات جوال Flutter",
            summaryTitle: "الملخص المهني",
            summary: "مهندس برمجيات يركّز على النتائج، يمتلك خبرة عملية في تطوير تطبيقات الجوال المتكاملة والبنية التحتية لتقنية المعلومات. مؤسس ومطور رئيسي لتطبيق Player Broker، وهو تطبيق جوال متعدد المنصات مبني بـ Flutter مع خلفية PHP/SQL، وسبق له العمل في تقنية المعلومات بغرفة حائل في إدارة الشبكات الداخلية وتقديم الدعم الفني. حاصل على البكالوريوس في هندسة البرمجيات، ويجمع بين مهارة حل المشكلات التقنية وروح العمل الجماعي.",
            expTitle: "الخبرات العملية", eduTitle: "التعليم", skillsTitle: "المهارات", certsTitle: "الشهادات والدورات التدريبية",
        },
    },
};
