/*
  bind() & Defining "this"

*/

class App {
  constructor() {
    this.serverName = 'localhost'

    // in this case >> this is the 'button'
    document
      .querySelector('button')
      .addEventListener('click', this.getServerName)

    // "this" in this case is attached to 'button' >> use bind() will make this attach to the instance that is created by App class
    document
      .querySelector('button')
      .addEventListener('click', this.getServerName.bind(this))
  }

  getServerName() {
    console.log(this)
  }
}

const app = new App()
console.log(app)
