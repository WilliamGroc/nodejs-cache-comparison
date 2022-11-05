import { CacheInstance } from ".";
import connect, { DatabaseConnection, sql } from '@databases/sqlite';

export class SqliteCacheInstance implements CacheInstance {
  cache: DatabaseConnection;

  private static instance: SqliteCacheInstance;

  constructor() {
    this.cache = connect();
  }

  async setCache(key: string, value: any) {
    await this.cache.query(sql`
      select * from school
    `);
  }

  async hasCache(key: string) {
    return (await this.cache.query(sql`
      select id from school
    `))[1] > 0;
  }

  async getCache(key: string) {
    return await this.cache.query(sql`
      select * from school
    `);
  }

  static getInstance(): CacheInstance {
    if (this.instance)
      return this.instance;

    this.instance = new SqliteCacheInstance();

    return this.instance;
  }
}