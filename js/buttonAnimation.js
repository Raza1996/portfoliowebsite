const btn = document.querySelector('.btn');

btn.addEventListener('mousemove', function(e) {
    const rect = btn.getBoundingClientRect();
    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;

    const x = e.clientX - rect.left - btnWidth / 2;
    const y = e.clientY - rect.top - btnHeight / 2;

    btn.style.setProperty('--x', (x + btnWidth / 2) + 'px');
    btn.style.setProperty('--y', (y + btnHeight / 2) + 'px');
});