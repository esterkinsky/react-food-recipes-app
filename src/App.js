import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './components/pages/Home';
import { Contacts } from './components/pages/Contacts';
import { About } from './components/pages/About';
import { NotFound } from './components/pages/NotFound';
import {Category} from './components/pages/Category';
import { Recipe } from './components/pages/Recipe';

function App() {
	return <>
		<Router basename='/react-food-recipes'><Header />
			<main className='container content'>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/contacts' component={Contacts} />
					<Route path='/category/:name' component={Category} />
					<Route path='/meal/:id' component={Recipe} />
					<Route component={NotFound} />
				</Switch>
			</main>
		</Router>
		<Footer />
	</>
}

export default App;
