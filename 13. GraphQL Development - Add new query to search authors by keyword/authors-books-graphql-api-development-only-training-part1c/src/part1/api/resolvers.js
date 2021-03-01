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
module.exports = {
  
  Query: {
    authors: (obj, args, { data }) => {
      return data.authors
    },
    books: (obj, args, { data }) => {
      return data.books
    },
    author: (obj, args, { data }) => {
      const results = data.authors.filter(author => author.id === Number.parseInt(args.id));
      return results && results.length ? results[0] : null
    },
    book: (obj, args, { data }) => {
      const results = data.books.filter(book => book.id === Number.parseInt(args.id));
      return results && results.length ? results[0] : null
    }
  },
  Author: {
    books: (obj, args, { data }) =>
      data.books.filter(book => book.authorId === obj.id),
  },
  Book: {
    author: (obj, args, { data }) => data.authors.filter(author => author.id === obj.authorId)[0], 
  },
  Mutation: {
    createAuthor: (obj, args, { data }) => {
      const author = {
        id: data.nextAuthorId,
        firstName: args.author.firstName,
        lastName: args.author.lastName,
        shortBio: args.author.shortBio,
        dateOfBirth: args.author.dateOfBirth,
      };

      data.authors.push(author);
      data.nextAuthorId++;
      return author;
    },
    updateAuthor: (obj, args, { data }) => {
      const existingAuthor = data.authors.find(a => a.id === Number.parseInt(args.id));
      if(!existingAuthor) {
        return null;
      }

      const author = {
        id: Number.parseInt(args.id),
        firstName: args.author.firstName,
        lastName: args.author.lastName,
        shortBio: args.author.shortBio,
        dateOfBirth: args.author.dateOfBirth,
      };

      data.authors = data.authors.filter(
        author => author.id !== Number.parseInt(args.id),
      );

      data.authors.push(author);
      return author;
    },
    deleteAuthor: (obj, args, { data }) => {
      const author = data.authors.find(a => a.id === Number.parseInt(args.id));
      data.authors = data.authors.filter(
        author => author.id !== Number.parseInt(args.id),
      );
      return author;
    },
    createBook: (obj, args, { data }) => {
      const book = {
        id: data.nextBookId,
        title: args.book.title,
        yearPublished: args.book.yearPublished,
        authorId: Number.parseInt(args.book.authorId),
      };

      data.books.push(book);
      data.nextBookId++;
      return book;
    },
    updateBook: (obj, args, { data }) => {
      const existingBook = data.books.find(b => b.id === Number.parseInt(args.id));
      if(!existingBook) {
        return null;
      }

      const book = {
        id: Number.parseInt(args.id),
        title: args.book.title,
        yearPublished: args.book.yearPublished,
        authorId: Number.parseInt(args.book.authorId),
      };

      data.books = data.books.filter(
        book => book.id !== Number.parseInt(args.id),
      );

      data.books.push(book);
      return book;
    },
    deleteBook: (obj, args, { data }) => {
      const book = data.books.find(b => b.id === Number.parseInt(args.id));

      data.books = data.books.filter(
        book => book.id !== Number.parseInt(args.id),
      );
      return book;
    },
  },
};
