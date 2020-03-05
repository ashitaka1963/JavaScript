// toggleClass(class)
// 指定したCSSクラスが要素に無ければ追加し、あれば削除する。

// 引数
// class
// String
// 指定または削除するCSSクラス名

// サンプル
// クリックされる毎に、highlightクラスをあてる

var count = 0;
var $target = $("div:has('strong')");
$target.toggleClass("highlight");

