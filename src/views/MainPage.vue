<template>
    <main>
      <h1>Main Page</h1>
      <button @click="resetAllLikes">Reset All Likes</button>
      <div class="posts-container">
        <div v-for="post in posts" :key="post.id">
          <Post :post="post" />
        </div>
      </div>
    </main>
    </template>
    
    <script>
    import { mapGetters } from 'vuex';
    import Post from '@/components/Post.vue';
    
    export default {
      name: 'MainPage',
      components: {
        Post,
      },
      computed: {
        ...mapGetters(['allPosts']),
        posts() {
          return this.allPosts;
        },
      },
      methods: {
        resetAllLikes() {
          this.$store.commit('resetLikes');
        },
      },
      created() {
        if (!this.posts.length) {
          this.$store.dispatch('fetchPosts');
        }
      },
    };
    </script>
    
    <style scoped>
    .posts-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
    </style>
    