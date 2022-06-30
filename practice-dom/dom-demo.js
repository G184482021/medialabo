/*
let p = document.createElement('p');
p.textContent = '大洋は、水圏の大部分を占める、それぞれが接続した地球上の海の主要領域である。';
let h2ocean = document.querySelector('h2#aboutOcean');
h2ocean.insertAdjacentElement('afterend', p);
*/
let eu = document.querySelector('li#EU');
eu.remove();
let ul = document.querySelector('ul');
let li;
li = document.createElement('li');
li.textContent = 'アジア大陸';
ul.insertAdjacentElement('beforeend', li);
li = document.createElement('li');
li.textContent = 'ヨーロッパ大陸';
ul.insertAdjacentElement('beforeend', li);

let h2sevenOcean = document.querySelector('h2#sevenOcean');
let ocean = [
  '北極海',
  '北大西洋',
  '南大西洋',
  'インド洋',
  '北太平洋',
  '南太平洋',
  '南極海'
]
ul = document.createElement('ul');
h2sevenOcean.insertAdjacentElement('afterend', ul);
for(let o of ocean){
    li = document.createElement('li');
      li.textContent = o;
      ul.insertAdjacentElement('beforeend', li);
}

let h1 = document.querySelector('h1');
h1.style.color = 'blue';
h1.style.fontSize = '10pt';

let h2s = document.querySelectorAll('h2');
for(let h2 of h2s){
    h2.style.backgroundColor = 'palegreen';
}

let ls = document.querySelectorAll('li');
for(let li of ls){
    li.classList.add('orangeUnderline');
}