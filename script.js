'use strict';

const berry = document.getElementById("berry");
console.log(berry);
console.log(`I found the berry ${berry.innerHTML}`);
berry.style.background = 'lightcoral';

const orange = document.querySelector('li[data-foodtype="squishy"]');
console.log(orange);
console.log(`I found the fruit: ${orange.innerHTML}`);
orange.style.background = 'orange';

const listItems = document.getElementsByTagName('li');
console.log(listItems);
console.log("for of loop:");
for (const item of listItems) {
    console.log(item.innerHTML);
}

const pear = document.querySelector('li:nth-child(4)');
pear.style.background = 'lightgreen';

const allNodes = document.querySelectorAll('li');
console.log(allNodes);
console.log("foreach loop:");
allNodes.forEach(item => {
    console.log(item.innerHTML);
    item.style.listStyle = 'none';
    item.style.border = '1px solid  black';
    item.style.width = '100px';
});