const React = require('react')

function Def(html) {
  return (
    <html>
      <head>
        <title>Title</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"/>
        <link rel="stylesheet" href="/styling/main.css" />
      </head>
      <body>
        <nav>
          <a href="/"><div id="home">Home</div></a>
          <a href="/places"><div id="places">Places</div></a>
          <a href="/places/new"><div id="add">Add Place</div></a>
        </nav>
        {html.children}
        <footer>
          <p>Contact me:</p>
          <div className="img-container">
            <a href="https://github.com/cwitmer34"><img src="/images/github.png" alt="My github link" id='github'/></a>
            <a href="https://twitter.com/cahnourf"><img src="/images/twitter.png" alt="My twitter link" id='twitter'/></a>
            <a href="https://www.linkedin.com/in/connor-witmer-b649ab203/"><img src="/images/linkedin.png" alt="My linkedin link" id='linkedin' /></a>
            <a href="https://www.instagram.com/connor.witmer/"><img src="/images/instagram.png" alt="My instagram link" id='instagram'/></a>
          </div>
        </footer>
      </body>
    </html>
  )
}

module.exports = Def