export interface CacheInstance {
  cache: any;

  setCache: (key: string, value: any) => Promise<void>;
  hasCache: (key: string) => Promise<boolean>;
  getCache: (key: string) => Promise<any>;
}
