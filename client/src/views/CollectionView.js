import {ParsedImage} from "../components/common/ParsedImage";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchCollection} from "../store/gallery/actions";
import {useEffect} from "react";

export const CollectionView = () => {
    const collection = useSelector(state => state.collectionModule.collection);
    const dispatch = useDispatch();

    const {collectionId} = useParams();


    useEffect(() => {
        dispatch(fetchCollection(collectionId));
    }, [dispatch, collectionId])

    const collectionStyle = {
        width: "100rem",
        display: "flex",
        flexDirection: "column",
        background: "rgba(0, 151, 19, 0.1)",
        border: "1px solid blue",
        margin: "2rem auto",

    };

    if (!collection) {
        return (
            <p>Can't load data</p>
        )
    } else {
        return (
            <div style={collectionStyle}>
                <h2>{collection.name}</h2>
                <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", width: "inherit"}}>
                    {
                        collection.photos.map(p =>
                            <div style={{width: "20rem", height: "20rem"}} key={p._id}>
                                <ParsedImage img={p.img} resize={true}/>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}