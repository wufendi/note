/**
 *Author: wufendi
 *Date:2019-05-14 09:56
 *Description:
 **/
import router from '../../router'
import template from './index.html'
import './style.css'

export default class {
  mount(container) {
    document.title = 'bar'
    container.innerHTML = template
    container.querySelector('.bar_gofoo').addEventListener('click', () => {
      router.go('/foo')
    })
  }
}
