// Single place to edit store links and contact details.
// Set an URL to null to show a "Coming soon" badge instead of a live link.

export const site = {
  name: 'TutorsHub',
  url: 'https://www.tutorshubgh.com',
  tagline: 'Learn together. Practice smarter.',
  description:
    'TutorsHub is the all-in-one learning app for Ghanaian students: live classes, verified tutors, on-demand homework help, and thousands of practice questions — with rewards for every win.',
  email: 'hello@tutorshubgh.com',
  stores: {
    // Android package id from TutorsHub/app.json
    googlePlay:
      process.env.NEXT_PUBLIC_PLAY_STORE_URL ??
      'https://play.google.com/store/apps/details?id=com.tutorshubgh.app',
    appStore: process.env.NEXT_PUBLIC_APP_STORE_URL ?? null,
  },
} as const;
