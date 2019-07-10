/**
 *Author: wufendi
 *Date:2019-05-14 09:39
 *Description:
 **/
import foo from './views/foo'
import bar from './views/bar'
const routes = {
  '/foo': foo,
  '/bar': bar
}

class Router {
  start() {
    window.addEventListener('popstate', () => {
      this.load(location.pathname)
    })
    this.load(location.pathname)
  }
  go(path) {
    history.pushState({}, '', path)
    this.load(path)
  }
  async load(path) {
    if (path === '/') path = '/foo'
    const View = (await routes[path]()).default
    const view = new View()
    view.mount(document.body)
  }
}

export default new Router()
