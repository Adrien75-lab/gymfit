const localStorageMock = (() => {
    let store = {};

    return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => {
            store[key] = value.toString();
        },
        removeItem: (key) => {
            delete store[key];
        },
        clear: () => {
            store = {};
        },
        getAll: () => store,
    };
})();

Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
});

test('localStorageMock should have getItem, setItem, removeItem, and clear methods', () => {
    expect(localStorageMock.getItem).toBeDefined();
    expect(localStorageMock.setItem).toBeDefined();
    expect(localStorageMock.removeItem).toBeDefined();
    expect(localStorageMock.clear).toBeDefined();
});