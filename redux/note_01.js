/**
 *Author: wufendi
 *Date:2019-04-16 15:11
 *Description:
 **/
/***
 * 概念：
 * 1.store 保存数据的地方
 * 2.state 某个时间点的数据 就是store生成的快照
 * 3.action view发出通知函数，表示state要发生变化
 * 4.action creator 生成action的函数
 * 5.store.dispatch view发出action的唯一方法
 * 6.reducer store收到action，必须给出一个新的state，这样view才会发生变化，这种state计算过程
 * 7.纯函数
 * 8.store.subscribe 设置监听函数，一旦state发生改变，就会自动执行这个函数
 * **/
/**
 * 流程：
 *              getState
 *      Store=============>state
 *      ||
 *      ||dispatch
 *      ||
 *      View
 *
 **/

function createStore(reducer, initState){
    var state = initState || {};
    var listeners = [];
    var getState = () => state;
    var dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener())
    };
    var subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    }
    dispatch({});
    return {
        getState,
        dispatch,
        subscribe
    };
}

var reducer1 = function (state, action) {
    const {type, data} = action;
    switch (type) {
        case 'ADD_COUNT':
            return {...state, count: state.count + data};
        case 'SUBTRACT_COUNT':
            return {...state, count: state.count - data};
        case 'SET_LOADING_STATUS':
            return {...state, loadingStatus: data};
        default:
            return state;
    };
}
var addCountActionCreator = function (data) {
    return {
        type: 'ADD_COUNT',
        data
    };
};
var subtractCountActionCreator = function (data) {
    return {
        type: 'SUBTRACT_COUNT',
        data
    };
}
var setLoadingStatusActionCreator = function (data) {
    return {
        type: 'SET_LOADING_STATUS',
        data
    };
}
var store1 = createStore(reducer1,{count:0,loadingStatus: true});
var state1 = store1.getState();

console.log(state1);
store1.dispatch(addCountActionCreator(2));
store1.dispatch(addCountActionCreator(6));
store1.dispatch(addCountActionCreator(8));
store1.dispatch(addCountActionCreator(21));
store1.dispatch(subtractCountActionCreator(2));
store1.dispatch(setLoadingStatusActionCreator(false));
var state2 = store1.getState();
console.log(state2);
