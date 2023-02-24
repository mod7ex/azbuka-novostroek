import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";
import { GQL_PAGINATION_PART } from "~/services/gql/utils";

export const GQL_DISTRICTS = `
  id
  name
`;

type Props = Partial<Record<"page" | "first" | "city_id", number>>;

export function districts(data = GQL_DISTRICTS, filter: Props = { page: 1, first: 500 }, options = { notifyOnNetworkStatusChange: true }) {
    return useQuery(
        gql`
        query districts(
            $page: Int
            $first: Int
            $city_id: ID
            ) {
            districts(
                page: $page
                first: $first
                city_id: $city_id
            ) {
                data {
                    ${data}
                }
                ${GQL_PAGINATION_PART}
            }
        }`,
        () => filter,
        options
    );
}
