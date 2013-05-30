$(document).ready(function() {
    // restore
    if (localStorage["color"]) {
        $('input[value="'+ localStorage["color"] +'"]').attr('checked', true);
    } else {
        $('input[name="colors"]').first().attr("checked", true);
    }

    if (localStorage["icon_size"]) {
        $('input[value="'+ localStorage["icon_size"] + '"]').attr('checked', true);
    }
    // save
    $('#submit').on('click', function() {
        localStorage["color"] = $('input[name="colors"]:checked').val();
        localStorage["icon_size"] = $('input[name="icon_size"]:checked').val();
    });
});
