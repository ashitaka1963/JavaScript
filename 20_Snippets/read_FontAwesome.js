// css 読み込み
var link_style = document.createElement("link");
link_style.setAttribute("rel", "stylesheet");
link_style.setAttribute(
  "href",
  "https://use.fontawesome.com/releases/v5.6.3/css/all.css"
);
document.body.appendChild(link_style);

// 要素　追加
var plusIcon = '<i class="fas fa-plus"></i>';
$(".readOnlyRow").prepend(plusIcon);
