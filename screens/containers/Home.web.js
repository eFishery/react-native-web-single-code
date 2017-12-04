import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import Home from '../components/Home';
import PageLayout from '../components/PageLayout.web';

const mapStateToProps = ({ nav, auth }) => ({ nav, isLoggedIn: auth.isLoggedIn });
const mapDispatchToProps = { logout };

const WrappedHome = props => <PageLayout {...props}><Home {...props} /></PageLayout>;

export default connect(mapStateToProps, mapDispatchToProps)(WrappedHome);
