var assert = nucleus.dofile("./common/assert.js")

var a = nucleus.compile("'a'", 'a')
assert(a() === 'a', "compile should return 'a'")

var err = nucleus.compile("new Error('oops')", 'test-nucleus-compile.js')
print(/\(test-nucleus-compile\.js:1\)/.test(err().stack), "nucleus must contain 'test-nucleus-compile.js'")
