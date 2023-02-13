export type idValidatorAdapter = {
  isValid(field: string): Error | boolean
}
