/**
 *Author: wufendi
 *Date:2019-06-26 17:09
 *Description:
 **/
var router_view = null;
window.addEventListener('DOMContentLoaded',function () {
    router_view = document.getElementById('main');
    onPopState();
    var all_a_element = document.querySelectorAll('a[href]')
    all_a_element.forEach(v => {
        v.addEventListener('click',function (e) {
            e.preventDefault();
            window.history.pushState(null, v.textContent, v.getAttribute('href'));
            onPopState();
        })
    })
});

window.addEventListener('popstate',onPopState);

function onPopState() {
    var current_pathname = window.location.pathname;
    var content = '';
    switch (current_pathname) {
        case '/first.html' : content = 'first component';
            break;
        case '/second.html': content = 'second component';
            break;
        case '/third.html': content = 'third component';
            break;
        default: content = '默认页面。。。。。';
    }
    router_view.innerHTML = content;
}
