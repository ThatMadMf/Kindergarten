import React from "react";

export const ParsedImage = ({img}, resize) => {

    console.log(img.data);

    let style = {
        margin: "-100% -100%",
    }
    if (resize) {
        style = {
            maxWidth: "100%",
            maxHeight: "100%"
        }
    }

    if (typeof img.data === 'string') {
        return <img
            alt={"Could not load image"}
            src={`data:image;base64,${img.data}`}
            style={style}
        />
    } else {
        return <img
            alt={"Could not load image"}
            src={`data:image;base64,${Buffer.from(img.data).toString('base64')}`}
            style={style}
        />
    }
}