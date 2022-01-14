// https://github.com/johnsoncodehk/volar/discussions/592
// eslint-disable-next-line @typescript-eslint/no-var-requires
const thisPackage = require('./package.json')
const reactStub = thisPackage.devDependencies['@types/react'] // i.e. "file:src/types/types__react"

function readPackage(pkg, _console) {
  if (pkg.dependencies['@types/react']) {
    pkg.dependencies['@types/react'] = reactStub
  }
}

module.exports = {
  hooks: {
    readPackage,
  },
}
