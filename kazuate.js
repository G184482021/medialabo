// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
//hantei();
//hantei();
//hantei();
//hantei();

// ボタンを押した後の処理をする関数 hantei() の定義


let b = document.querySelector('button#print');
b.addEventListener('click', kazuate);

//function hantei() {
function kazuate() {
    let k = document.querySelector('input[yoso="kaito"]');
    let kaito = k.value;
    kaito = Math.floor(k.value);
    let yoso = kaito;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    kaisu = kaisu + 1;
    let pr = document.querySelector('span#result');
    let py = document.querySelector('span#yoso');
    py.textContent = kaisu + '回目の予想: ' + yoso;
    if(kaisu < 3){
        if(yoso === kotae){
            pr.textContent = '正解です。おめでとう！';
        }else if(yoso < kotae){
            pr.textContent = 'まちがい。答えはもっと大きいですよ';
        }else {
            pr.textContent = 'まちがい。答えはもっと小さいですよ';
        }
    }else if(kaisu === 3){
        if(yoso !== kotae){
            pr.textContent = 'まちがい。残念でした。答えは ' + kotae + ' です。';
        }else{
            pr.textContent = '正解です。おめでとう！';
        }
    }else{
        pr.textContent = '答えは ' + kotae + ' でした。すでにゲームは終わっています';
    }
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
}