import React from 'react';
import {Card} from "antd";
import moment from "moment";

export const ArticleCard = ({title, content, createdAt, author}) => {
    const articleInfo = `${moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')} by ${author ? author.username : ''}`;
    return (
        <div className={'card-wrapper'}>
            <Card title={title} bordered={true} style={{width: "75rem", margin: "auto", marginTop: "3rem"}}>
                <p>{content}</p>
                <p>{articleInfo} </p>
            </Card>
        </div>
    )
}

