import Book from './Obeject-book.js';
import books from './books'; // 书籍信息
import {averageSplit} from './tool.js';

let len = books.length;
let col = 100 / 50; // 每行book的数量
let aBook = averageSplit(books, col);
let row = aBook.length;
const booksEle = document.createDocumentFragment();
let details = {};
for(let i = 0; i < row; i ++) {
    aBook[i].forEach((val, index) => {
        details = {
            style: {
                left: `${index * 5}%`,
                top: `${i * 2.2}rem`
            }
        }
        let frag = new Book.create(val).tbook(details);
        frag.addEventListener('mouseover', Book.animation.hover);
        frag.addEventListener('mouseout', Book.animation.leave);
        booksEle.appendChild(frag);
    })
}

export {booksEle, aBook};


