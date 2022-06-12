import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';
import Footer from './Footer';
export class News extends Component {
    articles = [];
    constructor(props) {
        super(props);
        this.state = {
            articles: this.articles,
            page: 1,
            loading: false,
            totalResults: 0
        }
        document.title = `${this.capitalizeFirstLetter(this.props.category)} - Tribune`;
    }
    capitalizeFirstLetter = (string) => {
        return (string.charAt(0).toUpperCase() + string.slice(1));
    }

    static defaultProps = {
        country: 'in',
        pageSize: "15",
        category: 'general',
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.string,
        category: PropTypes.string,
    }

    async componentDidMount() {
        this.props.setProgress(0);
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let res;
        let data;
        try {
            res = await fetch(url);
            this.props.setProgress(10);
            data = await res.json();
            this.props.setProgress(50);
            this.setState({
                articles: data.articles,
                totalResults: data.totalResults
            });
        }
        catch (e) {
            console.log("Too many requests or API down!");
        }
        this.props.setProgress(100);
    }
    fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        await this.setState({
            page: this.state.page + 1
        });
        try {
            let res = await fetch(url);
            let temp = await res.json();
            await this.setState({
                articles: this.state.articles.concat(temp.articles)
            });
        }
        catch (e) {
            console.log("something is not working");
        }
    }

    render() {
        return (
            <>
                <div className='container' style={{ borderColor: "black", borderStyle: "double", borderRadius: "10px", marginTop: "10px", padding: "5px" }}>
                    <h1 className='my-1 text-center display-1' style={{
                        fontFamily: "'Lobster', 'cursive','Raleway', 'sans-serif'"
                    }}>Tribune - Top {this.capitalizeFirstLetter(this.props.category)} Headlines!</h1>
                </div>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                    endMessage={<Footer />}
                    style={{
                        overflow: "hidden"
                    }}
                >
                    <div className='container'>
                        <div className='row my-4'>
                            {this.state.articles.map((element, index) => {
                                return <div className='col-md-4 my-2' key={index}>
                                    <NewsItem title={element.title ? element.title : ""} content={element.content ? element.content : (element.description ? element.description : "")} urlToImage={element.urlToImage ? element.urlToImage : "https://thumbs.dreamstime.com/b/news-newspapers-folded-stacked-word-wooden-block-puzzle-dice-concept-newspaper-media-press-release-42301371.jpg"} newsUrl={element.url} source={element.source.name} update={element.publishedAt} author={element.author ? element.author : "Anonymous"} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )
    }
}

export default News