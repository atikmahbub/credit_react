import logo from './logo.svg'
import LandingPage from './views/LandingPage/Index'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Credit from './views/CreditPage/Credit'

function App() {
    return (
        <Router>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/credit" component={Credit} />
        </Router>
    )
}

export default App
