let lightMode = true;
$('#darkmode').on('click', function () {
    let lightModeElement = document.getElementById('day-contact-icon');
    let darkModeElement = document.getElementById('dark-contact-icon');
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