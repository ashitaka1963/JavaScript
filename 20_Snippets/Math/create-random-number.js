// 特定範囲内のランダム値を生成

// Math.random()
// 0以上1未満の値を出力


// 7000から8000の間でランダムな値を取得する。
var min = 7000;
var max = 8000;
var randNum = Math.floor(Math.random()*(max-min)+min);

console.log(randNum);
//7000 ~ 8000
