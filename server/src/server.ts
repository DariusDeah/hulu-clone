import { AirtableBase } from "airtable/lib/airtable_base";
import Airtable, { FieldSet, Records, Table } from "airtable";
import { server } from "./index";

export const base: AirtableBase = new Airtable({
  apiKey: DB_CONFIG.API_KEY,
  endpointUrl: DB_CONFIG.ENDPOINT_URL,
}).base(DB_CONFIG.BASE);

server.listen().then(({ url }) => {
  console.log(`server running at:${url}`);
});
