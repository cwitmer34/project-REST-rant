const React = require('react')
const Def = require('../default')

function edit_form(data) {
  return(
    <Def>
      <main>
        <h1>Edit Location</h1>
        <form method='POST' action={`/places/${data.place.id}?_method=PUT`}>
          <div className='form-group'>
            <label htmlFor="name">Location Name</label>
            <input className='form-control' type="text" name='name' id='name' value={data.place.name} required/>
          </div>
          <div className='form-group'>
            <label htmlFor="image">Image of Location</label>
            <input className='form-control' type="url" name='image' id='image' value={data.place.image} required/>
          </div>
          <div className='form-group'>
            <label htmlFor="cuisines">Cuisines</label>
            <input className='form-control' type="text" name='cuisines' id='cuisines' value={data.place.cuisines} required />
          </div>
          <div className='form-group'>
            <label htmlFor="city">City of Location</label>
            <input className='form-control' type="text" name='city' id='city' value={data.place.city} required />
          </div>
          <div className='form-group'>
            <label htmlFor="state">State of Location</label>
            <input className='form-control' type="text" name='state' id='state' value={data.place.state} required/>
          </div>
          <input className='btn btn-primary' type="submit" value={"Edit Page"}/>
        </form>
      </main>
    </Def>
  )
}

module.exports = edit_form