import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import { createReduxStore } from './state';
import Index from './components';
import List from './components/list';
import Single from './components/single';
import './index.css';

const store = createReduxStore();

const history = syncHistoryWithStore( browserHistory, store );

const routes = (
	<Router history={ history }>
		<Route path="/" component={ Index }>
			<IndexRoute component={ List } />
			<Route path=":id" component={ Single } />
		</Route>
	</Router>
);

render(
	(
		<Provider store={ store }>
			{ routes }
		</Provider>
	),
	document.getElementById( 'root' )
);
