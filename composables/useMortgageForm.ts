import { format_thousands } from "~/utils";

export default () => {
    const state = useMortgageData();

    const prepare = ({ rooms, home, price }: Record<"rooms" | "home" | "price", Numberish>) => {
        state.value.room_count = rooms;
        state.value.home = home;
        state.value.price = parseInt(price as string);
        // ... reset other params
    };

    const pay_per_month = (bank: any) => {
        const months = state.value.credit_period * 12;
        const sum = state.value.price - state.value.advance;
        const percents = bank[state.value.selected_percents];

        if (typeof percents === "number") {
            const percentOnMonth = percents / 100 / 12;

            const monthly_price = (sum * percentOnMonth) / (1 - Math.pow(1 + percentOnMonth, -months));

            return `${format_thousands(Math.round(monthly_price))} ₽`;
        }

        return "_";
    };

    return {
        prepare,
        pay_per_month,
        state,
    };
};
