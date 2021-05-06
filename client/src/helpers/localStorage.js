// export const asyncLocalStorage = {
//     setItem: async (key: string, value: string) => {
//         await null;
//         return localStorage.setItem(key, value);
//     },
//     getItem: async (key: string): Promise<string | null> => {
//         await null;
//         return localStorage.getItem(key);
//     }
// };


export const asyncLocalStorage = {
    setItem: async (key, value) => {
        await null;
        return localStorage.setItem(key, value);
    },
    getItem: async (key) => {
        await null;
        return localStorage.getItem(key);
    }
};


const data = JSON.parse(asyncLocalStorage.getItem('userData'))

