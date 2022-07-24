import { AirtableBase } from "airtable/lib/airtable_base";
import Airtable, { FieldSet, Records, Table } from "airtable";
import { server } from "./index";

const base: AirtableBase = new Airtable({
  apiKey: DB_CONFIG.API_KEY,
  endpointUrl: DB_CONFIG.ENDPOINT_URL,
}).base(DB_CONFIG.BASE);

const table: Table<FieldSet> = base(DB_BASES.User);

const selectRecords = async (): Promise<void | undefined> => {
  try {
    const records = await table
      .select({
        maxRecords: 3,
        view: "Grid view",
      })
      .firstPage();
    console.log(records);
  } catch (error) {
    console.error(error);
  }
};

server.listen().then(({ url }) => {
  console.log(`server running at:${url}`);
});

selectRecords();
