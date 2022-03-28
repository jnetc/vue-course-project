export default {
  coaches: (state) => state.coaches,
  hasCoaches: (state) => (state.coaches.length > 0 ? true : false),
  isCoach: (_, getters, _2, rootGetters) => {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some((coach) => coach.id === userId);
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) return true;

    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  },
};
