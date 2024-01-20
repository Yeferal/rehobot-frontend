import { Role } from "./Role";

export interface Account {
    account_id: number;
    username: string;
    creation_date: Date;
    password?: string;
    verified: boolean;
    active: boolean;
    role?: Role;
};