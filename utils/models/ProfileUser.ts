import { Account } from "./Account";
import { Role } from "./Role";

export interface ProfileUser {
    profile_user_id: string;
    first_name: string;
    last_name: string;
    birth_date: Date;
    phone_number: string;
    email: string;
    account?: Account
};
