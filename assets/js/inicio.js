let activo = "ACTIVO";
let inactivo = "INACTIVO";

function Administrador(){
    let usuario = document.getElementById("usuario").value;
    let contra = document.getElementById("contra").value;
    
    if(usuario == "1" && contra == "1"){
        localStorage.setItem("Administrador", activo);
    }
    else{
        localStorage.setItem("Administrador", inactivo);
    }

    document.getElementById("usuario").value = "";
    document.getElementById("contra").value = "";
}



let boton = document.getElementById("botonAcceso");

boton.onclick = (e) =>{
    e.preventDefault()
    Administrador()
    AdminActivo()
};





const mensaje = document.getElementById("saludoAdmi");
const formulario = document.getElementById("formulario");
const botonCerrar = document.getElementById("botonCerrarSesion");


function AdminActivo(){
    let AdminActivo = localStorage.getItem("Administrador");

    if(AdminActivo == "ACTIVO"){
        mensaje.style.display = "block";
        formulario.style.display = "none";
        botonCerrar.style.display = "block";
    }
}
AdminActivo();



let btnCerrarSesion = document.getElementById("botonCerrarSesion");

btnCerrarSesion.onclick = (e) =>{
    e.preventDefault()
    mensaje.style.display = "none";
    formulario.style.display = "block";
    botonCerrar.style.display = "none";
    localStorage.setItem("Administrador", inactivo);
};