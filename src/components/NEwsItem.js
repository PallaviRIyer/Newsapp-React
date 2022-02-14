import { getByTitle } from '@testing-library/react'
import React, { Component } from 'react'

export class NEwsItem extends Component {
   
    render() {
        let {title,description,imgurl,newsUrl,author,date}=this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={!imgurl?"https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg" :imgurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-muted">By {!author? "Unknown" : author} on {new Date(date).toGMTString()} </small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NEwsItem