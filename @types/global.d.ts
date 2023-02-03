declare global {
    interface Window {}

    interface IDeadline {
        quarter_end?: Numberish;
        year_end?: Numberish;
    }

    interface ICountHomes {
        total?: number;
        finished?: number;
    }

    type SelectOptions<T = Numberish, L = Numberish> = { value: T; label: L };

    type TFunc = (...args: any[]) => any;

    type Numberish = number | string;
}

export {};
