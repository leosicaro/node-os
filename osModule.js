const os = require('os');

function getOSInfo() {
  const osInfo = {
    Nombre: os.type(),
    Tipo: os.platform(),
    Version: os.version(),
    Arquitectura: os.arch(),
    CPUs: os.cpus().length,
    MemoriaTotal: (os.totalmem() / (1024 * 1024)).toFixed(2) + ' MB',
    MemoriaLibre: (os.freemem() / (1024 * 1024)).toFixed(2) + ' MB',
  };

  console.log(osInfo)
}

getOSInfo()
module.exports = getOSInfo()