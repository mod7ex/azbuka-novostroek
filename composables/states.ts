import { rawFilter } from "~/utils";

export const useCurrentHome = () => useState<Numberish>("current_home", () => undefined);
export const useCurrentChoicesOption = () => useState<Numberish>("current_choices_option", () => 0);
export const useRawFilter = () => useState<ReturnType<typeof reactive<ReturnType<typeof rawFilter>>>>("filter", rawFilter);
export const useMobileFilterState = () => useState<boolean>("mobile-filter-state", () => false);
