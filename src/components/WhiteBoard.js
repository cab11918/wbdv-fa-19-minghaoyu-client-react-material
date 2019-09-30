import React from 'react'

import NavBar from "./NavBar";
import CourseTable from "../containers/CourseTable";
import CourseCard from "./CourseCard";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CourseGrid from "../containers/CourseGrid";
import 'typeface-roboto'
import {Typography} from "@material-ui/core";

export default class WhiteBoard extends React.Component {

  render() {

    return (
          <Router>

              <NavBar/>

              <Route path="/courseTable" component={CourseTable}/>





            <Route path="/courseGrid" component={CourseGrid}/>



            <h2>Modules</h2>asda

            <h2>Lessons</h2>fdsfs



          </Router>


    )

  }
}