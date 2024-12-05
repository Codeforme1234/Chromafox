const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    pickColor: () => ipcRenderer.invoke('color-picker'),
});
