const React = require('react')
const { Place } = require('../../models')
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
        <div className='border border-primary rounded p-3'>
          <h2>Comments</h2>
          {comments}
          <div className="form-container border border-primary rounded p-3 m-3">
            <h3>Add Your Own</h3>
            <form method='POST' action={`/places/${data.place.id}/rant`}>
              <div className="form-group">
                <label htmlFor="author">Author Name</label>
                <input type="text" className="form-control" name='author' id='author'/>
              </div>
              <div className="form-group">
                <label htmlFor="content">Comment</label>
                <textarea name="content" id="content" className='form-control'></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="stars">Rating</label>
                <input type="number" step={0.5} id='stars' name='stars' className='form-control'/>
              </div>
              <div className="form-group">
                <label htmlFor="rant">Rant?</label>
                <br />
                <input type="checkbox" defaultChecked name='rant' id='rant'/>
              </div>
              <input className='btn btn-primary' type="submit" value={"Add Comment"}/>
            </form>
          </div>
        </div>
      </main>

    </Def>
    )
}

module.exports = show