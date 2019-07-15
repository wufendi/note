/**
 *Author: wufendi
 *Date:2019-04-24 19:18
 *Description:
 **/
import './css/reset.css';
import './css/index.css';
import {common} from './js/common';
import $ from 'jquery';
import echarts from 'echarts';
import vue from 'vue';
import vuex from 'vuex';
import elementui from 'element-ui';

console.log('index');
console.log(vue);
console.log(vuex);
console.log(elementui);
common();
console.log(echarts);
let $ul = $('ul');
const ul_data = [
    'test01',
    'test02',
    'test03',
    'test04',
    'test05',
    'test06',
    'test07'
];
let template = '';
ul_data.forEach(v => {
    template += `<li>${v}<span class="delete">delete</span></li>`
});
$ul.html(template);
$('ul .delete').on('click',function (e) {
    debugger;
    let $li = $(this).parent('li');
    $li.remove();
});
if(PRODUCTION) {
    console.log(PRODUCTION)
}
