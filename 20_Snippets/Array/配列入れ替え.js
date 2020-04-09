// 対象配列に追加対象が既にある場合は削除し、ない場合には末尾に追加する。

function exchangeArray(array, addVal){

    let index = array.indexOf(addVal);

    if (index >= 0){
        // 存在する
        array.splice( index, 1 ) ;
    }else{
        array.push(addVal);
    }

    return array
}

let array = ["apple", "banana", "peach"]
let addVal = "strawberry"

// 新規追加
array = exchangeArray(array, addVal);
console.log(array)   // [ 'apple', 'banana', 'peach', 'strawberry' ]

// 重複のため削除
addVal = "banana"
array = exchangeArray(array, addVal);
console.log(array)   // [ 'apple', 'peach', 'strawberry' ]