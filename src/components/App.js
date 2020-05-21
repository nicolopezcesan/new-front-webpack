import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
// import URL_ from './services'
import Articles from './articles';


class App extends Component {
    constructor() {
        super();
        this.state = {
            articles: []
        };
    }

    componentDidMount() {
        const fetchPromise = fetch('https://api-test-ln.herokuapp.com/articles');
        fetchPromise.then(response => {
            return response.json();
        }).then(arts => {
            this.setState({ articles: arts });
        });
    }


    render() {
        const { articles } = this.state;
        console.log(articles);

        return (
            <div>
                <h1>App React</h1>
                <Articles articles={articles}></Articles>
            </div>
        )
    }

}

// App.propTypes = {
//     articles: PropTypes.array
//     // articles: PropTypes.array.isRequired,
// }

export default App;