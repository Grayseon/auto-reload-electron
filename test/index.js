var electron = require('electron')
const autoreload = require('auto-reload-electron')
const { app, BrowserWindow } = autoreload(electron)

app.on('ready', ()=>{
    var win = new BrowserWindow()
    win.loadFile(__dirname+'/index.html')
})