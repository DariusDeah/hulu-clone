import Airtable from "airtable";
import { AirtableBase } from "airtable/lib/airtable_base";
import { DB_BASES, DB_CONFIG } from "../config";
import { User } from "../User/user.model";

const base: AirtableBase = new Airtable({
  apiKey: DB_CONFIG.API_KEY,
  endpointUrl: DB_CONFIG.ENDPOINT_URL,
}).base(DB_CONFIG.BASE);

class DBRepository {
  UserDB = new User(base(DB_BASES.User));
}

export const dbRepository = new DBRepository();
