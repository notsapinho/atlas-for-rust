// allow browser to use ipc
var electron = require('electron');
window.appversion = electron.remote.app.getVersion();
window.ipcRenderer = electron.ipcRenderer;
window.ElectronStore = new (require('electron-store'))();

// add data stores to browser window
window.DataStore = {
    Config: require('@/js/datastore/ConfigDataStore'),
    FCM: require('@/js/datastore/FCMDataStore'),
};