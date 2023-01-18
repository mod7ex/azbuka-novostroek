export enum SECTIONS {
    DESCRIPTION = "description",
    STOCK = "stock",
    CHARACTERISTICS_AND_APARTMENTS = "characteristics_and_apartments",
    MORTGAGE = "mortgage",
    REVIEWS_QR = "reviews_q_and_a",
}

export enum MAP_ZOOM {
    DEFAULT = 3,
    FOCUS = 15,
}

export enum MS {
    DAY = 1000 * 60 * 60 * 24,
    HOUR = 1000 * 60 * 60,
    MIN = 1000 * 60,
    SEC = 1000,
}

export enum PRICE {
    MIN = 500000,
    MAX = 10000000,
}

export const MIN_TOTAL_AREA = 10;

export const DONE_DEADLINE = { quarter_end: -1, year_end: -1 };
