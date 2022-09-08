const React = require('react')
const Def = require('../default')

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )

  if (data.place.comments.length) {
    comments = data.place.comments.map(c=>{
      return (
        <div className="border">
          <h2 className="rant">
            {c.rant ? 'Rant' : 'Rave'}
          </h2>
          <h4>
            {c.content}
          </h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>
            Rating: {c.stars}
          </h4>
        </div>
      )
    })
  }

  return (
    <Def>
      <main>
        <div className="location">
          <h1 className='name'>{data.place.name}</h1>
          <img src={data.place.image} alt="Cat Cafe Pic" width={'100%'}/>
          <h3>Located in {data.place.city}, {data.place.state}</h3>
          <div className="info">
            <div>
              <h2>Rating</h2>
              <p>Not Rated</p>
            </div>
            <div>
              <h2>Description</h2>
              <h3>{data.place.showEstablished()}</h3>
              <h4>Serving {data.place.cuisines}</h4>
              <div className="modify-page">
                <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                  Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger">
                    Delete
                  </button>
                </form> 

              </div>
            </div>
          </div>
        </div>
        <div>
          <h2>Comments</h2>
          {comments}
        </div>
      </main>

    </Def>
    )
}

module.exports = show