class CacheService {
  private static instance: CacheService | undefined;
  private cache: Record<string, { value: any; expirationTime: number | null }> =
    {};
  private ttlSeconds: number;

  constructor(ttlSeconds: number = 0) {
    if (CacheService.instance) {
      return CacheService.instance;
    }

    this.ttlSeconds = ttlSeconds;
    CacheService.instance = this;
  }

  get(key: string): any {
    const cachedValue = this.cache[key];

    if (
      cachedValue &&
      (!cachedValue.expirationTime || cachedValue.expirationTime > Date.now())
    ) {
      return cachedValue.value;
    }

    return null;
  }

  set(key: string, value: any, ttlSeconds: number = this.ttlSeconds): void {
    const expirationTime =
      ttlSeconds > 0 ? Date.now() + ttlSeconds * 1000 : null;
    this.cache[key] = { value, expirationTime };
  }
}

export default CacheService;
