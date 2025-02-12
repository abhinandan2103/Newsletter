import React, { Component } from 'react'

export class NewsItem extends Component {
  
  render() {
    let{title, description, imageUrl,newsUrl,author,date,source} = this.props
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
       
        <div className="card-body">
          <div style={{display: 'flex',
    justifyContent: 'flex-end',
    position: 'absolute',
    right:'0'}}>
          <span class=" badge rounded-pill bg-danger" >
    {source}
  </span></div>
  <img src={imageUrl} className="card-img-top" alt="..."/>
            <h5 className="card-title">{title}...</h5>
  
            <p className="card-text">{description}</p>
            <p className="card-text">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
        </div>
        </div>
        
        
      </div>
    )
  }
}

export default NewsItem
