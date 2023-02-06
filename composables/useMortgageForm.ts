import { format_thousands, RawMortgageData } from "~/utils";

interface Props {
    months: number;
    price: number;
    advance: number;
    percents: number;
}

const raw_calculator = ({ months, price, advance, percents }: Props) => {
    if (typeof percents === "number") {
        const percentOnMonth = percents / (100 * 12);

        const sum = price - advance;

        const monthly_price = (sum * percentOnMonth) / (1 - Math.pow(1 + percentOnMonth, -months));

        return `${format_thousands(Math.round(monthly_price))} ₽`;
    }

    return "_";
};

const optimal_pay_per_month = (bank: any, price: number) => {
    const months = 15 * 12;
    const percents = bank?.percents;

    return raw_calculator({
        price,
        months,
        percents,
        advance: price * 0.15,
    });
};

export default () => {
    const state = useMortgageData();

    const prepare = ({ rooms, home, price }: Record<"rooms" | "home" | "price", Numberish>) => {
        state.value.room_count = rooms;
        state.value.home = home;
        state.value.price = parseInt(price as string);
        // ... reset other params
    };

    const reset = () => {
        state.value = RawMortgageData();
    };

    const pay_per_month = (bank: any) => {
        const months = state.value.credit_period * 12;
        const percents = bank[state.value.selected_percents];

        return raw_calculator({
            price: state.value.price,
            months,
            percents,
            advance: state.value.advance,
        });
    };

    return {
        prepare,
        pay_per_month,
        state,
        reset,
        optimal_pay_per_month,
    };
};
