const { shell, remote } = require('electron');

function goRepo() {
  shell.openExternal('https://github.com/jakubmanczak/umlaut');
}

function xBtn() {
  remote.getCurrentWindow().close();
}

function vBtn() {
  remote.getCurrentWindow().hide();
}

// // CLOSING AND TRAY MANAGEMENT
// let trayBool;
// let trayBoolSaved = window.localStorage.getItem('trayBool');
// if (trayBoolSaved !== null && trayBoolSaved !== undefined) {
//   trayBool = trayBoolSaved;
//   console.log(`traybool is ${trayBool}; trayBoolSaved is ${trayBoolSaved}`);
//   document.querySelector('.tray-bool').innerHTML =
//     trayBool === true ? 'Yes' : 'No';
// } else {
//   trayBool = false;
//   document.querySelector('.tray-bool').innerHTML = 'No';
// }
// function toggleTrayBool() {
//   trayBool = !trayBool;
//   window.localStorage.setItem('trayBool', trayBool);
//   document.querySelector('.tray-bool').innerHTML =
//     trayBool === true ? 'Yes' : 'No';
// }

// function xBtn() {
//   if (trayBool === false) {
//     remote.getCurrentWindow().close();
//   } else {
//     remote.getCurrentWindow().hide();
//   }
// }
