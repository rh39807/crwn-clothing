import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component  {
    state = {
        loading: true
    }

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        //
        // fetch('https://firestore.googleapis.com/v1/projects/crwn-db-51769/databases/(default)/documents/collections')
        // .then(response => response.json()
        // .then(collections => console.log(response)))

        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({ loading: false});
        })
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        console.log(loading)
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} render={props => (<CollectionsOverviewWithSpinner isLoading={loading} {...props}/>)} />
                <Route path={`${match.path}/:collectionId`} render={props => (<CollectionsPageWithSpinner isLoading={loading} {...props}/>)} />
            </div>
        )
    }
    
    
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage);