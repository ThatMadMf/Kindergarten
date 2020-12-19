import {ParsedImage} from "../common/ParsedImage";

export const CollectionPreview = ({name, photos}) => {
    const photosSlice = photos.length > 4 ? photos.slice(0, 5) : photos;

    const collectionStyle = {
        width: "100rem",
        display: "flex",
        flexDirection: "column",
        background: "rgba(0, 151, 19, 0.1)",
        border: "1px solid blue",
        margin: "auto",
    };

    return (
        <div style={collectionStyle}>
            <h2>{name}</h2>
            <div style={{display: "flex", flexDirection: "row"}}>
                {
                    photosSlice.map(p =>
                        <div style={{width: "20rem", height: "20rem" }} key={p._id}>
                            <ParsedImage img={p.img} resize={true}/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}