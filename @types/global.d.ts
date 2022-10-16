declare global {
    interface Window {}

    type TFunc = (...args: any[]) => any;

    type Numberish = number | string;
}

export {};
