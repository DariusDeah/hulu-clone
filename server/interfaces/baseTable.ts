import { FieldSet } from "airtable";

export interface IBASETABLE<T, U> {
  selectRecords(query?: string): Promise<T[] | undefined>;
  selectRecord(query: string): Promise<T | undefined>;
  insertRecord(data: U): Promise<any | undefined>;

  updateRecord(record: T): Promise<T | undefined>;
  deleteRecord(record: T): Promise<T | undefined>;
}
