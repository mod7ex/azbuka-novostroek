import gql from "graphql-tag";
// import { GQL_PAGINATION_PART } from "~/paginationUtilites.js";

export const GQL_FOR_DETAIL = `
  id
  address
  summary
  count_floors
  ceiling_height
  lift
  freight_lift
  building
  developer_name
  documentation
  homeClass { name }
  stage {
    id
    name
  }
  discounts {
    id
    # order
    date_end
    title
    # amount
    description
  }
  
  # name
  # count_apartments
  # count_free_apartments
  # count_offices
  # count_free_offices
  # count_parking
  # count_free_parking
  # count_entrances
  # is_free_layout
  # issuance_of_keys
  # energy_class
  # living_area
  # count_playgrounds
  # count_sportgrounds
  # count_garbage_places
  # is_has_ramp
  # is_has_lowering_platforms
  # count_wheelchair_lifts
  # rpd
  # report
  # other
  # permits
  # merged_at
  # sales {
  #   id
  #   name
  #   start_at
  #   end_at
  #   text
  #   image {
  #     url
  #   }
  # }
  # salesDynamics {
  #   id
  #   avg_price_area
  #   avg_area
  #   realised
  #   month
  #   year
  # }

  # homeType { name }
  # decors { name }
  #  entrances(
  #    order_by: [
  #      {column: "name", order: ASC},
  #    ],
  #  ) {
  #    name
  #
  #    floors(
  #      order_by: [
  #        {column: "number", order: DESC},
  #      ],
  #    ) {
  #      number
  #      layout_url
  #
  #      apartments(
  #        order_by: [
  #          {column: "order", order: ASC},
  #          {column: "number", order: ASC},
  #        ],
  #      ) {
  #        id
  #        number
  #        price
  #        price_area
  #        final_price
  #        final_price_area
  #        area_total
  #        count_rooms
  #        is_studio
  #        is_euro
  #        is_assignment
  #        has_discounts
  #        step_over_color
  #        step_over_name
  #        assignment_agreement
  #        assignment_status
  #
  #        area_living
  #        area_kitchen
  #        count_loggias
  #        area_loggias
  #
  #        status {
  #          name
  #          color
  #          is_disabled
  #          is_free
  #          hide_price
  #        }
  #      }
  #    }
  #  }
`;

/*

export const GQL_FOR_CHESS = `
  id
  name
  rooms

  complex {
    chess_links
  }

  offices(
    order_by: [
      {column: "number", order: ASC},
    ],
  ) {
    id
    number
    price
    layout_url
    floor {
      number
    }
    status {
      name
    }
  }

  parking(
    order_by: [
      {column: "number", order: ASC},
    ],
  ) {
    id
    number
    price
    layout_url
    floor {
      number
    }
    status {
      name
    }
  }

  storerooms(
    order_by: [
      {column: "number", order: ASC},
    ],
  ) {
    id
    number
    price
    layout_url
    floor {
      number
    }
    status {
      name
    }
  }

  entrances(
    order_by: [
      {column: "name", order: ASC},
    ],
  ) {
    name

    floors(
      order_by: [
        {column: "number", order: DESC},
      ],
    ) {
      number
      layout_url

      apartments(
        order_by: [
          {column: "order", order: ASC},
          {column: "number", order: ASC},
        ],
      ) {
        id
        number
        price
        price_area
        final_price
        final_price_area
        area_total
        count_rooms
        is_studio
        is_euro
        is_assignment
        has_discounts
        step_over_color
        step_over_name
        assignment_agreement
        assignment_status

        status {
          name
          color
          is_disabled
          is_free
          hide_price
        }
      }
    }
  }
`;

export const GQL_FOR_COMPARE = `
  id
  name
  address
  quarter_end
  year_end
  count_floors
  count_apartments
  count_free_apartments
  count_offices
  count_free_offices
  count_parking
  count_free_parking
  count_entrances
  ceiling_height
  summary
  is_free_layout
  issuance_of_keys
  energy_class
  living_area
  count_playgrounds
  count_sportgrounds
  count_garbage_places
  lift
  freight_lift
  is_has_ramp
  is_has_lowering_platforms
  count_wheelchair_lifts
  rpd
  report
  other
  permits
  building
  merged_at
  developer_name
  complex_id

  complex {
    id
    name
    address
    count_homes
    apartments_summary
    homes(
      has_free_apartments: true
    ) {
      id
      name
    }

    city {
      name
    }

    developer {
      name
    }

    district {
      name
    }

    images {
      url
    }
  }

  images {
    url
  }

  homeClass {
    name
  }

  homeType {
    name
  }

  decors {
    name
  }
`;

export const GQL_FOR_PARSED_HOME = `
  id
  name
  year_end
  quarter_end
  count_apartments

  stage {
    id
    name
  }

  complex {
    id
    name

    parsedComplexes {
      id
      name
    }
  }

  parsedHome {
    id
    home_id

    complex {
      id
      name
    }
  }
`;

*/

export function homesData(options = { notifyOnNetworkStatusChange: true }) {
    return useQuery(
        gql`
            query homesData {
                homesData {
                    deadlines
                    home_type
                    home_type
                    home_class
                    count_floors
                    keys
                }
            }
        `,
        null,
        options
    );
}

export function home(id, data = "name", options = { notifyOnNetworkStatusChange: true }) {
    return useLazyQuery(
        gql`
        query home($id: ID) {
          home(id: $id) {
            ${data}
          }
        }`,
        id,
        {
            ...options,
            // fetchPolicy: 'cache-and-network',
        }
    );

    /*
    if (!id || isObject(id)) {
        return useLazyQuery(
            gql`
            query home($id: ID) {
              home(id: $id) {
                ${data}
              }
            }`,
            id,
            {
                ...options,
                // fetchPolicy: 'cache-and-network',
            }
        );
    }

    return useQuery(
        gql`
        query home($id: ID) {
          home(id: $id) {
            ${data}
          }
        }`,
        () => ({ id }),
        options
    );
*/
}

// export function myHomes(
//   data = 'id',
//   options = { notifyOnNetworkStatusChange: true },
// ) {
//   return useQuery(gql`
//     query myHomes {
//       myHomes(order_by: { column: "complex_id", order: ASC }) {
//         ${data}
//       }
//     }`, null, options);
// }

// export function allHomesForParsedHome(
//   data,
//   options = { notifyOnNetworkStatusChange: true, fetchPolicy: 'no-cache' },
// ) {
//   return useQuery(gql`
//     query allHomesForParsedHome($complex_id: ID) {
//       allHomesForParsedHome(complex_id: $complex_id) {
//         ${GQL_FOR_PARSED_HOME}
//       }
//     }`, data, options);
// }

// export const createHome = (data) => useMutation(gql`
//     mutation createHome($name: String!) {
//       createHome(name: $name) {
//         id,
//         name
//       }
//     }
//   `, {
//   variables: data,
// });

// export function homesWithoutParsedHome(
//   data = 'name',
//   filter = { page: 1, first: 15 },
//   options = { notifyOnNetworkStatusChange: true },
// ) {
//   return useQuery(gql`
//     query homesWithoutParsedHome(
//       $page: Int
//       $first: Int
//     ) {
//       homesWithoutParsedHome(
//         page: $page
//         first: $first
//       ) {
//         data {
//           ${data}
//         }
//        ${GQL_PAGINATION_PART}
//       }
//     }`, () => filter, options);
// }
