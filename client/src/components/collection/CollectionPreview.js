import {ParsedImage} from "../common/ParsedImage";
import {RightOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";

export const CollectionPreview = ({name, photos, _id}) => {

    const photosSlice = photos.length > 4 ? photos.slice(0, 5) : photos;

    const collectionStyle = {
        width: "100rem",
        display: "flex",
        flexDirection: "column",
        background: "rgba(0, 151, 19, 0.1)",
        border: "1px solid blue",
        margin: "2rem auto",
    };

    return (
        <div style={collectionStyle}>
            <h2>{name}</h2>
            <div style={{display: "flex", flexDirection: "row"}}>
                {
                    photosSlice.map(p =>
                        <div style={{width: "20rem", height: "20rem"}} key={p._id}>
                            <ParsedImage img={p.img} resize={true}/>
                        </div>
                    )
                }
                <Link to={`/collections/${_id}`}>
                    <RightOutlined
                        style={{position: "relative", fontSize: "64px", color: "blue", margin: "auto"}}
                    />
                </Link>
            </div>
        </div>
    )
}