import React, { Component } from 'react'
import Header from '../../components/Header'
import { connect} from 'react-redux'
import { getHomeList } from './store'

class Home extends Component {
    componentDidMount () {
        this.props.getHomeList()
    }
    render() {
        return (
            <div>
                <Header /> 
                <span>
                    This is home component.
                    name: {this.props.name}
                </span><br />
								{
									this.props.list
								}
                <button onClick={()=>alert('home')}> button</button>
            </div>
        )
    }
}

Home.loadData = (store)=> {
    return store.dispatch(getHomeList())
}

const mapStateToProps = state=> ({
	list: state.home.newsList,
    name: state.home.name
})

const mapDispatchToProps = dispatch => ({
    getHomeList() {
        console.log('test')
        dispatch(getHomeList())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)