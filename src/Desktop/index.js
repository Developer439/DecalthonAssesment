import React, { Suspense, lazy } from 'react';
import { Provider, connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import { Loader } from './components/Common/loader';
import Home from './components/Home';




const Desktop = ({ store, loader }) => {
  loader = false;
  return (
    <Provider store = { store }>
			<Router>
				{ loader && <Loader /> }
					<Suspense fallback = { <Loader /> }>
						<Switch>
							<Route path = "/cart" component = { Cart } />
							<Route path = "/" component = { Home } />
						</Switch>
					</Suspense>
			</Router>
		</Provider>
  );
}

const mapStateToProps = store => ({
	loader: store.common.loader
})

export default connect(mapStateToProps)(Desktop);

