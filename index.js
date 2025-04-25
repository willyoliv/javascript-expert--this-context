'use strict';

const { watch, promises: { readFile } } = require('fs');

class File {
  watch(event, filename) {
    console.log('this', this);
    console.log('arguments', Array.prototype.slice.call(arguments));
    this.showContent(filename);
  }

  async showContent(filename) {
    console.log((await readFile(filename)).toString());
  }
}

const file = new File();

// In this case, the 'this' inside the method refers to the 'watch' context from fs.watch,
// not the File class. So 'this.showContent' doesn't behave as expected.
// watch(__filename, file.watch);

// Alternative approach to avoid inheriting 'this' from fs.watch:
// This creates an anonymous function that properly uses the 'file' instance.
// This avoids the issue without using 'bind' (though bind is more common).
// watch(__filename, (event, filename) => file.watch(event, filename));

// Using 'bind' makes the 'this' context explicit.
// It returns a new function where 'this' always refers to 'file',
// regardless of how or where it's called.
watch(__filename, file.watch.bind(file));

// Difference between 'bind', 'call', and 'apply':
// 'bind' returns a new function with fixed 'this'.
// 'call' invokes the function immediately with arguments passed individually.
file.watch.call({ showContent: () => console.log('call: hey sinon!') }, null, __filename);

// 'apply' is similar to 'call', but expects the arguments as an array.
file.watch.apply({ showContent: () => console.log('apply: hey sinon!') }, [null, __filename]);
