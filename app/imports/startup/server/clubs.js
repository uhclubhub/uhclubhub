import { Clubs } from '../../api/clubs/clubs.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Stuff to pre-fill the Collection.
 * @type {*[]}
 */
const clubSeeds = [
  {
    clubName: 'Hiking Club',
    firstName: 'Hailing',
    middleName: '',
    lastName: 'Li',
    uhID: 22223333,
    email: 'hailing@hawaii.edu',
    phone: 8083032222,
    clubURL: 'www.google.com',
    interest: 'sports',
    description: 'This is a hiking club',
    picture: '/images/hiking.jpg',
  },
  {
    clubName: 'Yoga Club',
    firstName: 'Amy',
    middleName: '',
    lastName: 'Li',
    uhID: 22223333,
    email: 'Amy@hawaii.edu',
    phone: 8083032222,
    clubURL: 'www.youtube.com',
    interest: 'sports',
    description: 'This is a yoga club',
    picture: '/images/yoga.jpg',
  },
  {
    clubName: 'Pacific Ukulele',
    firstName: 'Amy',
    middleName: '',
    lastName: 'Li',
    uhID: 22223333,
    email: 'Amy@hawaii.edu',
    phone: 8083032222,
    clubURL: 'www.youtube.com',
    interest: 'Music',
    description: 'This is a ukulele club',
    picture: '/images/ukulele.jpg',
  },
  {
    clubName: 'Dance Club',
    firstName: 'Amy',
    middleName: '',
    lastName: 'Li',
    uhID: 22223333,
    email: 'Amy@hawaii.edu',
    phone: 8083032222,
    clubURL: 'www.youtube.com',
    interest: 'Dance',
    description: 'This is a dance club',
    picture: '/images/dance.jpg',
  },
  {
    clubName: 'Math Club',
    firstName: 'Amy',
    middleName: '',
    lastName: 'Li',
    uhID: 22223333,
    email: 'Amy@hawaii.edu',
    phone: 8083032222,
    clubURL: 'www.youtube.com',
    interest: 'Math',
    description: 'This is a math club',
    picture: '/images/math.jpg',
  },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */

if (Clubs.find().count() === 0) {
  _.each(clubSeeds, function seedClubs(club) {
    Clubs.insert(club);
  });
}
