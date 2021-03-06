import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchArticleList} from "../store/articles/actions";
import {ArticleCard} from "../components/article/ArticleCard";

export default function BlogView() {

    const articles = useSelector(state => state.articleModule.articleList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchArticleList());
    }, [dispatch])

    const blogStyle = {
        display: "flex",
        flexDirection: "column",
        overflow: "auto",
        height: "60rem"
    }

    if (articles === 0) {
        return <div>Can't find any records. Try again later.</div>
    } else {
        return (
            <div className='article-list' style={blogStyle}>
                {
                        articles.map(a => <ArticleCard {...a} key={a._id}/>)
                }
            </div>
        )
    }
}
