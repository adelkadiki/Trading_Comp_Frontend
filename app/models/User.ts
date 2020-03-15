import {Role} from './Role'

export class User{

    id: number;
    name: string;
    username: string;
    password: string;
    enabled: boolean;
    role: Role;

}