/**
 * Copyright 2020 Automation School, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = `
  type Query {
    authors: [Author]!
    books: [Book]!
    author(id: ID!): Author
    book(id: ID!): Book
  }

  type Mutation {
    createAuthor(author: AuthorInput!): Author
    updateAuthor(id: ID!, author: AuthorInput!): Author
    deleteAuthor(id: ID!): Author
    createBook(book: BookInput!): Book
    updateBook(id: ID!, book: BookInput!): Book
    deleteBook(id: ID!): Book
  }

  type Author {
    id: ID!
    firstName: String!
    lastName: String!
    shortBio: String!
    dateOfBirth: String!
    books: [Book]!
  }

  input AuthorInput {
    firstName: String!
    lastName: String!
    shortBio: String!
    dateOfBirth: String!
  }

  type Book {
    id: ID!
    title: String!
    yearPublished: Int
    author: Author
  }

  input BookInput {
    title: String!
    yearPublished: Int
    authorId: ID
  }
`;