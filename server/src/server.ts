import { AirtableBase } from "airtable/lib/airtable_base";
import Airtable, { FieldSet, Records, Table } from "airtable";
import { server } from "./index";
import { DB_BASES, DB_CONFIG } from "./config";

server.listen().then(({ url }) => {
  console.log(`server running at:${url}`);
});
