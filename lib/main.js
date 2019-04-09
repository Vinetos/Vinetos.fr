'use strict';

document.addEventListener('DOMContentLoaded', function () {
    particlesJS.load('particles-js', 'lib/particlesjs-config.json', function () {
        return console.log('Particles.js config loaded');
    });
    consoleHello();
});

/* Hey you ! Check the console :)
*  Display the credit in the console.
**/
function consoleHello() {
    var userAgent = navigator.userAgent.toLowerCase();
    var supported = /(chrome|firefox)/;

    if (supported.test(userAgent.toLowerCase())) {
        var dark = ['padding: 18px 5px 16px', 'background-color: #171718', 'color: #e74c3c'].join(';');

        if (userAgent.indexOf('chrome') > -1) {
            dark += ';';
            dark += ['padding: 18px 5px 16px 40px', 'background-image: url(https://pbs.twimg.com/profile_images/897534194032799745/COWIBUi6_400x400.jpg)', 'background-position: 10px 9px', 'background-repeat: no-repeat', 'background-size: 30px 30px'].join(';');
        }

        var red = ['padding: 18px 5px 16px', 'background-color: #e74c3c', 'color: #ffffff'].join(';');

        var spacer = ['background-color: transparent'].join(';');

        var msg = '%c Crafted with ❤ by Vinetos %c https://www.vinetos.fr %c';

        console.log(msg, dark, red, spacer);
    } else if (window.console) console.log('Crafted with love by Vinetos - https://www.vinetos.fr');
}