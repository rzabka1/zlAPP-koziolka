const { contextBridge } = require('electron');
const { exec } = require('child_process');

contextBridge.exposeInMainWorld('api', {
    runCommand: (cmd) => {
        exec(cmd, (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(stdout);
        });
    }
});