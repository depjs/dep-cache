const DatNPM = require('dat-npm')
const { ifError } = require('assert')

DatNPM(function (err, datNpm) {
  ifError(err)
  console.log('Sharing hypercores', {
    tarballs: datNpm.tarballs.key.toString('hex'),
    meta: datNpm.meta.key.toString('hex')
  })
  datNpm.startUpdating()
})
