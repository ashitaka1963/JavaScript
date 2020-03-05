// 指定したCSSクラスを要素に、switchがtrueであれば追加し、falseであれば削除する

// サンプル
// 3回クリックされる毎に、highlightクラスをあてる
var count = 0;
var $target = $("div:has('strong')");
$target.toggleClass("highlight", count++ % 3 == 0);
