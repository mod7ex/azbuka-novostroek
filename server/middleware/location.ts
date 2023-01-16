// import { Reader } from "@maxmind/geoip2-node";
// import fs from "fs";

// const dbBuffer = fs.readFileSync("../../db/city.mmdb");

// This reader object should be reused across lookups as creation of it is
// expensive.
// const reader = Reader.openBuffer(dbBuffer);

// https://youtu.be/S9X5x51wxkg
// https://www.npmjs.com/package/ip
// https://dev.maxmind.com/geoip/geolocate-an-ip/databases?lang=en

export default defineEventHandler((event) => {
    // const response = reader.city("105.66.129.164");
    // console.log(response.country.isoCode);
});
