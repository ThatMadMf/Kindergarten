import React from 'react';
import {Card} from "antd";
import moment from "moment";

export const ArticleCard = ({title, content, createdAt, author, img = null}) => {
    const articleInfo = `${moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')} by ${author ? author.username : ''}`;
    const cover = img ?
        <img
            alt={"about"}
            src={`data:image/png;base64,${Buffer.from(img.data).toString('base64')}`}
            width="75rem"
            height="750rem"
        />
        : '';
    return (
        <div className={'card-wrapper'}>
            <Card
                title={title}
                bordered={true}
                style={{
                    width: "75rem",
                    margin: "auto",
                    marginTop: "3rem"
                }}
                cover={cover}
            >
                <p>{content}</p>
                <p>{articleInfo} </p>
            </Card>
        </div>
    )
}

