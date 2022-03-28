import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';
// import coaches from './data.js';

export default {
  namespaced: true,
  state: () => ({
    lastFetch: null,
    coaches: [
      {
        id: 'c1',
        firstName: 'Maximilian',
        lastName: 'Schwarzmüller',
        areas: ['frontend', 'backend', 'career'],
        description:
          "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        rate: 30,
      },
      {
        id: 'c2',
        firstName: 'Julie',
        lastName: 'Jones',
        areas: ['frontend', 'career'],
        description:
          'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
        rate: 30,
      },
    ],
  }),
  mutations,
  actions,
  getters,
};
