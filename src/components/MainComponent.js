import Home from './HomeComponent';
import Profile from "./ProfileComponent";
import Skills from './SkillComponent';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Head from "./HeaderComponent";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postCard, fetchCards } from "../redux/ActionCreaters";
import Footer from './FooterComponent'

const mapStateToProps = state => { return{
    cards: state.user
};
};

const mapDispatchToProps = (dispatch) => ({
    fetchCards: () => { dispatch(fetchCards()); },
    postCard: (msg, selected, name, email, image) => dispatch(postCard(msg, selected, name, email, image))
});

class Main extends Component {
    
    componentDidMount() {
        this.props.fetchCards();
        console.log(this.props.cards);
    }
    render() {
            return (
            <div>
            <div className="navbar-dark">
                <Head />
            </div>
                <div className="home">
                <Switch>
                    <Route path="/home" component={() => <Home />} />
                    <Route path="/profiles" component={() => <Profile cards={this.props.cards.cards} cardsErrMess={this.props.cards.errMess} />} />
                    <Route path="/skills" component={() => <Skills postCard={this.props.postCard} />} />
                    <Redirect to="/home" />
                </Switch>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
