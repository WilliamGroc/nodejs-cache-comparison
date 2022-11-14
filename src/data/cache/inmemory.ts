import { addMinutes, addSeconds } from "date-fns";
import { CacheInstance } from ".";
import fs from 'fs';

export class InMemoryCacheInstance implements CacheInstance {
  cache: Map<string, [any, Date]>;

  private static instance: InMemoryCacheInstance;

  constructor() {
    this.cache = new Map();

    const filesPath = fs.readdirSync('./cache');

    filesPath.filter(file => file.includes('.cache')).forEach(file => {
        const data = fs.readFileSync(`./cache/${file}`, 'utf8');
        console.log('Load data', file.split('.')[0])
        this.setCache(file.split('.')[0], JSON.parse(data))
    })
  }

  async setCache(key: string, value: any, timeout?: Date) {
    this.cache.set(key, [value, timeout || addSeconds(new Date(), 10)]);
    fs.mkdirSync('./cache', { recursive: true });
    fs.writeFile(`./cache/${key}.cache.json`, JSON.stringify(value), function (err) { if (err) throw err; console.log('Fichier créé !'); })
  }

  async hasCache(key: string) {
    return this.cache.has(key);
  }

  async getCache(key: string) {
    return this.cache.get(key)?.[0];
  }

  async isExpired(key: string) {
    const timeout = this.cache.get(key)?.[1];
    if (timeout)
      return timeout < new Date()

    return true;
  }

  static getInstance(): CacheInstance {
    if (this.instance)
      return this.instance;

    this.instance = new InMemoryCacheInstance();

    return this.instance;
  }
}