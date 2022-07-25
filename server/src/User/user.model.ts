import { Table, FieldSet } from "airtable";
import { IBASETABLE } from "../../interfaces/baseTable";
export class User implements IBASETABLE<FieldSet> {
  private table;

  constructor(table: Table<FieldSet>) {
    this.table = table;
  }

  async selectRecords(query?: string) {
    try {
      const records = await this.table
        .select({
          maxRecords: 3,
          view: "Grid view",
          fields: ["first_name", "last_name", "email", "id", "photo"],
          filterByFormula: query ?? "",
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

  async selectRecord(query: string) {
    try {
      const record = await this.table
        .select({
          filterByFormula: query,
          maxRecords: 1,
        })
        .firstPage();

      let user;

      record.forEach((record) => {
        user = record.fields;
      });
      console.log(user);
      return user;
    } catch (error) {
      console.error(error);
    }
  }

  async updateRecord(record: FieldSet): Promise<FieldSet | undefined> {
    throw new Error("Method not implemented.");
  }
  async deleteRecord(record: FieldSet): Promise<FieldSet | undefined> {
    throw new Error("Method not implemented.");
  }
}
