import express, { Express } from "express";
import {customerModel} from "./models/Customer.mjs";
import mongoose from "mongoose";
import {generateAnonymizedRecord, generateRecord} from "./utils.mjs";

const DEFAULT_PORT = 3000
const DEFAULT_MONGO_URI = 'mongodb://localhost:27017/webxwiz'
const MAX_ENTRIES_RANDOMIZED=10
const GENERATE_FREQUENCY_MS=200

try {
    console.log('[db] Connected to MongoDB');
    await mongoose.connect(process.env.DB_URI || DEFAULT_MONGO_URI);
} catch (e) {
    console.log(e)
}


const app: Express = express();
const port = process.env.PORT || DEFAULT_PORT;

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

setInterval( function(){
    const numberOfEntries = Math.floor(Math.random() * MAX_ENTRIES_RANDOMIZED) + 1;
    const records = Array.from({length: numberOfEntries}).map(() => generateRecord());
    customerModel.bulkSave(records);
}, GENERATE_FREQUENCY_MS)

const changeSteam = customerModel.watch();

changeSteam.on('change', next => {
    const anonymizedCustomer = generateAnonymizedRecord(next.fullDocument);
    anonymizedCustomer.save()
})
