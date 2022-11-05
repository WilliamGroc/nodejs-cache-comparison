import { CacheInstance } from ".";

export class InMemoryCacheInstance implements CacheInstance {
  cache: Map<string, any>;

  private static instance: InMemoryCacheInstance;

  constructor() {
    this.cache = new Map();
  }

  async setCache(key: string, value: any) {
    this.cache.set(key, value)
  }

  async hasCache(key: string) {
    return this.cache.has(key);
  }

  async getCache(key: string) {
    return this.cache.get(key);
  }

  static getInstance(): CacheInstance {
    if (this.instance)
      return this.instance;

    this.instance = new InMemoryCacheInstance();

    return this.instance;
  }
}