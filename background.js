chrome.extension.onMessage.addListener(function (request, sender, callback) {
    var response = {};
    response.cache_clear = (request.color == localStorage['color'] && request.icon_size == localStorage['icon_size']) ? 0 : 1;
    response.color = localStorage["color"];
    response.icon_size = localStorage["icon_size"];
    callback(response);
});
