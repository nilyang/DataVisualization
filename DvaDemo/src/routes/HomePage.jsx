import React , {PropTypes} from 'react'
import {connect} from 'dva'
import MainLayout from '../components/Layout/MainLayout'

function HomePage(props) {
    console.log("\n----HomePage----\n",props)
    function getData({data}){
        console.log("\n---getData---\n",data)
        return data ? data.join("-") : "";
    }
    return (
        <MainLayout>
                <div> Join Remote Async Data:<h2> {getData(props.example)} </h2> </div>
        </MainLayout>
    )
}

HomePage.propTypes = {
    // data: PropTypes.array,
    // success: PropTypes.bool,
};

function mapStateToProps(state, ownPros) {
    console.log("\n----mapStateToProps----\n",{...state})
    return {...state};
}


export default connect(mapStateToProps)(HomePage);