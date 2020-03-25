// src/graphql/MyApp/schemas/UserPostSchema.js

const MODEL_NAME = 'UserPost';

const UserPostSchema = {
    model: `
        type ${MODEL_NAME} {
            id: Int!
            title: String!
            content: String!
            hits: Int!
            created: Date
            updated: Date
        }
    `,

    query: `
        readUserPost(id: Int!): ${MODEL_NAME}
        readUserPosts(offset: Int!, limit: Int!): [${MODEL_NAME}]
    `,
};

module.exports = UserPostSchema;
