export function setSessionStorage(key: string, value: unknown) {
  try {
    sessionStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.log(e);
  }
}

export function getSessionStorage(key: string) {
  try {
    const value = sessionStorage.getItem(key);
    return value ? JSON.parse(value) : undefined;
  } catch (error) {
    console.log(error);
  }
}

export function removeSessionStorage(key: string) {
  try {
    sessionStorage.removeItem(key);
  } catch (e) {
    console.log(e);
  }
}
