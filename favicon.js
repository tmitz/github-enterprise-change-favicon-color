chrome.extension.sendMessage({color: localStorage['color'], icon_size: localStorage['icon_size']}, function(response) {

    if (response.cache_clear == 1) {
        localStorage.removeItem('favicon');
        localStorage.removeItem('color');
        localStorage.removeItem('icon_size');
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
            var size = parseInt(response.icon_size);
            canvas.width = size;
            canvas.height = size;
            var context = canvas.getContext("2d");
            context.drawImage(img, 0, 0);
            context.globalCompositeOperation = "source-in";
            context.fillStyle = response.color;
            context.fillRect(0, 0, size, size);
            context.fill();
            link.href = canvas.toDataURL();
            localStorage["favicon"] = canvas.toDataURL();
            localStorage["color"] = response.color;
            localStorage["icon_size"] = size;
        }
    };
});
