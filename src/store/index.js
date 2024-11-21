import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    incrementLike(state, postId) {
      const post = state.posts.find((p) => p.id === postId);
      if (post) {
        post.likes += 1;
      }
    },
    resetLikes(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    },
  },
  actions: {
    fetchPosts({ commit }) {
      const posts = [];
      for (let i = 1; i <= 10; i++) {
        posts.push({
          id: i,
          date: `2022-10-${String(i).padStart(2, "0")}`,
          author: `Testname${i}`,
          image: `https://via.placeholder.com/600x300?text=Post+Image+${i}`,
          description: `TestDescription${i}`,
          likes: 0,
        });
      }
      commit("setPosts", posts);
    },
  },
  getters: {
    allPosts(state) {
      return state.posts;
    },
  },
  modules: {},
});
