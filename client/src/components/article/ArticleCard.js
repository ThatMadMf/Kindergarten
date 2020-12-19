import React from 'react';
import moment from "moment";
import {ParsedImage} from "../common/ParsedImage";

export const ArticleCard = ({title, content, createdAt, author, img = null}) => {
    const articleInfo = `${moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')} by ${author ? author.username : ''}`;

    const cardStyle = {
        width: "60rem",
        height: "60rem",
        margin: "2rem auto",
        backgroundColor: "white"
    }

    const cardImageWrapper = {
        width: "inherit",
        height: "50rem",
        overflow: "hidden"
    }

    return (
        <div className={'article-card'} style={cardStyle}>
            <h2 style={{paddingBottom: "1rem"}}>{title}</h2>
            <div className={'article-image-wrapper'} style={cardImageWrapper}>
                <ParsedImage img={img}/>
            </div>
            <p style={{marginTop: "2rem"}}>{content}</p>
            <i style={{marginRight: "0"}}>{articleInfo}</i>
        </div>
    )
}

