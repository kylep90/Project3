import React from 'react'

function ArtistSearch (props)
{
    return(
    <section className="pt-5 pb-5 mt-0 align-items-center d-flex bg-light" style={{minHeight: "60vh"}}>
<div className="container " >
  <div className="row mt-auto">
    <div className="col-lg-8 col-sm-12 text-center mx-auto">
      <h1 className="display-4 mb-3">Artist Directory</h1>
      <p className="lead mb-5">Search artist by name or filter by type of artist.</p>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-9 col-md-8 col-sm-12 mx-auto text-center">
      <form className="form-noborder">
        <div className="form-row mb-5">
          <div className="col-lg-6 col-sm-12 form-group">
            <input className="form-control form-control-lg" onChange={(event)=>props.setSearchValue(event.target.value)} placeholder="Search keyword" type="text"/>
          </div>
          <div className="col-lg-3 col-sm-12 form-group">
            <select className="custom-select-lg custom-select  ">
              <option> Choose category </option>
              <option> Visual Artist</option>
              <option> Singer </option>
              <option> Dancer </option>
              <option> Comedian </option>
              <option> Tech </option>
              <option> Actor </option>
            </select>
          </div>
          <div className="col-lg-3 col-sm-12 form-group">
            <button className="btn btn-primary btn-block btn-lg" type="submit">Search</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
</section>
)
}

export default ArtistSearch