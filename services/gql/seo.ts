/*
    id: ID
    meta: JSON
    robots: String
    js: String
    css: String
    phone: String
    email: String
    address: String
    whatsapp: JSON
    permissions: JSON
    created_at: DateTime
    updated_at: DateTime
*/

export function seo(options = { notifyOnNetworkStatusChange: true }) {
    return useLazyQuery(
        gql`
        query seo() {
          seo {
            id
            meta
            robots
            css
            phone
            email
            address
            whatsapp
            permissions
            created_at
            updated_at
          }
        }`,
        null,
        options
    );
}
