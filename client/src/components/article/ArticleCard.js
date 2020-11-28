import React from 'react';
import {Card} from "antd";

export const ArticleCard = ({title, content, createdAt}) => (
    <div className={'card-wrapper'}>
        <Card title={title} bordered={true} style={{width: "75rem", margin: "auto", marginTop: "3rem"}}>
            <p>{content}</p>
            <p>{createdAt}</p>
        </Card>
    </div>
)

