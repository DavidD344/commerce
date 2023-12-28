export function double (x: number): number {
  console.log(1)
  return x * 2
}

export function concat (...args: string[]): string {
  return args.reduce((result, param) => result + param, '')
}
