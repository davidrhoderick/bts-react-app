import type { IGraphQLConfig } from 'graphql-config'
 
const config: IGraphQLConfig = {
  schema: './src/generated/schema.graphql',
  documents: './src/**/*.{ts,tsx,graphql,gql}'

}
 
export default config