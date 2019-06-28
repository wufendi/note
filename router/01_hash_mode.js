/**
 *Author: wufendi
 *Date:2019-04-18 17:43
 *Description:
 **/
var router_view = null;
window.addEventListener('DOMContentLoaded',function () {
    router_view = document.getElementById('main');
    onHashChange();
});

window.addEventListener('hashchange',onHashChange);

function onHashChange() {
    var current_hash = window.location.hash;
    var content = '';
    switch (current_hash) {
        case '#first' : content = 'first component';
            break;
        case '#second': content = 'second component';
            break;
        case '#third': content = 'third component';
            break;
        default: content = '默认页面。。。。。';
    }
    router_view.innerHTML = content;
}
