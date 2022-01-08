const readStorageItem = (name) => {
  return JSON.parse(localStorage.getItem(name));
};

const writeStorageItem = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};

const removeStorageItem = (name) => {
  localStorage.removeItem(name);
};

const cleanStorege = () => {
  localStorage.clear();
};

const fnLocalStorage = {
  readStorageItem,
  writeStorageItem,
  removeStorageItem,
  cleanStorege,
};

export default fnLocalStorage;
