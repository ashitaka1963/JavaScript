window.onload = function() {
    const $ = window.jQuery;

    $('#button1').click(function() {
        var $tabel = $('#targetTable');
        $tabel.toggle();
        $('#msg').text('要素数 : ' + $tabel.length);
    });

    $('#button2').click(function() {
        var iframe = $('iframe').contents();
        var $tabel = iframe.find('#targetTable');
        $tabel.toggle();
        $('#msg').text('要素数 : ' + $tabel.length);
    });
};
