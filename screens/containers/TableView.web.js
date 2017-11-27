import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import TableView from '../components/TableView';
import PageLayout from '../routers';

const mapStateToProps = ({ nav, auth }) => ({ nav, isLoggedIn: auth.isLoggedIn });
const mapDispatchToProps = { logout };

const WrappedTableView = props => <PageLayout {...props}><TableView {...props} /></PageLayout>;

export default connect(mapStateToProps, mapDispatchToProps)(WrappedTableView);
