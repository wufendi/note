/**
 *Author: wufendi
 *Date:2019-05-14 09:56
 *Description:
 **/
import route from '../../router'
import template from './index.html'
import './style.css'

export default class {
  mount(container) {
    document.title = 'foo'
    container.innerHTML = template
    container.querySelector('.foo_gobar').addEventListener('click', () => {
      route.go('/bar')
    })
  }
}
