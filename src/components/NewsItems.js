// import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class NewsItems extends Component {
  // static propTypes = {}

  render() {
    let {title, description, imageUrl, newsUrl, publishedTime, authorName} = this.props;
    const timePassed = (time)=>{
      // console.log('time', time)
      let date = new Date(time);
      let nowDate = Date.now();
      // @ts-ignore
      let timeDiff = nowDate - date;
      let minutes = timeDiff/(1000*60);
      let hours = minutes/60;
      let days = Math.floor(hours/24);

      if(days < 1){
        if(hours < 1){
          if(minutes < 1){
            return "Just now";
          }
          return Math.floor(minutes)===1? `${Math.floor(minutes)} minute ago`: `${Math.floor(minutes)} minutes ago`;
        }
        return Math.floor(hours)===1? `${Math.floor(hours)} hour ago`: `${Math.floor(hours)} hours ago`;
      }
      return Math.floor(days)===1? `${Math.floor(days)} day ago`: `${Math.floor(days)} days ago`;;
    }

    return (
      <div>
        <div className="card h-100" style={{width: "18rem"}}>
          <img src={imageUrl} style={{height: "180px"}} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <div className="text">by {authorName?authorName:"Anonymous"}</div>
            <div className="text-muted">{timePassed(publishedTime)}</div>
            <p className="card-text">{description}</p>
          </div>
          <div className='card-footer'>
            <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Read More &rarr;</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems