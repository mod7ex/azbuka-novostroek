export const GQL_FOR_DETAIL = `
id
name
address
count_homes
count_apartments
count_free_apartments
image { url }
images { url }
coordinates
description
min_price
max_price

banks {
  name
  percents
  family_percents
  state_percents
  country_percents
}

city {
  name
  region {
    name
  }
}

homes(
  order_by: [
    {column: "stage_id", order: ASC},
    {column: "year_end", order: ASC},
    {column: "quarter_end",order: ASC},
    {column: "name", order: ASC}
  ],
  has_free_apartments: true
) {
  id
  name
  quarter_end
  year_end
  stage {
    id
    name
  }
}

# apartments_summary
# is_has_feed
# is_has_parking
# is_has_offices
# saleDepartments {
#   id
#   name
#   email
#   phone
#   address
# }
# developer {
#   id
#   name
#   homes_statuses
#   description
#   saleDepartments {
#     id
#     name
#     email
#     phone
#     address
#   }
#   logo {
#     url
#   }
# }
# peoplesDistrict {
#   name
# }
# district {
#   name
# }
`;

export const GQL_FOR_LIST = `
  id
  name
  address
  count_homes
  count_free_apartments
  apartments_summary
  developer { name }
  city { name }
  district { name }
  image { url }
  # peoplesDistrict { name }
`;

const FILTER_AS_ARGUMENT = `
    $id: ID
    $name: String
    $region_id: ID
    $city_id: ID
    $district_id: ID
    $peoples_district_id: ID
    $decor_id: [Int]
    $count_rooms: [Int]
    $is_studio: Boolean
    $price_to: Int
    $price_from: Int
    $area_total_to: Float
    $area_total_from: Float
    $area_living_to: Float
    $area_living_from: Float
    $area_kitchen_to: Float
    $area_kitchen_from: Float
    $bathrooms: [Int]
    $year_end: Int
    $quarter_end: Int
    $stage_id: Int
    $ceiling_height: String
    $home_class: [Int]
    $home_type: [Int]
    $lift: Boolean
    $count_floors_to: Int
    $count_floors_from: Int
    $floor_to: Int
    $parking: String
    $floor_from: Int
    $has_parking: Boolean
    $has_offices: Boolean
    $balcony_types: [ID]
`;

const FILTER_AS_QUERY = `
    id: $id
    name: $name
    region_id: $region_id
    city_id: $city_id
    district_id: $district_id
    peoples_district_id: $peoples_district_id
    decor_id: $decor_id
    count_rooms: $count_rooms
    is_studio: $is_studio
    price_to: $price_to
    price_from: $price_from
    area_total_to: $area_total_to
    area_total_from: $area_total_from
    area_living_to: $area_living_to
    area_living_from: $area_living_from
    area_kitchen_to: $area_kitchen_to
    area_kitchen_from: $area_kitchen_from
    bathrooms: $bathrooms
    year_end: $year_end
    quarter_end: $quarter_end
    stage_id: $stage_id
    ceiling_height: $ceiling_height
    home_class: $home_class
    home_type: $home_type
    lift: $lift
    count_floors_to: $count_floors_to
    count_floors_from: $count_floors_from
    floor_to: $floor_to
    parking: $parking
    floor_from: $floor_from
    has_parking: $has_parking
    has_offices: $has_offices
    balcony_types: $balcony_types
`;

export const GQL_PAGINATION_PART = `
    paginatorInfo {
      count
      currentPage
      firstItem
      hasMorePages
      lastItem
      lastPage
      perPage
      total
    }
`;

export function complexes(data = GQL_FOR_LIST, filter = { page: 1, first: 12 }, options = { notifyOnNetworkStatusChange: true }) {
    return useQuery(
        gql`
    query complexes(
      $page: Int
      $first: Int
      ${FILTER_AS_ARGUMENT}
    ) {
      complexes(
        page: $page
        first: $first
        ${FILTER_AS_QUERY}
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

export function complex(id: string, data = "name", options = { notifyOnNetworkStatusChange: true }) {
    return useQuery(
        gql`
    query complex($id: ID) {
      complex(id: $id) {
        ${data}
      }
    }`,
        () => ({ id }),
        options
    );
}

export function similarComplexes(id: string, data = GQL_FOR_LIST, options = { notifyOnNetworkStatusChange: true }) {
    return useQuery(
        gql`
        query similarComplexes($id: ID) {
          similarComplexes(id: $id) {
            data {
              ${data}
            }
            ${GQL_PAGINATION_PART}
          }
        }`,
        () => ({ id }),
        options
    );
}
