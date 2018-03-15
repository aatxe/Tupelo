'use strict'

const { app, BrowserWindow } = require('electron')
const dialog = require('electron').dialog

let mainWindow

const start = function() {
  // create main electron window
  mainWindow = new BrowserWindow({
    title: 'WINDOW TITLE HERE',
    width: 1100, height: 730,
    autoHideMenuBar: false,
    titleBarStyle: 'hiddenInset',
    // frame: false
  })

  // load page
  mainWindow.loadURL('http://localhost:8080')

  // disable menu (doesnt do anything on mac)
  // mainWindow.setMenu(null)

  // open dev tools
  // mainWindow.webContents.openDevTools()

  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

// catch uncaught exceptions and check if we recognize them
// if we do, we can provide a nicer message that tells the user
// more about what went wrong. If it's an exception we don't
// recognize, we emulate the default Electron behavior
// of showing an error dialog box containing just the stack trace
process.on('uncaughtException', e => {
  let msg

  switch(e.code) {
    // case 'ENOENT': {
    // }
    default: {
      // use Electron's default message
      msg = 'Uncaught Exception:\n' + e.stack
    }
  }

  // show dialog box with the appropriately set message
  dialog.showErrorBox('A JavaScript error occurred in the main process', msg)
})


app.on('ready', start)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) start()
})
