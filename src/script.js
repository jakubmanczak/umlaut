const { shell } = require('electron');

function goRepo() {
  shell.openExternal('https://github.com/jakubmanczak/umlaut');
}
