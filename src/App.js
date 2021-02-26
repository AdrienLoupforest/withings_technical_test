import './App.css';
import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DetailedBread from './components/bread/DetailedBread';

function App() {
    return (
        <Router>
            <Link to="/home">Home</Link>

            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/bread/:id">
                    <DetailedBread />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
