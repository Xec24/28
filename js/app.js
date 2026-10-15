document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('greetingModal');
    const nameInput = document.getElementById('userNameInput');
    const submitBtn = document.getElementById('greetingSubmitBtn');
    const promoTitle = document.getElementById('promoTitle');

    modal.classList.remove('hidden');
    
    setTimeout(() => {
        nameInput.focus();
    }, 300);

    function submitGreeting() {
        const name = nameInput.value.trim();
        
        if (name) {
            const titleText = 'Привет, ' + name + '! Добро пожаловать на сайт группы отелей Selly Hotels!';
            if (promoTitle) {
                promoTitle.innerText = titleText;
            }
            modal.classList.add('hidden');
        } else {
            nameInput.classList.add('error');
            nameInput.placeholder = 'Пожалуйста, введите имя';
            nameInput.focus();
        }
    }

    submitBtn.addEventListener('click', submitGreeting);

    nameInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            submitGreeting();
        }
    });
    
    nameInput.addEventListener('input', function() {
        nameInput.classList.remove('error');
        nameInput.placeholder = 'Ваше имя';
    });
});