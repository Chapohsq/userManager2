import { Address } from "./address";
import { Company } from "./company";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}


export class UserHelper{

    static upperName(user: User): string{
        return user.name.toUpperCase()
    }


}




