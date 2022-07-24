import { Table, FieldSet } from "airtable";
import table from "airtable/lib/table";
import { base } from "../server";

class User {
  private table: Table<FieldSet> = base(DB_BASES.User);

  async selectRecords() {
    try {
      const records = await this.table
        .select({
          maxRecords: 3,
          view: "Grid view",
        })
        .firstPage();
      console.log(records);
    } catch (error) {
      console.error(error);
    }
  }
}

export const userTable = new User();
