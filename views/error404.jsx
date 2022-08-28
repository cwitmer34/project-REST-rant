const React = require('react')
const Def = require('./default')

function error404() {
  return (
    <Def>
      <a href="/places">
      <main>
        <h1>404: PAGE NOT FOUND</h1>
        <p>Oops, sorry, we can't find this page!</p>
        <img src="/images/404.svg" alt="404: Page Not Found" className='error404-pic'/>
      </main>
      </a>
    </Def>
  )
}

module.exports = error404