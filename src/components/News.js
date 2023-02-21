import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from '../../node_modules/react-infinite-scroll-component/dist/index';
// import InfiniteScroll from 'react-infinite-scroll-component';
import NewsItems from './NewsItems'
import Spinner from './Spinner';

const News =(props)=> {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  // document.title = `${this.capitalizeWord(props.category)} - Top Headlines`;

  const capitalizeWord = (string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const updatePage = async ()=>{
    // this.setState({loading: true});
    props.setProgress(10);
    console.log("Inside ", props.category);
    setTimeout(async () => {
      let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&category=business&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
      let data = await fetch(url);
      let parsedData = await data.json();

      setArticles(parsedData["articles"]);
      setLoading(true);
      setTotalResults(parsedData["totalResults"]);
      props.setProgress(100);
    }, 500);
  }

  useEffect(() => {
    (()=>{updatePage();})();
  }, []);
  
  // const handleNextPage = async ()=>{
  //   setPage(page+1);
  //   setLoading(true);
  //   updatePage();
  // }

  // const handlePrevPage = async ()=>{
  //   setPage(page-1);
  //   setLoading(true);
  //   updatePage();
  // }

  const fetchMoreData = ()=>{
    console.log('fetchMoreData');
    setLoading(true);
    setPage(page+1);

    setTimeout(async()=>{
      let url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&category=business&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}`;
      let data = await fetch(url);
      // setState({page: state.page+1});
      let parsedData = await data.json();
      setArticles(articles.concat(parsedData["articles"]));
      setLoading(false);
    }, 1000)
  }
  return (
    <div>
      <div className='container'>
        <div className='row mt-3' >
          {/* <div className='col-md-3 text-center'><button className='btn btn-lg btn-primary ' onClick={handlePrevPage} disabled={state.page <= 1}>Prev</button></div> */}
          <div className='col-lg-6 align-items-end text-center'><h1>News Highlights - {capitalizeWord(props.category)}</h1></div>
          {/* <div className='col-md-3 text-center'><button className='btn btn-lg btn-dark' onClick={handleNextPage} disabled={state.page+1 > Math.ceil(state.totalResults/10)}>Next</button></div> */}
        </div>
        {/* {loading && <Spinner/>} */}
        <div className='row'>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner/>}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
        {
        // !loading && 
        articles.map((article) => (
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

News.defaultProps = {
  country: 'us',
  pageSize: 10,
  category: "general",
  apiKey: '',
  setProgress: ()=>{}
}
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
  setProgress: PropTypes.func
}

export default News