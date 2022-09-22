declare global {
    interface Window {}

    type TFunc = (...args: any[]) => any;
}

export {};
