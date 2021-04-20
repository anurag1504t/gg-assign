
import React, { Component } from 'react';
import Dashboard from './dashboard';
import AppStats from './stats';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { fetchAppsList, fetchAppData } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        appsList: state.appsList,
        appData: state.appData
    }
}

const mapDispatchToProps = dispatch => ({
    fetchAppsList: () => { dispatch(fetchAppsList())},
    fetchAppData: () => { dispatch(fetchAppData())}    
});

class Main extends Component {    
    
    componentDidMount() {
        this.props.fetchAppsList();
        this.props.fetchAppData();
    }

    render() {

        const AppDashboard = () => {
            return (
                <Dashboard
                    appsList = {this.props.appsList}
                    appData = {this.props.appData}
                    isLoadingData={this.props.appData.isLoading}
                    errMessData={this.props.appData.errMess}
                    isLoadingList={this.props.appsList.isLoading}
                    errMessList={this.props.appsList.errMess}
                />
            )
        }

        const AppDataWithId = ({match}) => {
            return(
                <AppStats data={this.props.appData.appData[`${match.params.appId}`]}
                    app = {this.props.appsList.appsList[match.params.appId - 1]}
                    isLoadingData={this.props.appData.isLoading}
                    errMessData={this.props.appData.errMess}
                    isLoadingList={this.props.appsList.isLoading}
                    errMessList={this.props.appsList.errMess}
                />
            );
        }

        return (
            <Switch>
                <Route path='/dashboard' component = {AppDashboard} />
                <Route exact path='/appstat/:appId' component={AppDataWithId} />
                <Redirect to="/dashboard" />
            </Switch>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));