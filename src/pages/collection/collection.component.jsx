import React, {useContext} from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';
import CollectionsContext from '../../contexts/collection.context';


const CollectionPage = ({match}) => {
    const collections = useContext(CollectionsContext);
    const collection = collections[match.params.collectionId];
    const { title, items } = collection;
    return (
        <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
          {items.map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    )
}

export default CollectionPage;

/*
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);
*/