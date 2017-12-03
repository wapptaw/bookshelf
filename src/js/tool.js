let averageSplit = function (arr, n) { // 分割数组
    let len = arr.length;
    let partions = Math.ceil(len / n);
    const split = [];
    for(let i = 0; i < partions; i ++) {
        split[i] = arr.slice(i * n, (i + 1) * n)
    }
    return split;
}

let animationEnd = function() { // animationend兼容
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

export {averageSplit, animationEnd};