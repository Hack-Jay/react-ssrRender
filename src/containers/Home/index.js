import React, { Component } from 'react'
import Header from '../../components/Header'
import { connect} from 'react-redux'
import { getHomeList } from './store'

class Home extends Component {
    componentDidMount () {
        if(!this.props.list.length) {
            this.props.getHomeList()
        }
    }
    render() {
        return (
            <div>
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

// 服务端加载数据
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