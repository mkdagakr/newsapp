import React, { useState, useEffect } from 'react'
import CardGrid3 from './CardGrid3'

// import CardGrid6 from './CardGrid6'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from './Spinner';

const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0)


    const capitalized = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const updateNews = async () => {

        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        let data = await fetch(url);
        props.setProgress(40);
        let parseData = await data.json();
        props.setProgress(70);
        setArticles(parseData.articles);
        setTotalResults(parseData.totalResults);
        setLoading(false);

        props.setProgress(100);

    }

    useEffect(() => {
        document.title = `NewsApp - ${capitalized(props.category)}`;
        updateNews();
    }, [])

    // const handlePreClick = async () => {

    //     setPage(page - 1);
    //     updateNews();
    // }

    // const handleNextClick = async () => {

    //     setPage(page + 1);
    //     updateNews();
    // }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parseData = await data.json();
        setArticles(articles.concat(parseData.articles));

    }



    return (
        <>
            <div className='container my-3'>
                <h1 style={{ marginTop: '90px' }}>NewsApp - Top {capitalized(props.category)} Headlines </h1>
                <hr />
            </div>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length <= totalResults}
                loader={<Spinner />}
            >
                <div className='container my-3'>
                    <div className="row my-3">
                        {articles.map((element, index) => {
                            return (<div className="col-md-3" key={index}>
                                <CardGrid3 title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} />
                            </div>)
                        })}

                    </div>
                </div>
            </InfiniteScroll>

            {/* 
                <div className="conatiner d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePreClick}>&larr; Previous</button>
                    <button disabled={this.state.page >= Math.ceil(this.state.totalResults / props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
        </>
    )

}

News.defaultProps = {
    pageSize: 12,
    country: 'in',
    category: 'general'
}

News.propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}

export default News
