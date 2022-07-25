import { FieldSet } from "airtable";

export interface IBASETABLE<T> {
  selectRecords(query?: string): Promise<FieldSet[] | undefined>;
  selectRecord(query: string): Promise<any | undefined>;
  updateRecord(record: T): Promise<T | undefined>;
  deleteRecord(record: T): Promise<T | undefined>;
}
