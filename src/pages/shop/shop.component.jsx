import React from 'react';
import { withRouter } from 'react-router-dom';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/collection-preview/collection-preview.component.jsx';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections:SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        const {params} = this.props.match;
        return (
            <div className='shop-page'>
            {
                collections
                    .filter((el)=>(params && params.collection ? (params.collection === el.routeName) : el))
                    .map((collection)=>(
                    <CollectionPreview key={collection.id} {...collection}/>
                ))
            }
            </div>
        )
    }
}

export default withRouter(ShopPage);