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
const testAuthors = [
  {
    id: 1,
    firstName: 'Ernest',
    lastName: 'Hemingway',
    shortBio:
      'Ernest Miller Hemingway was an American journalist, novelist, short-story writer, and sportsman. His economical and understated style—which he termed the iceberg theory—had a strong influence on 20th-century fiction, while his adventurous lifestyle and his public image brought him admiration from later generations.',
    dateOfBirth: '1899-06-21',
  },
  {
    id: 2,
    firstName: 'J.K.',
    lastName: 'Rowling',
    shortBio:
      'Joanne Rowling CH, OBE, HonFRSE, FRCPE, FRSL, better known by her pen name J. K. Rowling, is a British author, film producer, television producer, screenwriter, and philanthropist.',
    dateOfBirth: '1965-07-31',
  },
  {
    id: 3,
    firstName: 'Anonymous',
    lastName: 'Anonymous',
    shortBio:
      'Anonymous Anonymous is a famous author about whom very little is known! If you have any information about Anonymous Anonymous, please call the local tip hotline anonymously! :)',
    dateOfBirth: '1500-01-01',
  },
];

const testBooks = [
  {
    id: 1,
    title: 'Harry Potter and the Sorcerer\'s Stone',
    yearPublished: 1997,
    authorId: 2,
  },
  {
    id: 2,
    title: 'The Sun Also Rises',
    yearPublished: 1927,
    authorId: 1,
  },
  {
    id: 3,
    title: 'A Farewell to Arms',
    yearPublished: 1929,
    authorId: 1,
  },
  {
    id: 4,
    title: 'The Arabian Nights',
    yearPublished: null,
    authorId: 3,
  },
  {
    id: 5,
    title: 'Bitcoin',
    yearPublished: 2008,
    authorId: 3,
  },
];

const testData = {
  authors: testAuthors,
  nextAuthorId: testAuthors.length+1,
  books: testBooks,
  nextBookId: testBooks.length+1,
};

const blankData = {
  authors: [],
  nextAuthorId: 1,
  books: [],
  nextBookId: 1,
};

const initData = useTestData => (useTestData ? testData : blankData);

module.exports = { initData };
