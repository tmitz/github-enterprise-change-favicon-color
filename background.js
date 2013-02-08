chrome.extension.onMessage.addListener(function (request, sender, callback) {
    var response = {};
    response.cache_clear = (request.color == localStorage['color']) ? 0 : 1;
    response.color = localStorage["color"];
    callback(response);
});
