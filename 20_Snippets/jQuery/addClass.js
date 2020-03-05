// 指定した要素に、CSSクラスを追加する。

// サンプル
// `strongセレクタ`を持つ`div要素`に`test属性`を追加する。

var $target = $("div:has('strong')");
$target.addClass("test");

console.log($target.text());
// George Martin
