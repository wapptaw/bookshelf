const Book = {};
Book.create = class {
    constructor(book) {
        for ( let message in book) {
            this[message] = book[message] || '书上没写这一项';
        } 
    }

    tbook(details = null) { // 创建book dom
        const tbook = document.createElement('div');
        if(details) {
            for(let v in details) {
                switch(v) {
                    case 'style': 
                        for(let i in details['style']) {
                            tbook['style'][i] = details['style'][i];
                        }
                        break;
                    default: 
                        console.log('需要添加');
                }
            }
        }
        tbook.classList.add(this.code);
        tbook.classList.add('book');
        const bookFrag = document.createDocumentFragment();
        ['b-top', 'b-down', 'b-front', 'b-behind', 'b-left', 'b-right'].forEach(function(val, index) {
            let surface = document.createElement('div');
            surface.classList.add(val);
            bookFrag.appendChild(surface);
        });
        tbook.appendChild(bookFrag);
        return tbook;
    }

}
Book.animation = {
    hover() {
        if(!this.classList.contains('hover')) {
            this.classList.add('hover');
        }
    },
    leave() {
        if(this.classList.contains('hover')) {
            this.classList.remove('hover');
        }
    },
    start(obj) {
        obj.classList.add('click');
    },
    back(obj) {
        obj.classList.remove('click');
        obj.classList.add('back');
    }
}

export default Book;