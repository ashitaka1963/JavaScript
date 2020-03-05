window.onload = function() {
    const $ = window.jQuery;

    // チェックボックスをDOMに追加
    $('body').prepend(
        '<div><input type="checkbox" class="checkbox" value="0">名前</input><input type="checkbox" class="checkbox" value="1">年齢</input><div><input type="checkbox" class="checkbox" value="2">住所</input><div>'
    );

    $('.checkbox').change(function() {
        let colIndex = Number($(this).val());

        $('td:nth-child(' + (colIndex + 1) + ')').toggle();
        $('th')
            .eq(colIndex)
            .toggle();
    });
};

// 参考
// https://qiita.com/guchimina/items/5967b78aa18447823718
