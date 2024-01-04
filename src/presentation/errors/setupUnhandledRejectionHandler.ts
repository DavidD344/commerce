export function setupUnhandledRejectionHandler (): void {
  process.on('setupUnhandledRejectionHandler', (reason: Error, promise: Promise<any>) => {
    console.log(reason.name, reason.message)
    console.log('UNHANDLED REJECTION! 💥 Shutting down...')
    process.exit(1)
    throw reason
  })
}
