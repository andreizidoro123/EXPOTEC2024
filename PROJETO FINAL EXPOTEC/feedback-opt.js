document.getElementById('feedback-btn').addEventListener('click', function() {
    document.getElementById('feedback-modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('feedback-modal').style.display = 'none';
});

let selectedRating = 0;
document.querySelectorAll('.star').forEach(function(star, index) {
    star.addEventListener('click', function() {
        selectedRating = index + 1; // Definindo o valor corretamente baseado no índice
        document.querySelectorAll('.star').forEach(function(s, i) {
            s.classList.remove('selected');
            // Adiciona a classe 'selected' para todas as estrelas até a selecionada
            if (i < selectedRating) {
                s.classList.add('selected');
            }
        });
    });
});

document.getElementById('submit-feedback').addEventListener('click', function() {
    if (selectedRating > 0) {
        saveFeedback(selectedRating);
        alert('Obrigado pelo seu feedback!');

        // Resetando estrelas
        selectedRating = 0; // Redefinindo a avaliação selecionada
        document.querySelectorAll('.star').forEach(function(s) {
            s.classList.remove('selected'); // Removendo a classe 'selected' de todas as estrelas
        });

        document.getElementById('feedback-modal').style.display = 'none';
    } else {
        alert('Por favor, selecione uma avaliação.');
    }
});

function saveFeedback(rating) {
    console.log('Feedback enviado: ' + rating + ' estrelas'); // Mostra o feedback com a quantidade de estrelas
}
