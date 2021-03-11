import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCollectionList} from "../store/gallery/actions";
import {CollectionPreview} from "../components/collection/CollectionPreview";

export default function GalleryView() {

    const collections = useSelector(state => state.collectionModule.collectionList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionList());
    }, [])

    const collectionListStyle = {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        height: '60rem',
    }

    if (collections === 0) {
        return <div>Can't find any records. Try again later.</div>
    } else {
        return (
            <div className='collection-list' style={collectionListStyle}>
                {
                    collections.map(c => <CollectionPreview {...c} key={c._id}/>)
                }
            </div>
        )
    }
}