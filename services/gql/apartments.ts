import gql from "graphql-tag";

export const GQL_FOR_DETAIL = `
id
number
price
price_area
final_price
final_price_area
area_total
count_rooms
is_studio
is_assignment
has_discounts
step_over_color
step_over_name
assignment_agreement
assignment_status
assignment_contact
assignment_phone
assignment_info
layout_url
sale_price
area_total
area_calculated
area_without_balconies
area_living
area_kitchen
count_loggias
count_balconies
area_loggias
area_balconies
is_grow_last_price
difference_last_price
created_at

apartmentPrices {
  id
  price
  difference
  created_at
}

assignmentPhotos {
  id
  url
}

entrance {
  name
}

floor {
  number
}

decors {
  id
  name
  full_price
  full_price_area
}

status {
  name
  color
  is_disabled
  is_free
  hide_price
}
`;

export function apartmentsData(options = { notifyOnNetworkStatusChange: true }) {
    return useLazyQuery(
        gql`
            query apartmentsData {
                apartmentsData {
                    count_rooms
                    min_price
                    max_price
                    min_area_total
                    max_area_total
                    # decors
                    # balcony_types
                    # bathrooms
                }
            }
        `,
        null,
        options
    );
}

// -------------------------------------------------------------------------

export const APARTMENT_DETAILS = `
  id
  number
  price
  price_area
  area_total
  count_rooms
  area_living
  area_kitchen
  layout_url
  difference_last_price
  is_grow_last_price
  
  # status {
  #   id
  #   name
  #   color
  #   order
  #   is_disabled
  #   is_free
  #   is_sold
  #   hide_price
  #   not_demo
  #   feed_yandex
  #   feed_avito
  #   feed_cian
  #   feed_domclick
  #   created_at
  #   updated_at
  # }
  # final_price
  # count_loggias
  # area_loggias
`;

const APARTMENTS_FILTER_AS_ARGUMENT = `
  $home_id: ID,
  $count_rooms: [Int],
  $is_studio: Boolean,
`;

const APARTMENTS_FILTER_AS_QUERY = `
  home_id: $home_id,
  count_rooms: $count_rooms,
  is_studio: $is_studio,
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

export type Filter = Partial<{
    page: Numberish;
    first: Numberish;
    home_id: Numberish;
    count_rooms: Numberish[];
    is_studio: boolean;
}>;

export function apartments(filter: Filter, data = APARTMENT_DETAILS, options = { notifyOnNetworkStatusChange: true }) {
    return useLazyQuery(
        gql`
        query apartments(
          $page: Int
          $first: Int
          ${APARTMENTS_FILTER_AS_ARGUMENT}
        ) {
          apartments(
            page: $page
            first: $first
            ${APARTMENTS_FILTER_AS_QUERY}
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
