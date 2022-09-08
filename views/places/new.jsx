const React = require('react')
const Def = require('../default')

function new_form(data) {
  let message = ''
  if(data.message) {
    message = (
      <h4 className="alert-danger">
        {data.message}
      </h4>
    )
  }
  return(
    <Def>
      <main>
        <h1>New Location</h1>
        {message}
        <form action="/places" method='POST'>
          <div className='form-group'>
            <label htmlFor="name">Location Name</label>
            <input className='form-control' type="text" name='name' id='name' required/>
          </div>
          <div className='form-group'>
            <label htmlFor="image">Image of Location</label>
            <input className='form-control' type="url" name='image' id='image'/>
          </div>
          <div className='form-group'>
            <label htmlFor="cuisines">Cuisines</label>
            <input className='form-control' type="text" name='cuisines' id='cuisines' />
          </div>
          <div className='form-group'>
            <label htmlFor="city">City of Location</label>
            <input className='form-control' type="text" name='city' id='city' />
          </div>
          <div className='form-group'>
            <label htmlFor="state">State of Location</label>
            <input className='form-control' type="text" name='state' id='state' />
          </div>
          <div className="form-group">
            <label htmlFor="founded">Founded Year</label>
            <input className="form-control" id="founded" name="founded" placeholder={new Date().getFullYear()}required/>
          </div>
          <input className='btn btn-primary' type="submit" value={"Add Place"}/>
        </form>
      </main>
    </Def>
  )
}

module.exports = new_form