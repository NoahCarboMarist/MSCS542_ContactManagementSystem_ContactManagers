const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('dbConnection', {
  checkLogin: (args) => ipcRenderer.invoke('check-login', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  createAccount: (args) => ipcRenderer.invoke('create-account', (args)).then((result, reject) => {
    // console.log(result);
    return result;
  }),
  getDepartments: (args) => ipcRenderer.invoke('get-departments', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  setDepartments: (args) => ipcRenderer.invoke('set-departments', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  getSupervisors: (args) => ipcRenderer.invoke('get-supervisors', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  setSupervisors: (args) => ipcRenderer.invoke('set-supervisors', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  getUsers: (args) => ipcRenderer.invoke('get-users', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  setUsers: (args) => ipcRenderer.invoke('set-users', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  deleteUser: (args) => ipcRenderer.invoke('delete-user', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  getEmployees: (args) => ipcRenderer.invoke('get-employees', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  getEmployeeIDs: (args) => ipcRenderer.invoke('get-employee-ids', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  setEmployeeData: (args) => ipcRenderer.invoke('set-employees', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  getMessages: (args) => ipcRenderer.invoke('get-messages', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  setMessages: (args) => ipcRenderer.invoke('set-messages', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  setLastLogin: (args) => ipcRenderer.invoke('set-last-login', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  newPassword: (args) => ipcRenderer.invoke('set-new-password', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  getEmailHistory: (args) => ipcRenderer.invoke('get-email-history', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  setEmailHistory: (args) => ipcRenderer.invoke('set-email-history', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  getGroupMembers: (args) => ipcRenderer.invoke('get-group-members', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  setGroupMembers: (args) => ipcRenderer.invoke('set-group-members', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  getGroupDetails: (args) => ipcRenderer.invoke('get-group-details', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  setGroupDetails: (args) => ipcRenderer.invoke('set-group-details', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  getContacts: (args) => ipcRenderer.invoke('get-contacts', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  setContacts: (args) => ipcRenderer.invoke('set-contacts', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  createContact: (args) => ipcRenderer.invoke('create-contact', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  deleteContact: (args) => ipcRenderer.invoke('delete-contact', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  getCertified: (args) => ipcRenderer.invoke('get-certified', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  setCertified: (args) => ipcRenderer.invoke('set-certified', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  getCertifications: (args) => ipcRenderer.invoke('get-certifications', (args)).then((result) => {
    // console.log(result);
    return result;
  }),
  setCertifications: (args) => ipcRenderer.invoke('set-certifications', (args)).then((result) => {
    // console.log(result);
    return result;
  })
});

// From main.js
ipcRenderer.on('got-login', () => {
  console.log("logged in.");
});
