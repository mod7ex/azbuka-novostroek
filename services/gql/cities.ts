import gql from "graphql-tag";
import { GQL_PAGINATION_PART } from "~/services/gql/utils";

export const GQL_USERS = `
  id
  formatted_name
`;

export const GQL_CITIES = `
  id
  name
  region_id
  coordinates
`;

type Props = Partial<Record<"page" | "first" | "region_id", number>>;

export function cities(data = GQL_CITIES, filter: Props = { page: 1, first: 500 }, options = { notifyOnNetworkStatusChange: true }) {
    return useLazyQuery(
        gql`
        query cities(
            $page: Int
            $first: Int
            $region_id: ID
            # $region_ids: [ID]
        ) {
        cities(
            page: $page
            first: $first
            region_id: $region_id
            # region_ids: $region_ids
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

export function citiesAll(data = GQL_CITIES, filter = {}, options = { notifyOnNetworkStatusChange: true }) {
    return useQuery(
        gql`
        query citiesAll(
        $region_id: ID
        $region_ids: [ID]
        $department: Boolean
        $show_in_graph: Boolean
        ) {
        citiesAll(
            region_id: $region_id
            region_ids: $region_ids
            department: $department
            show_in_graph: $show_in_graph
        ) {
            ${data}
        }
        }`,
        () => filter,
        options
    );
}

export function city(id, data = GQL_CITIES, options = { notifyOnNetworkStatusChange: true }) {
    return useQuery(
        gql`
    query city($id: ID) {
      city(id: $id) {
        ${data}
      }
    }`,
        () => ({ id }),
        options
    );
}
