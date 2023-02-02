declare global {
    interface Window {}

    interface IDeadline {
        quarter_end?: Numberish;
        year_end?: Numberish;
    }

    type TFunc = (...args: any[]) => any;

    type Numberish = number | string;

    type SelectOptions<T = Numberish> = { value: T; label: Numberish };
}

export {};
