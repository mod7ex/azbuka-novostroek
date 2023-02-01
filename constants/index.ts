export enum SECTIONS {
    DESCRIPTION = "description",
    STOCK = "stock",
    CHARACTERISTICS_AND_APARTMENTS = "characteristics_and_apartments",
    MORTGAGE = "mortgage",
    REVIEWS_QR = "reviews_q_and_a",
    COMPLEXES = "complex-listings",
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

export enum COMPLEX_ORDER {
    ASCENDING_PRICE = "по возрастанию цены",
    DESCENDING_PRICE = "по убыванию цены",
    NEAREST_DELIVERY_DATE = "ближайшему сроку сдачи",
}

export enum CONTACT {
    ADMIN_EMAIL = "admin@admin.com",
    PHONE = "+7 (863) 333-27-27",
    RAW_PHONE = "88633332727",
}

export const DONE_DEADLINE = { quarter_end: -1, year_end: -1 };
