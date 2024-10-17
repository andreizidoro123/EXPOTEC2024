function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}
document.getElementById('irparainfos').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    document.querySelector('conteudodois').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('irparapontos').addEventListener('click', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    document.getElementById('conteudoTres').scrollIntoView({ behavior: 'smooth' });
});
