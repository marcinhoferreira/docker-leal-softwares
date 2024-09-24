module.exports = [
  {
    name: 'api-meu-fiscal',
    script: 'Main.js',
    cwd: '/var/www/leal-softwares/apps/meu-fiscal/server',
    env: {
      'NODE_ENV': 'test'
    }
  }
]
/*
EXEMPLO COM MULTIPLOS SERVIDORES
module.exports = [{
  script: 'index.js',
  name: 'app',
  cwd: '/var/www/app/'
}, {
  script: 'index.js',
  name: 'app2',
  cwd: '/var/www/app2/'
}]
*/
