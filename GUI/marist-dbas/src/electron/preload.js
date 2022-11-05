const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('dbConnection', {
  checkLogin: (args) => ipcRenderer.invoke('check-login', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  createAccount: (args) => ipcRenderer.invoke('create-account', (args)).then((result) => {
    return result;
  }),
  getMessages: (args) => ipcRenderer.invoke('get-messages', (args)).then((result) => {
    return result;
  })
});

// From main.js
ipcRenderer.on('got-login', () => {
  console.log("logged in.");
});
