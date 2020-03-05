// jQuery HP
// https://code.jquery.com/

// 日本語ドキュメント
// http://js.studio-kingdom.com/jquery/

var head = document.getElementsByTagName('head')
var script = document.createElement('script')

//ここで任意のjQueryを読み込ませる
script.setAttribute('src', 'https://code.jquery.com/jquery-3.4.1.min.js')

script.setAttribute('type', 'text/javascript')
script.addEventListener('load', function() {
    var $ = window.jQuery;
    // ここにjQueryの記述をする
    $(function() {
        console.log('IN');
        $("h2").after("<p>aaa</p>");
    })
})
document.head.appendChild(script);