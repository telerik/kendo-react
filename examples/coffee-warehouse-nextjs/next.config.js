const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "~@styles/main.scss";`,
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/warehouse/dashboard',
        permanent: true,
      },
    ]
  },
}