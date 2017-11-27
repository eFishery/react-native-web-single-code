import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import DetailView from '../components/DetailView';
import PageLayout from '../routers';

const mapStateToProps = ({ nav, auth }) => ({ nav, isLoggedIn: auth.isLoggedIn });
const mapDispatchToProps = { logout };

const WrappedDetailView = props => <PageLayout {...props}><DetailView {...props} /></PageLayout>;

export default connect(mapStateToProps, mapDispatchToProps)(WrappedDetailView);
