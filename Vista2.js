import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import DeleteIcon from '@material-ui/icons/Delete';

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


class Vista2 extends Component  {

  eliminarTutor(){
    fetch("http://localhost/borrar_tutor.php", {
      method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
    })
  }

  constructor(props) {
    super(props);

    this.state = {
      verVista:'',
      tablaNombre: 'placeholder',
      tablaApellido: 'placeholder',
      tablaDisponibilidad: 'placeholder',
      tablaDisponibilidad2: 'placeholder',
      tablaEspecialidad: 'placeholder',
      tablaTelefono: 'placeholder',
      tablaMetodo: 'placeholder',
      tablaUbicacion: 'placeholder',
      tablaFoto: '',

    };

    
   
  }

  componentDidMount(){
    fetch("http://localhost/leer_tutor.php")
    .then((response => {
      return response.json()
    }))
    .then( tutor => {
      this.setState({tablaNombre:tutor[0].Nombre})
      this.setState({tablaApellido:tutor[0].Apellido})
      this.setState({tablaDisponibilidad:tutor[0].Disponibilidad})
      this.setState({tablaUbicacion:tutor[0].Ubicacion})
      this.setState({tablaTelefono:tutor[0].Telefono})
      this.setState({tablaMetodo:tutor[0].Metodo})
      this.setState({tablaEspecialidad:tutor[0].Materia})
      this.setState({tablaFoto:tutor[0].foto_perfil})
      this.setState({tablaDisponibilidad2:tutor[0].Disponibilidad_d})
      console.log(tutor[0].Nombre)
      console.log(this.state)
    })
  }
  

  render(){
   return( 


      
    <Paper style={styles.card2}> 

      <Avatar
        style={{border: 0}} 
        size={100}
        style={styles.avatar}
        src={ "http://localhost"+this.state.tablaFoto.replace("xampp/htdocs/","")}
      />

      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Nombre:</TableCell>
            <TableCell >{this.state.tablaNombre}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Apellido:</TableCell>
            <TableCell>{this.state.tablaApellido}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Disponibilidad (inicio):</TableCell>
            <TableCell>{this.state.tablaDisponibilidad}</TableCell> 
          </TableRow>
          <TableRow>
            <TableCell>Disponibilidad (Termino):</TableCell>
            <TableCell>{this.state.tablaDisponibilidad2}</TableCell> 
          </TableRow>
          <TableRow>
            <TableCell>Especialidad:</TableCell>
            <TableCell>{this.state.tablaEspecialidad}</TableCell> 
          </TableRow>
          <TableRow>
            <TableCell>Telefono:</TableCell>
            <TableCell>{this.state.tablaTelefono}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Metodo:</TableCell>
            <TableCell>{this.state.tablaMetodo}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Ubicacion:</TableCell>
            <TableCell>{this.state.tablaUbicacion}</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Button onClick={()=>this.eliminarTutor()} variant="raised"  color="secondary" style ={styles.boton}>
         Eliminar 
      <DeleteIcon style={{marginLeft: 10}}/>
      </Button>
    </Paper>

    )
  }

}

export default Vista2;