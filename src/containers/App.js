import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestUsers } from '../actions';

// Redux State to Props object
const mapStateToProps = state => {
    return {
        searchField: state.searchUsers.searchField,
        users: state.requestUsers.users,
        isPending: state.requestUsers.isPending,
        error: state.requestUsers.error
    };
}

// Redux Dispatch to Props object
const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        onRequestUsers: () => dispatch(requestUsers())
    };
}

class App extends Component {

    componentDidMount() {
        this.props.onRequestUsers();
    }

    render() {

        const { searchField, onSearchChange, users, isPending } = this.props;
        const filterUsers = users.filter(user => {
            return user.name.toLowerCase().includes(searchField.toLowerCase());
        });

        if (isPending) {
            return (
                <h1 className='tc'>Loading</h1>
            );
        } else {
            return (
                <div className='tc'>
                    <h1>Galactic Directory</h1>
                    <SearchBox searchChange={onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList users={filterUsers} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);