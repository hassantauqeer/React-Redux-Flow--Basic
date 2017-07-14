import React ,{PropTypes, Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators}from 'redux'
import {Connect} from 'react-redux'
import * as courseActions from '../../actions/courseActions'
import CourseList from './CourseList';

class CoursesPage extends Component{
  constructor(props,context){
    super(props,context)
  }

  render(){
    return(
        <div>
        <h1>Courses</h1>
        <CourseList courses={this.props.courses} />
        </div>
    )
  }
}
CoursesPage.PropTypes= {
  actions: PropTypes.object.isRequired,
  courses: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return{
    courses: state.courses
  }
}

function mapDispatchToProps(dispatch) {
  return{
    actions:bindActionCreators(courseActions,dispatch)
  }
}
export default connect(mapStateToProps)(CoursesPage);
