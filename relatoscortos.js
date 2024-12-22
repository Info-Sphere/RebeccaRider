/document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.interactive-list li a');
    
    listItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault(); // Evita ir al enlace inmediatamente
            
            // Remover clase 'clicked' de todos los elementos
            listItems.forEach(link => link.parentElement.classList.remove('clicked'));
            
            // Añadir clase 'clicked' al elemento seleccionado
            item.parentElement.classList.add('clicked');
            
            // Redirigir después de un breve retraso
            setTimeout(() => {
                window.location.href = item.href;
            }, 700); // 700ms de transición
        });
    });
});
