export interface IDomainError extends Error {}

export class DomainError implements IDomainError {
  name: string;
  message: string;
  stack?: string | undefined;

  constructor(message: string, name: string) {
    (this.message = message), (this.name = name);
  }
}
