import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import History from './pages/history';
import Mystery from './pages/mystery';
import Mythology from './pages/mythology';
import Technology from './pages/technology';
import PageNotFound from './pages/pageNotFound';

function App() {
return (
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />
		<Route path='/history' component={History} />
		<Route path='/mystery' component={Mystery} />
		<Route path='/mythology' component={Mythology} />
		<Route path='/technology' component={Technology} />
    <Route path="*" component={PageNotFound} />
	</Switch>
	</Router>
);
}

export default App;
