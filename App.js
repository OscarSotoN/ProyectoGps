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
    <div> {this.state.verVista == 1  ? <Vista1/> : <Vista2 cambio={this.cambio}/>} </div>
  )  
  }

  
} 

class Vista2 extends Component  {

  eliminarTutor(){
    fetch('borrar_tutor.php', {
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
      tablaFoto: 'placeholder',

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
        alt="Adelle Charles"
        src="https://vignette.wikia.nocookie.net/kirby/images/d/d8/Kirby_aniversario.png/revision/latest/scale-to-width-down/310?cb=20170531193018"
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

      <Button onClick={this.eliminarTutor()} variant="raised"  color="secondary" style ={styles.boton}>
         Eliminar 
      <DeleteIcon style={{marginLeft: 10}}/>
      </Button>
    </Paper>

    )
  }

}



class Vista1 extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nombre: '',
      apellido: '',
      disponibilidad: '',
      disponibilidad_d: '',
      especialidad:'',
      fono: '',
      metodo:'ciudad',
      ubicacion: '',
      foto: '',
      vistaPrevia: '',
      verVista2:'false',
      error_nombre: '',
      error_apellido: '',
      error_materia: '',
      error_fono: '',
      error_disponibilidad: '',
      error_disponibilidad_d: '',
      error_ubicacion: '',
    };


    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleImageChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
    this.setState({ vistaPrevia:reader.result });
    this.setState({ foto:file });
    console.log(reader.result);
    }
    reader.readAsDataURL(file)
  }

  handleChange = event => { 
    this.setState({ [event.target.name]: event.target.value });
  };

    handleSubmit = (e) => {
    if(this.validar()==true){
    var data = new FormData()
    
    data.append('nombreT', this.state.nombre)
    data.append('apellidoT', this.state.apellido)
    data.append('disponibilidad', this.state.disponibilidad)
    data.append('ubicacion', this.state.ubicacion)
    data.append('telefono', this.state.fono)
    data.append('metodo', this.state.metodo)
    data.append('especialidad', this.state.especialidad)
    data.append('foto', this.state.foto)
    data.append('disponibilidad_d', this.state.disponibilidad_d)
    
    fetch("http://localhost/action_page.php",
    {
    method: "POST",
    body: data
    }) 
    this.props.cambio()
  }
    e.preventDefault();
    this.state.verVista = 0;
  };

    validar = () =>{

        var flagError = true;

        if(this.state.nombre === ''){
          flagError=false;
          this.setState({error_nombre : "Campo requerido"})
        }
        
        if(this.state.ubicacion === ''){
          flagError=false;
          this.setState({error_ubicacion : "Campo requerido"})
        }

        if(this.state.apellido === ''){
          flagError=false;
          this.setState({error_apellido : "Campo requerido"})
        }

        if(this.state.especialidad === ''){
          flagError=false;
          this.setState({error_materia : "Campo requerido"})
        }

        if(this.state.disponibilidad === ''){
          flagError=false;
          this.setState({error_disponibilidad : "Campo requerido"})
        }

        if(this.state.disponibilidad_d === ''){
          flagError=false;
          this.setState({error_disponibilidad_d : "Campo requerido"})
        }

        if(this.state.fono === ''){
          flagError=false;
          this.setState({error_fono : "Campo requerido"})
        }
        
        if(this.state.fono.length > 9){
          flagError=false;
          this.setState({error_fono : "Maximo 9 numeros"})
        }

        if(this.state.fono.length < 9){
          flagError=false;
          this.setState({error_fono : "Minimo 9 numeros"})
        }


        return flagError;
    }



  render() {
    return (  
      <Paper  style ={styles.root}  elevation={4}>
        <Typography variant="headline" component="h3">
          Su perfil de tutor.
        <Divider /> 
        </Typography>

        <TextField
          name="nombre"
          value={this.state.nombre}
          onChange={this.handleChange}
          required
          id="input"
          label="Nombre"
          type="text"
          placeholder="Primer nombre"
          error={this.state.error_nombre===''? false : true}
          helperText={this.state.error_nombre}
        />
        
        <br />
        <TextField
          value={this.state.apellido}
          name="apellido"
          onChange={this.handleChange}
          required
          id="input"
          label="Apellido"
          type="text"
          margin="normal"
          placeholder="Apellido paterno"
          error={this.state.error_apellido===''? false : true}
          helperText={this.state.error_apellido}
        />
        <br />
        <br />
        <br />
        <InputLabel htmlFor="age-helper">Disponibilidad horaria</InputLabel>
        <br />
        <br />
        <TextField
        name="disponibilidad"
        onChange={this.handleChange}
        id="input"
        error={this.state.error_disponibilidad===''? false : true}
        helperText={this.state.error_disponibilidad}
        label="Fecha de inicio"
        type="datetime-local"
        value={this.state.disponibilidad}
        InputLabelProps={{
          shrink: true,
        }}
        />

      <TextField style={{marginLeft: 20}}
        name="disponibilidad_d"
        onChange={this.handleChange}
        id="input"
        error={this.state.error_disponibilidad_d===''? false : true}
        helperText={this.state.error_disponibilidad_d}
        label="Fecha de termino"
        type="datetime-local"
        value={this.state.disponibilidad_d}
        InputLabelProps={{
          shrink: true,
        }}
      />
        <br />
        <TextField
          value={this.state.materia}
          name="especialidad"
          onChange={this.handleChange}
          required
          id="input"
          label="Materia a dictar"
          type="text"
          margin="normal"
          placeholder="Materia a dictar"
          error={this.state.error_materia===''? false : true}
          helperText={this.state.error_materia}
          
        />
        <br />
        <TextField
          value={this.state.fono}
          name="fono"
          onChange={this.handleChange}
          required
          id="input"
          label="Numero de telefono"
          type="number"
          margin="normal"
          placeholder="Telefono de 9 digitos"
          error={this.state.error_fono===''? false : true}
          helperText={this.state.error_fono}
        />
        <br />
        <br />
        <InputLabel htmlFor="age-helper">Metodo</InputLabel>
        <br />
        <Select
         name="metodo"
         value={this.state.metodo}
         onChange={this.handleChange}>
            <MenuItem value='ciudad'>Domicilio</MenuItem>
            <MenuItem value='universidad'>Universidad</MenuItem>
          </Select>
          <br />
          <br />
        <InputLabel htmlFor="age-helper">Ubicacion</InputLabel>
        <br />
        <Select
         name="ubicacion"
         value={this.state.ubicacion}
         error={this.state.error_ubicacion===''? false : true}
         onChange={this.handleChange}
          >
            PLACEHOLDER
            <MenuItem value='Concepcion'>Concepcion</MenuItem>
            <MenuItem value='Coronel'>Coronel</MenuItem>
            <MenuItem value='Chiguayante'>Chiguayante</MenuItem>
            <MenuItem value='Florida'>Florida</MenuItem>
            <MenuItem value='Hualpen'>Hualpen</MenuItem>
            <MenuItem value='Hualqui'>Hualqui</MenuItem>
            <MenuItem value='Lota'>Lota</MenuItem>
            <MenuItem value='San pedro de la paz'>San Pedro de la Paz</MenuItem>
            <MenuItem value='Santa Juana'>Santa Juana</MenuItem>
            <MenuItem value='Talcahuano'>Talcahuano</MenuItem>
            <MenuItem value='Tome'>Tome</MenuItem>
            <MenuItem value='Penco'>Penco</MenuItem>
          </Select>
          <br />
          <br /> 
          <InputLabel htmlFor="age-helper">Foto de perfil</InputLabel>
          <br />
          <br /> 
          <label htmlFor="upload">
            <Avatar src={this.state.vistaPrevia}>{this.state.vistaPrevia===""? "?": ""}</Avatar>
            </label>
            <input 
              id="upload" 
              accept="image/*" 
              type="file" 
              name="logo"  
              onChange={this.handleImageChange} 
              style={{display:'none'}}
            /> 
        <br />
        <br />
        <Button onClick={this.handleSubmit} variant="raised"  color="primary" style ={styles.boton}>
         Enviar
        <Send style={{marginLeft: 10}}/>
        </Button>
        
      </Paper>

      
      

    );
  }
}

export default App;
