import NodeCache from "node-cache";
import { CacheInstance } from ".";

export class NodeCacheInstance implements CacheInstance {
  cache: NodeCache;

  private static instance: NodeCacheInstance;

  constructor() {
    this.cache = new NodeCache();
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

    this.instance = new NodeCacheInstance();

    return this.instance;
  }
}