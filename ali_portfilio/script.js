const translations = {
    en: {
        hello: "Hi, I'm <span class='highlight'>Ali</span>",
        subtitle: "12-year-old Aspiring YouTuber & Creator",
        description: "Welcome to my world! I love making videos about gaming, vlogs, and technology. Check out my latest content and join the journey.",
        subscribe: "Subscribe to my Channel",
        latest_videos: "My Latest Videos",
        vid1_title: "Epic Gaming Moments",
        vid1_desc: "Watch my best plays this week!",
        vid2_title: "Tech Review",
        vid2_desc: "Reviewing my new setup.",
        vid3_title: "Weekend Vlog",
        vid3_desc: "Come cycle with me!",
        footer: "&copy; 2026 Ali. All rights reserved."
    },
    az: {
        hello: "Salam, Mən <span class='highlight'>Əli</span>",
        subtitle: "12 yaşlı gələcək YouTuber və Yaradıcı",
        description: "Mənim dünyama xoş gəldiniz! Mən oyunlar, vloqlar və texnologiya haqqında videolar hazırlamağı sevirəm. Ən son məzmunuma baxın və mənə qatılın.",
        subscribe: "Kanalıma Abunə Ol",
        latest_videos: "Ən Son Videolarım",
        vid1_title: "Möhtəşəm Oyun Anları",
        vid1_desc: "Bu həftəki ən yaxşı oyunlarıma baxın!",
        vid2_title: "Texnologiya İcmalı",
        vid2_desc: "Yeni setup-ımı nəzərdən keçirirəm.",
        vid3_title: "Həftəsonu Vloqu",
        vid3_desc: "Mənimlə velosiped sürün!",
        footer: "&copy; 2026 Əli. Bütün hüquqlar qorunur."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const btnEn = document.getElementById('lang-en');
    const btnAz = document.getElementById('lang-az');

    function setLanguage(lang) {
        // Update active class
        if (lang === 'en') {
            btnEn.classList.add('active');
            btnAz.classList.remove('active');
        } else {
            btnAz.classList.add('active');
            btnEn.classList.remove('active');
        }

        // Update texts
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
    }

    // Default to English
    setLanguage('en');

    btnEn.addEventListener('click', () => setLanguage('en'));
    btnAz.addEventListener('click', () => setLanguage('az'));
});
