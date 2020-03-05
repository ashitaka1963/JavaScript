window.onload = function() {
    const $ = window.jQuery;

    // FontAwesomの読み込み
    var link_style = document.createElement('link');
    link_style.setAttribute('rel', 'stylesheet');
    link_style.setAttribute(
        'href',
        'https://use.fontawesome.com/releases/v5.6.3/css/all.css'
    );
    document.head.appendChild(link_style);

    var angleDownIcon = '<i class="fas fa-angle-down fa-fw"/>';

    // クラス追加
    $("td:contains('名前')")
        .parent()
        .addClass('category');

    var $categroyTD = $("td:contains('名前')");
    $categroyTD.prepend(angleDownIcon);

    // クリック処理
    $categroyTD.click(function() {
        var $categroyTH = $(this).parent();

        // // 子要素表示切替
        $categroyTH.nextUntil('.category').toggle();

        $(this)
            .find('i')
            .toggleClass('fa-angle-down')
            .toggleClass('fa-angle-right');
    });
};
