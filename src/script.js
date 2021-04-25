const { shell, remote } = require('electron');

function goRepo() {
  shell.openExternal('https://github.com/jakubmanczak/umlaut');
}
function xBtn() {
  remote.getCurrentWindow().close();
}
