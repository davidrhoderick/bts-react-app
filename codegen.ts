import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "src/generated/schema.graphql",
  documents: ["src/operations/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./src/generated/gql/": {
      preset: "client",
    },
  },
};

export default config;
