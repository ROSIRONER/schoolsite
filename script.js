
// Функция для показа страницы
function showPage(pageId) {
    // Скрыть все страницы
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Показать выбранную страницу
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Прокрутить наверх
    window.scrollTo(0, 0);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Показать главную страницу по умолчанию
    showPage('main-page');
    
    // Добавить обработчики для всех кнопок навигации
    document.addEventListener('click', function(event) {
        const button = event.target.closest('button[onclick]');
        if (button) {
            event.preventDefault();
            const onclickAttr = button.getAttribute('onclick');
            if (onclickAttr && onclickAttr.includes('showPage')) {
                const match = onclickAttr.match(/showPage\('([^']+)'\)/);
                if (match && match[1]) {
                    showPage(match[1]);
                }
            }
        }
    });
});

// Обработка истории браузера (назад/вперед)
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page) {
        showPage(event.state.page);
    } else {
        showPage('main-page');
    }
});

// Функция для изменения URL (опционально)
function updateURL(pageId) {
    const title = getPageTitle(pageId);
    history.pushState({page: pageId}, title, '#' + pageId.replace('-page', ''));
}

function getPageTitle(pageId) {
    switch(pageId) {
        case 'main-page':
            return 'Школа №47 - Изучение китайского языка';
        case 'chinese-page':
            return 'Школа №47 - 中文版本';
        case 'study-page':
            return 'Школа №47 - В помощь обучающемуся';
        default:
            return 'Школа №47';
    }
}

// Глобальная функция для использования в HTML
window.showPage = showPage;
