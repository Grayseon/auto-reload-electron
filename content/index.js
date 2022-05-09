const chokidar = require('chokidar')

module.exports = function(electron){
    electron.BrowserWindow.prototype.loadFile = function(file){
        electron.BrowserWindow.prototype.getFocusedWindow().loadFile(file)
        chokidar.watch(file).on('change', ()=>{
            electron.BrowserWindow.prototype.getFocusedWindow().loadFile(file)
        })
    }
}