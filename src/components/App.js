import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './index.scss';


class App extends Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        const { foo } = this.state;

        return (
            <div>
                <h1>App React</h1>
            </div>
        )
    }
}

// App.propTypes = {
//     articles: PropTypes.array
//     // articles: PropTypes.array.isRequired,
// }

export default App;