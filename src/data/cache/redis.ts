import { CacheInstance } from ".";

export class RedisCacheInstance implements CacheInstance {
  cache: Map<string, any>;

  private static instance: RedisCacheInstance;

  constructor() {
    this.cache = new Map();
  }

  setCache(key: string, value: any) {
    this.cache.set(key, value)
  }

  hasCache(key: string) {
    return this.cache.has(key);
  }

  getCache(key: string) {
    return this.cache.get(key);
  }

  static getInstance(): CacheInstance {
    if (this.instance)
      return this.instance;

    this.instance = new RedisCacheInstance;
    
    return this.instance;
  }
}