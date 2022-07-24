export interface IBASETABLE<T> {
  selectRecords(): Promise<T[] | undefined>;
  selectRecord(): Promise<T | undefined>;
  updateRecord(record: T): Promise<T | undefined>;
  deleteRecord(record: T): Promise<T | undefined>;
}
