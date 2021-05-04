//getelemtent
function $g(value) {
    //判斷是否為id selector
    if (value.includes('#')) {
        //回傳Element
        return document.querySelector(value);
    }
    //回傳NodeList集合
    var nodelist = document.querySelectorAll(value);
    return nodelist.length == 1 ? nodelist[0] :
        nodelist;
}
// export { $g, displayName, $title, $ex, $log };


//js沒有script不可直接使用
function getRandom(min, max) {
    return Math.floor(Math.random() * max + min);
}


//把方法寫在這裡給其他人使用
//create
function $c(element, text) {
    let el = document.createElement(element);
    if (text !== null && text !== undefined && text.length > 0) {
        el.innerText = text;
    }
    return el;
}






























































export { $g, getRandom, $c }