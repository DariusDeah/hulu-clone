import { Table, FieldSet } from "airtable";
import { IBASETABLE } from "../../interfaces/baseTable";
import { IUser } from "./user.typeDef";
import { v4 as uuidv4 } from "uuid";
export class User implements IBASETABLE<FieldSet, IUser> {
  private table;

  constructor(table: Table<FieldSet>) {
    this.table = table;
  }

  async insertRecord(data: IUser) {
    try {
      const createdRecord = await this.table.create({
        id: uuidv4(),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        photo: data.photo,
      });
      return createdRecord.fields;
    } catch (error) {
      console.error(error);
    }
  }

  async selectRecords(query?: string) {
    try {
      const records = await this.table
        .select({
          view: "Grid view",
          fields: ["first_name", "last_name", "email", "id", "photo"],
          filterByFormula: query ?? "",
        })
        .firstPage();

      const users: FieldSet[] = [];

      records.forEach((record) => {
        users.push(record.fields);
      });
      console.log(users);
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
