var assert = nucleus.dofile("./common/assert.js")

assert(nucleus.readfile('../fixtures/a.js') === "'a'\n", 'a.js must return it\'s raw source')

assert(nucleus.readfile('../fixtures/DOES-NOT-EXIST') === null, 'Non-existant file should return null')
