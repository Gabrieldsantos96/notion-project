export class idValidator {
  isValid(id: string): boolean {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return true
    } else {
      false
    }
  }
}
