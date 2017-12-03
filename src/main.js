import './style/style.scss';
import Book from './js/Obeject-book.js';
import {booksEle, aBook} from './js/createBook.js'; // 书籍集合对象
import {animationEnd} from './js/tool.js';

let len = aBook.length;
var oBookshelf = document.getElementById('bookshelf');
if(len > 3) {
    const newEle = document.createDocumentFragment();
    for(let i = 3; i < len; i ++) {
        let floorEle = document.createElement('div');
        floorEle.className = `floor${i} floor`;
        ['top', 'right', 'down', 'left', 'behind'].forEach((val) => {
            let surface = document.createElement('div');
            surface.className = val;
            floorEle.appendChild(surface);
        });
        newEle.appendChild(floorEle);
    }
    oBookshelf.appendChild(newEle);
} // 增加floor节点

var oBooks = document.getElementById('books');
oBooks.appendChild(booksEle); // 把书籍节点放入books节点

var floors = oBookshelf.querySelectorAll('.floor');
let floorsLen = floors.length;
let noSelection = Math.floor(floorsLen / 2);
if(floorsLen % 2 === 0) {
    for(let v in floors) {
        if(v < noSelection - 1) {
            floors[v].querySelector('.down').classList.add('removeBg');
        } else if(v > noSelection) {
            floors[v].querySelector('.top').classList.add('removeBg');
        }
        if(v >= noSelection) {
            floors[v].style.zIndex = floorsLen - v;
        }
    }
}else {
    for(let v in floors) {
        if(v < noSelection) {
            floors[v].querySelector('.down').classList.add('removeBg');
        } else if(v > noSelection) {
            floors[v].querySelector('.top').classList.add('removeBg');
        }
        if(v >= noSelection) {
            floors[v].style.zIndex = floorsLen - v;
        }
    }
} // 修正css渲染双面导致的预期之外的效果

window.onload = function() {
    let aBooks = oBooks.querySelectorAll('.book');

    for(let v = 0, len = aBooks.length; v < len; v ++) {
        aBooks[v].addEventListener('click', function() {
            for(let i = 0; i < len; i ++){
                if(aBooks[i].classList.contains('click') && aBooks[i] !==this){
                    Book.animation.back(aBooks[i]);
                }
            }
            if(this.classList.contains('click')) {
                Book.animation.back.call(this, this); // call用来绑定this
                this.addEventListener('mouseover', Book.animation.hover);
            }else {
                Book.animation.start.call(this, this);
                this.removeEventListener('mouseover', Book.animation.hover);
            }
        });  
        aBooks[v].addEventListener(animationEnd(), function() {
            if(this.classList.contains('back')) {
                this.classList.remove('back');
            }
        }) 
    }
}



