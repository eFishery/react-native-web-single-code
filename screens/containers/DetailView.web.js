import React from 'react';
import { connect } from 'react-redux';
import DetailView from '../components/DetailView';
import PageLayout from '../components/PageLayout.web';

const mapStateToProps = ({ nav, counter, auth }) => ({ nav, counter, isLoggedIn: auth.isLoggedIn });
const mapDispatchToProps = {};

const WrappedDetailView = props => <PageLayout {...props}><DetailView {...props} /></PageLayout>;

export default connect(mapStateToProps, mapDispatchToProps)(WrappedDetailView);
