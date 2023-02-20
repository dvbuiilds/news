import PropTypes from 'prop-types'
import React, { Component } from 'react'
import InfiniteScroll from '../../node_modules/react-infinite-scroll-component/dist/index';
// import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export class News extends Component {
  static defaultProps = {
    country: 'us',
    pageSize: 10,
    category: "general",

  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  capitalizeWord = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };

    document.title = `${this.capitalizeWord(this.props.category)} - Top Headlines`;
  }

  updatePage = async ()=>{
    // this.setState({loading: true});
    this.props.setProgress(10);
    console.log("Inside ", this.props.category);
    setTimeout(async () => {
      // 16a4416871d340c09dd177556e5b1554
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&category=business&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({articles: parsedData["articles"], loading: false, totalResults: parsedData["totalResults"]});
      this.props.setProgress(100);
    }, 500);
    
  }

  async componentDidMount(){
    // this.setState({loading: true});
    // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&category=business&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}`;
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({articles: this.state.articles.concat(parsedData["articles"]), loading: false, totalResults: parsedData["totalResults"]});
    this.updatePage();
  }

  handleNextPage = async ()=>{
    this.setState({page: this.state.page+1, loading: true});
    console.log("Page no: ", this.state.page);
    this.updatePage();
  }

  handlePrevPage = async ()=>{
    this.setState({page: this.state.page-1, loading: true});
    console.log("Page no: ", this.state.page);
    this.updatePage();
  }

  fetchMoreData = ()=>{
    console.log('fetchMoreData');
    (this.setState({loading: true, page: this.state.page+1}));
    setTimeout(async()=>{
      let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&category=business&apiKey=${this.props.apiKey}&pageSize=${this.props.pageSize}&page=${this.state.page}`;
      let data = await fetch(url);
      // this.setState({page: this.state.page+1});
      let parsedData = await data.json();
      this.setState({articles: this.state.articles.concat(parsedData["articles"]), loading: false});
    }, 1000)
  }

  render() {
    return (
      <div>
        <div className='container'>
          <div className='row mt-3' >
            {/* <div className='col-md-3 text-center'><button className='btn btn-lg btn-primary ' onClick={this.handlePrevPage} disabled={this.state.page <= 1}>Prev</button></div> */}
            <div className='col-lg-6 align-items-end text-center'><h1>News Highlights - {this.capitalizeWord(this.props.category)}</h1></div>
            {/* <div className='col-md-3 text-center'><button className='btn btn-lg btn-dark' onClick={this.handleNextPage} disabled={this.state.page+1 > Math.ceil(this.state.totalResults/10)}>Next</button></div> */}
          </div>
          {/* {this.state.loading && <Spinner/>} */}
          <div className='row'>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={<Spinner/>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
          {
          // !this.state.loading && 
          this.state.articles.map((article) => (
            <div className='col-md-4 d-flex align-items-stretch my-4' key={article.url} >
              <NewsItems title={article.title} description={article.description} imageUrl={article.urlToImage} newsUrl={article.url} publishedTime={article.publishedAt} authorName={article.author}/>
            </div>
          ))}
          </InfiniteScroll>
          </div>
        </div>
      </div>
    )
  }
}

export default News