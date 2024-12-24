const mainMenuButtons = document.querySelectorAll('.main-menu button');
const sidebarContents = document.querySelectorAll('.sidebar-content');
const contentItems = document.querySelectorAll('.content-item');

mainMenuButtons.forEach(button => {
    button.addEventListener('click', () => {
        const labId = button.dataset.lab;

        // Приховуємо всі сайдбари та контент
        sidebarContents.forEach(sidebar => sidebar.style.display = 'none');
        contentItems.forEach(item => item.style.display = 'none');

        // Показуємо вибраний сайдбар
        document.getElementById(labId).style.display = 'block';
    });
});

sidebarContents.forEach(sidebar => {
    const buttons = sidebar.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const contentId = button.dataset.content;

            // Приховуємо весь контент
            contentItems.forEach(item => item.style.display = 'none');

            // Показуємо вибраний контент
            document.getElementById(contentId).style.display = 'block';
        });
    });
});