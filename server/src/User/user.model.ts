import { Table, FieldSet } from "airtable";
import { IBASETABLE } from "../../interfaces/baseTable";
export class User implements IBASETABLE<FieldSet> {
  private table;

  constructor(table: Table<FieldSet>) {
    this.table = table;
  }

  async selectRecords() {
    try {
      const records = await this.table
        .select({
          maxRecords: 3,
          view: "Grid view",
        })
        .firstPage();
      const users: FieldSet[] = [];

      records.forEach((record) => {
        users.push(record.fields);
      });

      return users;
    } catch (error) {
      console.error(error);
    }
  }
}
