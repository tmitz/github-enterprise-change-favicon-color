$(document).ready(function() {
    // restore
    if (localStorage["color"]) {
        $('input[value="'+ localStorage["color"] +'"]').attr('checked', true);
    } else {
        $('input[name="colors"]').first().attr("checked", true);
    }
    // save
    $('#submit').on('click', function() {
        localStorage["color"] = $('input[name="colors"]:checked').val();
    });
});
