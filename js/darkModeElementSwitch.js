let lightMode = true;
$('#darkmode').on('click', function () {
    let lightModeElement = document.getElementById('light-mode-element');
    let darkModeElement = document.getElementById('dark-mode-element');
    let lightModeIcon = document.getElementById('dark-contact-icon');
    let darkModeIcon = document.getElementById('day-contact-icon');
    let lightModeFooter = document.getElementById('dark-contact-footer');
    let darkModeFooter = document.getElementById('day-contact-footer');
    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    console.log(lightMode);
    if (lightMode) {
        lightModeElement.classList.add('hidden');
        darkModeElement.classList.remove('hidden');
        lightModeIcon.classList.add('hidden');
        darkModeIcon.classList.remove('hidden');
        lightModeFooter.classList.add('hidden');
        darkModeFooter.classList.remove('hidden');
        lightMode = false;
    } else {
        lightModeElement.classList.remove('hidden');
        darkModeElement.classList.add('hidden');
        lightModeIcon.classList.remove('hidden');
        darkModeIcon.classList.add('hidden');
        lightModeFooter.classList.remove('hidden');
        darkModeFooter.classList.add('hidden');
        lightMode = true;
    }
})