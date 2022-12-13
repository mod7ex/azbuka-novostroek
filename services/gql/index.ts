export function apartmentsData(options = { notifyOnNetworkStatusChange: true }) {
    return useQuery(
        gql`
            query apartmentsData {
                apartmentsData {
                    count_rooms
                    min_price
                    max_price
                    min_area_total
                    max_area_total
                    decors
                    balcony_types
                    bathrooms
                }
            }
        `,
        null,
        options
    );
}
