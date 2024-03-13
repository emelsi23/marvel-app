<template>
    <div>
      <div class="background-image"></div>
      <router-view></router-view>
    </div>
  </template>
  
  <style>
  .background-image {
    background-image: url('https://t4.ftcdn.net/jpg/01/94/35/19/360_F_194351905_FlzhKrXQkZdLBaq1wZmssTSILprWRghW.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Coloca la imagen de fondo detrás del contenido de la página */
  }
  </style>
  