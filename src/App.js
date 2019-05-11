import React, { Component } from 'react';
import routes from './routes';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
    showContentMenus = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>
    }
    render() {
        return (
            <div>
                <Router>
                    <div>
                        <div>
                            {this.showContentMenus(routes)}
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;
