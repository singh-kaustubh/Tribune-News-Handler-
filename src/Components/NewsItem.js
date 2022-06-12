import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, content, urlToImage, newsUrl, source, update, author } = this.props;
        let ele = new Date(update);
        let newdate = `${ele.getDate()}/${ele.getMonth() + 1}/${ele.getFullYear()}`;
        return (
            <div className="card text-center my-2">
                <img src={urlToImage} className="card-img-top" alt='...' style={{ maxHeight: "35vh", minHeight: "35vh" }} />
                <span className="badge text bg-dark" style={{ borderRadius: '0px', zIndex: '1' }}>
                    {source}
                </span>
                <div className="card-body" >
                    <h5 className="card-title" style={{
                        maxWidth: '100%',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>{title}</h5>
                    <p className="card-text" style={{
                        maxWidth: '100%',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>{content}</p>
                    <div className="card-footer d-flex justify-content-between my-0">
                        <small className="text-muted">{newdate} by {author} </small>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>

        )
    }
}

export default NewsItem