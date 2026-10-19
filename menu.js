// menu.js — общее меню и подвал
document.addEventListener('DOMContentLoaded', function() {

    // --- Меню (верхняя навигация) ---
    const nav = document.createElement('nav');
    nav.style.cssText = `
        background: #2c3e50;
        padding: 0.8rem 1.5rem;
        border-radius: 8px;
        margin-bottom: 2rem;
        display: flex;
        flex-wrap: wrap;
        gap: 1.2rem;
        align-items: center;
    `;
    nav.innerHTML = `
        <a href="index.html" style="color: white; text-decoration: none; font-weight: bold;">🧩 Тактика</a>
        <a href="index.html#rules" style="color: #ecf0f1; text-decoration: none;">Правила / Rules</a>
        <a href="index.html#gallery" style="color: #ecf0f1; text-decoration: none;">Мега-ход / Mega-move</a>
        <a href="contacts.html" style="color: #ecf0f1; text-decoration: none;">Контакты / Contacts</a>
        <a href="https://github.com/Vasilii-Kostin/tactics" target="_blank" style="color: #ecf0f1; text-decoration: none;">GitHub</a>
    `;

    // Вставляем меню в самое начало body
    document.body.prepend(nav);

    // --- Подвал (footer) ---
    const footer = document.createElement('footer');
    footer.style.cssText = `
        margin-top: 2.5rem;
        padding-top: 1rem;
        border-top: 1px solid #ddd;
        font-size: 0.9rem;
        color: #555;
        text-align: center;
    `;
    footer.innerHTML = `
        <p>Проект сохранения советского наследия. Головоломка «Тактика» (Ленинград, 1988). / Soviet heritage preservation project. Puzzle "Tactics" (Leningrad, 1988).</p>
        <p>© 2026 Василий Костин / Vasilii Kostin</p>
    `;

    document.body.appendChild(footer);
});