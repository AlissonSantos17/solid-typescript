import { uuid as v4 } from "uuidv4";

export class User {
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props); // Pega todas as propriedades do Props
    
    if(!id) {
      this.id = v4();
    }
  }
}
