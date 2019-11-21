import React from 'react'
import { connect } from 'react-redux'
import { AppPage } from "../components/App"

import { ageUp, ageDown, delItem, loading } from '../store/actions'
import { getAge, getHistory, getIsLoading } from '../store/selectors'

const App = props => <AppPage {...props} />

const mapStateToProps = state => ({
    age: getAge(state),
    history: getHistory(state),
    isLoading: getIsLoading(state),
})

const mapDispatchToProps = (dispatch) => ({
    incAge: (val) => dispatch(ageUp(val)),
    decAge: (val) => dispatch(ageDown(val)),
    delItem: (id) => dispatch(delItem(id)),
    loading: () => dispatch(loading),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
