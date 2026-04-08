const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
function openImage(src) {
    document.getElementById('imgModal').style.display = 'flex';
    document.getElementById('modalImg').src = src;
}

function closeImage() {
    document.getElementById('imgModal').style.display = 'none';
}
