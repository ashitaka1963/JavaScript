# ifram内の要素取得

iframeは外部のリソースを読みこんでいるので、JavaScriptでiframeのDOM要素に直接アクセスできない。
しかし、contents()メソッドを使うことで、要素にアクセスできる。
なお、別のドメインの<iframe>内のDOM要素にはアクセス出来ない。

## contents()

要素のテキストノードも含めた全子要素を取得します。対象要素がiframeであれば、呼び出されるコンテンツのDocumentを選択する。

## Demo

ボタンクリック時にテーブルの表示切替（.toggle）を行っている。
contensを用いて場合のみ、iframe内の要素を取得できている。

![result](https://github.com/ashitaka1963/JavaScript/blob/master/ifram%E5%86%85%E3%81%AE%E8%A6%81%E7%B4%A0%E5%8F%96%E5%BE%97/resource/ifram%E5%86%85%E3%81%AE%E8%A6%81%E7%B4%A0%E5%8F%96%E5%BE%97demo.gif)
