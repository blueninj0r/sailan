var sailan = (function () {
    var pre;

    var options = {
        width: 100,
        height: 100,
        fontSize: 1.5
      };

    var init = function () {
        pre = document.createElement("pre");
        pre.style.fontFamily = 'Courier New, Monospace';
        pre.style.letterSpacing = '1.5px';
        pre.style.fontSize = options.fontSize + 'px';
        pre.style.lineHeight = '1';
        pre.style.fontWeight = 'bold';
        pre.style.width = options.width * options.fontSize + 'px';
        pre.style.height = options.height * options.fontSize + 'px';

        pre.innerHTML = "blah";

        render();
      };

    var render = function () {
        var ocean = document.getElementById("ocean");
        ocean.appendChild(pre);
      };

    return {
        init: init
      };
  }());