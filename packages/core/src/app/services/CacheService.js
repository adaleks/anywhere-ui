class CacheService {
  constructor(ttlSeconds = 0) {
    if (CacheService.instance) {
      return CacheService.instance;
    }

    this.cache = {};
    this.ttlSeconds = ttlSeconds;
    CacheService.instance = this;
  }

  get(key) {
    const cachedValue = this.cache[key];

    if (
      cachedValue &&
      (!cachedValue.expirationTime || cachedValue.expirationTime > Date.now())
    ) {
      return cachedValue.value;
    }

    return null;
  }

  set(key, value, ttlSeconds = this.ttlSeconds) {
    const expirationTime =
      ttlSeconds > 0 ? Date.now() + ttlSeconds * 1000 : null;
    this.cache[key] = { value, expirationTime };
  }
}

export default CacheService;
