import React from 'react'
import Header from '../../components/Header'
import { connect} from 'react-redux'

const Home = (props)=> (
    <div>
        <Header /> 
        <span>
            This is home component.
            name: {props.name}
        </span><br />
        <button onClick={()=>alert('home')}> button</button>
    </div>
)
const mapStateToProps = state=> ({
    name: state.name
})
export default connect(mapStateToProps, null)(Home)