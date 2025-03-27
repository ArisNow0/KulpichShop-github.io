// Анимация блоков
document.addEventListener('DOMContentLoaded', function() {
    // Параллакс эффект для блоков
    const blocks = document.querySelectorAll('.mc-block');
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        blocks.forEach((block, index) => {
            const speed = (index + 1) * 0.5;
            const xPos = x * 20 * speed - 10 * speed;
            const yPos = y * 20 * speed - 10 * speed;
            block.style.transform = `translate(${xPos}px, ${yPos}px)`;
        });
    });

    // Фильтрация товаров
    const filterButtons = document.querySelectorAll('.mc-filter-btn');
    const productCards = document.querySelectorAll('.mc-product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс текущей кнопке
            button.classList.add('active');
            
            const filter = button.textContent.trim();
            
            productCards.forEach(card => {
                if (filter === 'Все' || card.querySelector('h3').textContent.includes(filter)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Поиск товаров
    const searchInput = document.querySelector('.mc-search-input');
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        productCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
function openModal(img) {
    var modal = document.getElementById("mcModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
    document.body.style.overflow = "hidden";
}

function closeModal() {
    var modal = document.getElementById("mcModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}