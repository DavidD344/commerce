export function setupUncaughtExceptionHandler (): void {
  process.on('uncaughtException', (err) => {
    console.log(err.name, err.message)
    console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...')
    process.exit(1)
  })
}
