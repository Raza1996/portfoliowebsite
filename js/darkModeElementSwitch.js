let lightMode = true;
$('#darkmode').on('click', function () {
    let lightModeElement = document.getElementById('light-mode-element');
    let darkModeElement = document.getElementById('dark-mode-element');
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    console.log(lightMode);
    if (lightMode) {
        lightModeElement.classList.add('hidden');
        darkModeElement.classList.remove('hidden');
        lightMode = false;
    } else {
        lightModeElement.classList.remove('hidden');
        darkModeElement.classList.add('hidden');
        lightMode = true;
    }
})