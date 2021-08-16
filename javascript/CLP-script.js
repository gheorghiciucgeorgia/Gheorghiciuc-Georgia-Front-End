$(function loadCLP() {
    $(".box-hidden").slice(0, 4).show();
    $("#CLP-loadMore").on('click', function (e) {
        e.preventDefault();
        $(".box-hidden:hidden").slice(0, 1).slideDown('fast','linear');
        if ($(".box-hidden:hidden").length == 0) {
            $("#load").fadeOut('slow');
        }
    });
});