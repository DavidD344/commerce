export interface HashCrypt {
  hash: (value: string) => Promise<string>
}
