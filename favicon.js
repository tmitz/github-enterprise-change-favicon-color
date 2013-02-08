chrome.extension.sendMessage({color: localStorage['color']}, function(response) {
    if (response.cache_clear == 1) {
        localStorage.removeItem('favicon');
        localStorage.removeItem('color');
    }
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", "shortcut icon");
      document.head.appendChild(link);
    }
    link.type = "image/x-icon";

    var faviconUrl = link.href || window.location.origin + "/favicon.ico";
    var img = document.createElement('img');
    img.addEventListener("load", onImageLoaded);
    img.src = faviconUrl;

    function onImageLoaded() {
        if (localStorage["favicon"]) {
            link.href = localStorage["favicon"];
        } else {
            var canvas = document.createElement("canvas");
            canvas.width = 32;
            canvas.height = 32;
            var context = canvas.getContext("2d");
            context.drawImage(img, 0, 0);
            context.globalCompositeOperation = "source-in";
            context.fillStyle = response.color;
            context.fillRect(0, 0, 32, 32);
            context.fill();
            link.href = canvas.toDataURL();
            localStorage["favicon"] = canvas.toDataURL();
            localStorage["color"] = response.color;
        }
    };
});
