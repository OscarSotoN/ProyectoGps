import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Send from '@material-ui/icons/Send';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteIcon from '@material-ui/icons/Delete';
import Vista2 from './Vista2.js'
import Vista1 from './Vista1.js'
import EditarTutor from './EditarTutor.js'



const styles = {
  root: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft:"5%",
    paddingRight:"5%",
    marginTop: 50,
    marginLeft: "20%",
    marginRight: "20%",
  },

  card2:{
    marginTop: 50,
    marginLeft: "10%",
    marginRight: "10%",
    paddingTop: 20
  },


  boton: {
    marginTop: 30,
  },

  icono: {
    marginTop: 20,
    marginRight: 15,
    width: 30,
    height: 30,
  },

  avatar:{
    width: 60,
    height: 60,
    borderStyle: "groove",
  }
}

  
class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      verVista:'',

    };

  this.cambio = this.cambio.bind(this);
  }

  cambio(){
    this.setState({verVista:1})
  }

  render(){
    
    return(
    <div> {this.state.verVista == 1  ? <EditarTutor/> : <EditarTutor cambio={this.cambio}/>} </div>
  )  
  }

  
} 
export default App;
