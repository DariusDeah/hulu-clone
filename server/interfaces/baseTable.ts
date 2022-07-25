import { FieldSet } from "airtable";

export interface IBASETABLE<T, U> {
  selectRecords(query?: string): Promise<FieldSet[] | undefined>;
  selectRecord(query: string): Promise<any | undefined>;
  insertRecord(data: U): Promise<any | undefined>;
  updateRecord(record: T): Promise<T | undefined>;
  deleteRecord(record: T): Promise<T | undefined>;
}
