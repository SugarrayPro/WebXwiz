import {anonymizedCustomerModel, customerModel} from "./models/Customer.mjs";
import {faker} from "@faker-js/faker";
type schemaType = { [key: string]: string | schemaType }

const propertiesToTransform = ['firstName', 'lastName', 'line1', 'line2', 'postcode'];
const preset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const TRANSFORM_SYMBOLS_COUNT = 8;

export function generateRecord() {
    return new customerModel({
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: {
            line1: faker.location.streetAddress(),
            line2: faker.location.secondaryAddress(),
            postcode: faker.location.zipCode(),
            city: faker.location.city(),
            state: faker.location.state({ abbreviated: true }),
            country: faker.location.countryCode(),
        }
    })
}

function defaultTransformation(): string {
    let resultString = '';

    for (let i = 0; i< TRANSFORM_SYMBOLS_COUNT; i++) {
        const randomCharCode: number = Math.floor(Math.random() * preset.length + 1);
        const randomChar: string = preset.charAt(randomCharCode);
        resultString += randomChar;
    }
    return resultString;
}


function transformRecord(record: schemaType) {
    Object.entries(record).forEach(([key, value]) => {
        if(propertiesToTransform.includes(key)) {
            record[key] = defaultTransformation();
        }

        if(key === 'email') {
            record[key] = transformEmail(value as string);
        }

        if(typeof value === 'object') {
            record[key] = transformRecord(value);
        }
    })

    return record;
}

export function transformEmail(email: string): string {
    const emailRegex: RegExp = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const match = email.match(emailRegex);

    if(match) {
        const [_, username, domain] = match;
        return defaultTransformation().concat('@', domain);
    }

    return email
}

export function generateAnonymizedRecord(record: schemaType) {
    const anonymizedRecord = transformRecord(record);
    return new anonymizedCustomerModel(anonymizedRecord);
}

