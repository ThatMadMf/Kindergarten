import React from "react";
import {Card} from "antd";

export default function InfoView() {
    const isMobile = window.innerWidth < 500;

    return (
        <div className={'info-view'}>
            <Card
                title={'About us'}
                bordered={true}
                style={{width: isMobile ? '100%' : '50rem', margin: 'auto', marginTop: '3rem'}}
                cover={
                    <img
                        alt={"about"}
                        src={process.env.PUBLIC_URL + "about.gif"}
                    />
                }
            >
                The Kindergartners are the youngest children at South Park Elementary.
                They are voiced by actual young children.
            </Card>
        </div>
    )
}