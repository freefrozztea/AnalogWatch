"use strict";

const horaActual = document.getElementsByClassName('horaActual')[0];
const modoActual = document.getElementById('opcionActual');
const fechaActual = document.getElementsByClassName('fecha')[0];
const arrayDay = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
const arrayMes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
const ampm = document.getElementsByClassName('ampm')[0];


const getHora = () => {

    const fecha = new Date();
    // console.log(fecha);

    let hora = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let dia = fecha.getDate();
    

    const fechaHoraObj = {
        diaSemana: fecha.getDay(),
        mes: fecha.getMonth(),
        anio: fecha.getFullYear(),
    }

    function revealSection(){
        if(ampm.classList.contains('reveal')){
            ampm.classList.remove('reveal');
        } else {
            ampm.classList.add('reveal');
        }
    }
    /*
    if(hora < 12){
        ampm.textContent = 'PM';
        hora = hora - 12;
    } else{
        ampm.textContent = 'AM';
    }
    */
    modoActual.addEventListener( 'click', revealSection, false);

    dia < 10 ? fechaHoraObj.dia = `0${dia}` : fechaHoraObj.dia = dia;
    hora < 10 ? fechaHoraObj.hora = `0${hora}` : fechaHoraObj.hora = hora;
    minutos < 10 ? fechaHoraObj.minutos = `0${minutos}` : fechaHoraObj.minutos = minutos;
    segundos < 10 ? fechaHoraObj.segundos = `0${segundos}` : fechaHoraObj.segundos = segundos;


    fechaActual.innerHTML = `${arrayDay[fechaHoraObj.diaSemana]} ${fechaHoraObj.dia} de ${arrayMes[fechaHoraObj.mes]} del ${fechaHoraObj.anio}`;
    horaActual.innerHTML = `${fechaHoraObj.hora} : ${fechaHoraObj.minutos} : ${fechaHoraObj.segundos}`;
};

setInterval(getHora, 300);

