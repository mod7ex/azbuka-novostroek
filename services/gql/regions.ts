import gql from "graphql-tag";
import { GQL_PAGINATION_PART } from "~/services/gql/utils";

export const GQL_REGIONS = `
  id
  name
  coordinates
`;

export function regions(data = GQL_REGIONS, filter = { page: 1, first: 500 }, options = { notifyOnNetworkStatusChange: true }) {
    return useQuery(
        gql`
    query regions(
      $page: Int
      $first: Int
    ) {
      regions(
        page: $page
        first: $first
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

export function region(id, data = GQL_REGIONS, options = { notifyOnNetworkStatusChange: true }) {
    return useQuery(
        gql`
    query region($id: ID) {
      region(id: $id) {
        ${data}
      }
    }`,
        () => ({ id }),
        options
    );
}

export function myRegion(data = GQL_REGIONS, options = { notifyOnNetworkStatusChange: true }) {
    return useQuery(
        gql`
    query myRegion {
      myRegion {
        ${data}
      }
    }`,
        null,
        options
    );
}
