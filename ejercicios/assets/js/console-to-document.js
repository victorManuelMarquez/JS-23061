// fuente: https://stackoverflow.com/questions/20256760/javascript-console-log-to-html

(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br>';
        } else {
            logger.innerHTML += message + '<br>';
        }
    }
})();