import { idValidatorAdapter } from 'presentation/models/idValidator'

export class idValidator implements idValidatorAdapter {
  isValid(id: string): boolean {
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      return true
    } else {
      false
    }
  }
}
