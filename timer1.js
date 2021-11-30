for(const arg of process.argv.splice(2)) {
  if (arg > -1 && Number.isInteger(arg + 1 - 1)) {
    setTimeout(() => console.log('\x07'), arg * 1000)
  }
}