import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import TopHeader from '../components/TopHeader'
const BasicExample = () => (
    <Router>
        <div>
            <TopHeader />
            <Route exact path="/" component={Home}/>
            <Route path="/test1" component={About}/>
            <Route path="/test2" component={About}/>
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>首页</h2>
    </div>
)

const About = () => (
    <div>
        <h2>关于</h2>
    </div>
)


const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default BasicExample