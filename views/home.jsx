const React = require('react')
const Def = require('./default')

function home() {
  return (
    <Def>
      <head>
        <link rel="stylesheet" href="/styling/home.css" />
      </head>
      <main className='content'>
        <h1>REST-Rant</h1>
        <p>An application where both yourself and like-minded individuals can share their stories of the good, bad, and the ugly experiences with the restaurant industry.</p>
        <div>

        </div>
        <a href="./places">
          <button className="btn-primary">View Places</button>
        </a>
      </main>
      <div>
        <img src="/images/home.jpg" alt="Yummy food"  className="home-pic"/>
        <div className="attribute">
            Photo by <a href="https://unsplash.com/@ellaolsson?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ella Olsson</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        </div>
      </div>
    </Def>
  )
}

module.exports = home