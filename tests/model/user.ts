import { faker } from "@faker-js/faker";

export type User = {

    uniqueid: number;
    firstname: string;
    lastname: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
    phone: string;
    ssn: string;
    username: string;
    password: string;

};

export function createUser() : User {
    let user = { 
        uniqueid: Date.now(),        
        firstname: faker.person.firstName(),
        lastname: faker.person.lastName(),
        address: faker.location.direction(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipcode: faker.location.zipCode(),
        phone: faker.phone.number(),
        ssn: faker.string.numeric(9),
        username: faker.internet.username(),
        password: faker.internet.password()
    }
    return user;
}
