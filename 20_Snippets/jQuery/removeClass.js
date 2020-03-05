// 指定した要素から、CSSクラスを削除する。

// サンプル
// `strongセレクタ`を持つ`div要素`の`test属性`を削除する。
var $target = $("div:has('strong')");
$target.removeClass("test");
