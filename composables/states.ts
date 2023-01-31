import { rawFilter, RawMortgageData } from "~/utils";

export const useCurrentHome = () => useState<Numberish>("current_home", () => undefined);
export const useCurrentChoicesOption = () => useState<Numberish>("current_choices_option", () => 0);
export const useRawFilter = () => useState<ReturnType<typeof reactive<ReturnType<typeof rawFilter>>>>("filter", rawFilter);
export const useMobileFilterState = () => useState<boolean>("mobile-filter-state", () => false);
export const useCurrentPreviewedImg = () => useState<string | undefined>("current-previewed-img", () => undefined);
export const useComplexOrderValue = () => useState<string | undefined>("complex-order", () => undefined);
export const useMortgageData = () => useState("mortgage-form", RawMortgageData);
