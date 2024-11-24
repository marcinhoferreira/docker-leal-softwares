module.exports = [
  // {
  //   name: 'meu-fiscal-api',
  //   script: './src/Main.js',
  //   cwd: '/var/www/leal-softwares/apps/meu-fiscal/server',
  //   env: {
  //     'PORT': 8081,
  //     'NODE_ENV': 'production'
  //   }
  // },
  {
    name: 'easy-shop-control-api',
    script: './src/Main.js',
    cwd: '/var/www/leal-softwares/apps/easy-shop-control/server',
    env: {
      'PORT': 8082,
      'NODE_ENV': 'production'
    }
  },
  {
    name: 'easy-virtual-store-api',
    script: './src/Main.js',
    cwd: '/var/www/leal-softwares/apps/easy-virtual-store/server',
    env: {
      'PORT': 8083,
      'NODE_ENV': 'production'
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
