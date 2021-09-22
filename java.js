class Usuario {
    constructor(id, name, username, email, phone, namecompany, street, city, zip) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.namecompany = namecompany;
        this.street = street;
        this.city = city;
        this.zip = zip;

    }

}

//clase central controladora de funciones
class Usuarioinfo {
    constructor() {
        this.Registro = new Map();
    }

    agregar(Usuario) {

        this.Registro.set(Usuario.id, Usuario);
        document.getElementById('resultados').innerHTML="";

        return true;
    }

    buscar(id) {

        let bus = this.Registro.has(id);
        if (bus = true) {
            console.log(this.Registro.get(id));
            return true;
        } else {
            console.log("a la vuelta")
            return false;

        }

    }

    borrar(id) {

        let eliminado = this.Registro.delete(id);
        if (eliminado === true) {
           
            document.getElementById('resultados').innerHTML="";
            return true;
        } else {
            return false;
        }
    }

  




}

//Clase maneja interfaz usuario impresion div
class impresion{
agregarusuario(nuevo)
{
    const listado=document.getElementById('resultados');
    const usuario=document.createElement('div');
    usuario.innerHTML=` <div class ='Show' id='cod${nuevo.id}'>
    <div class='info'>
          Id: ${nuevo.id}<br>
          Name: ${nuevo.name}<br>
          Username: ${nuevo.username}<br>
          E-Mail: ${nuevo.email}<br>
          Phone: ${nuevo.phone}<br>
          Company Name: ${nuevo.namecompany}<br>
          Street: ${nuevo.street}<br>
          City: ${nuevo.city}<br>
          Zicode: ${nuevo.zip}<br>
      
    <div>
  </div>`;
    
    listado.appendChild(usuario);
}
ShowMessage(mensaje,tipo){
    const Registro=document.getElementById('Registroo');
    const formulario=document.getElementById('formusuario');
    const div = document.createElement('div');
    div.className="alerta";
    div.appendChild(document.createTextNode(mensaje))

    Registro.insertBefore(div,formulario);
    setTimeout(function()
    {
      document.querySelector('.alerta').remove();
    },3000);

}
}

//arraynuevo 
let Usuarioinformacion = new Usuarioinfo();


//Interaccion del Usuario(botones)


//boton agregar
const btnAdd = document.getElementById('btnAdd');
btnAdd.addEventListener('click', () => {
    let id = document.getElementById('Id').value;
    let name = document.getElementById('Name').value;
    let username = document.getElementById('Username').value;
    let email = document.getElementById('Email').value;
    let phone = document.getElementById('Phone').value;
    let namecompany = document.getElementById('Namecompany').value;
    let street = document.getElementById('Street').value;
    let city = document.getElementById('City').value;
    let zip = document.getElementById('Zip').value;
    let nuevo = new Usuario(id, name, username, email, phone, namecompany, street, city, zip);
    Usuarioinformacion.agregar(nuevo);

    //impresion div
    let impresor= new impresion();
    console.log(Usuarioinformacion);
    impresor.agregarusuario(nuevo); 
    impresor.ShowMessage("Se agrego el producto",1)
});

//boton buscar
const btnSearch = document.getElementById('btnSearch');
btnSearch.addEventListener('click', () => {
    let id = document.getElementById('Id').value;
    let encontre = Usuarioinformacion.buscar(id);


    console.log(Usuarioinformacion);
});

//boton delet
const btnDelet = document.getElementById('btnDelet');
btnDelet.addEventListener('click', () => {
    let id = document.getElementById('Id').value;
    let eliminado = Usuarioinformacion.borrar(id);

    if (eliminado == true) {

        console.log(Usuarioinformacion+"se elimino");
    } else {
        console.log(Usuarioinformacion+"");
    }
});

//boton reset independiente de la clase controladora

let btnCancel = document.getElementById('btnCancel');
let inputs = document.querySelectorAll('input');

btnCancel.addEventListener('click', () => {
    inputs.forEach(input => input.value = '');

});
