// =================== ローカルストレージ読み込み ===================
// localStorage.getItem('key')
var getValue = localStorage.getItem('key');

// カンマ(,)区切りで保存されている値を配列で取得
let list =[];

if (getValue != ""){
    list = localStorage.getItem('key').split(',')
}

// =================== ローカルストレージ保存 ===================
// localStorage.setItem('key', 'value')
localStorage.setItem('key', 'str');


// 配列をカンマ(,)区切りの文字列に保存してローカルストレージに保存
let valList =[a, b, c, d]
let valStr = valList.join(','); // "a, b, c, d"
localStorage.setItem('solvedProblem', valStr);