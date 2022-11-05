import { CacheInstance } from ".";
import { createClient, RedisClientType } from 'redis';

export class RedisCacheInstance implements CacheInstance {
  cache: RedisClientType;

  private static instance: RedisCacheInstance;

  constructor() {
    this.cache = createClient({
      url: 'redis://default:redispw@localhost:49153'
    });
    this.cache.connect();
  }

  async setCache(key: string, value: any) {
    await this.cache.set(key, value)
  }

  async hasCache(key: string) {
    return !!(await this.cache.get(key))
  }

  async getCache(key: string) {
    return this.cache.get(key);
  }

  static getInstance(): CacheInstance {
    if (this.instance)
      return this.instance;

    this.instance = new RedisCacheInstance;

    return this.instance;
  }
}