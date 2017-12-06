var averageSplit = function (arr, n) { // 分割数组
    let len = arr.length;
    let partions = Math.ceil(len / n);
    const split = [];
    for(let i = 0; i < partions; i ++) {
        split[i] = arr.slice(i * n, (i + 1) * n)
    }
    return split;
}

var firstUpperCase = function(str) { // 首字母转换为大写
    return str.replace(/^[a-z]/, s => {
        return s.toUpperCase();
    })
}

var animationEnd = function() { // animationend兼容
    let div = document.createElement('div');
    let style = div.style;
    let prefix = ['webkit', 'o', 'ms', 'moz'];
    if('animation' in style) {
        return 'animationend';
    } else {
        for(let i = 0, len = prefix.length; i < len; i ++) {
            if(`${prefix[i]}Animation` in style) {
                return `${prefix[i]}AnimationEnd`;
            } else {
                throw new Error('不支持animationEnd事件');
            }
        }
    }
}

var prefixer = function(attr) { // 为css3属性添加前缀
    let div = document.createElement('div');
    let style = div.style;
    let prefix = ['webkit', 'o', 'ms', 'moz'];
    if(attr in style) {
        return attr;
    } else {
        for(let i = 0, len = prefix.length; i < len; i ++) {
            if(`${prefix[i]}${firstUpperCase(attr)}` in style) {
                return `${prefix[i]}${firstUpperCase(attr)}`;
            }else {
                throw new Error('不支持此属性');
            }
        }
    }
}

var createArc = function(r, deg, faceNum, query = null) { // 创建弧形
    let arc = document.createElement('div');
    arc.className = 'arc';
    arc.style.position = 'relative';
    arc.style[prefixer('transformStyle')] = 'preserve-3d';
    let everyDeg = deg / faceNum;
    let transRadian = everyDeg / 2 * Math.PI / 180 // 转换为弧度
    let width = 2 * Math.sin(transRadian) * r;
    let range = Math.cos(transRadian) * r;
    let surface = [];
    for(let i = 0; i < faceNum; i ++) {
        surface[i] = document.createElement('div');
        surface[i].style.position = 'absolute';
        surface[i].style[prefixer('transform')] = `rotateY(${everyDeg * i}deg) translateZ(${range}px)`;
        surface[i].style.width = `${width}px`;
        if(query) {
            for(let v in query) {
                surface[i]['style'][v] = query[v];
            }
        }
        arc.appendChild(surface[i]);
    }
    return arc;
}

export {averageSplit, animationEnd, createArc, firstUpperCase};