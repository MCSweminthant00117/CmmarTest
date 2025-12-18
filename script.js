// Material 3 Ripple Logic
document.addEventListener('mousedown', function (e) {
    const target = e.target.closest('.ripple-effect');
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.classList.add('ripple');

    target.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
});

// Language Toggle
let currentLang = 'EN';
function toggleLanguage() {
    currentLang = currentLang === 'EN' ? 'MM' : 'EN';
    document.getElementById('current-lang').innerText = currentLang;
    // Translate text logic here
}
