<template>
    <div class="post">
      <div class="post-header">
        <img class="profile-pic" src="/images/user-icon.png" alt="Profile" />
        <div>
          <p class="post-date">{{ post.date }}</p>
          <p class="post-author">{{ post.author }}</p>
        </div>
      </div>
      <img class="post-image" :src="post.image" alt="Post Image" />
      <p class="post-description">{{ post.description }}</p>
      <div class="post-footer">
          <img
            class="like-button"
            src="/images/like-icon.png"
            alt="Like"
            @click="likePost"
          />
        <span>{{ post.likes }} Likes</span>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Post",
    props: {
      post: Object,
    },
    methods: {
      likePost() {
        this.$store.commit("incrementLike", this.post.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .post {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    margin: 20px 0;
    overflow: hidden;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .post-header {
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: #f0f0f0;
  }
  
  .profile-pic {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .post-date {
    font-size: 12px;
    color: gray;
  }
  
  .post-author {
    font-size: 14px;
    font-weight: bold;
  }
  
  .post-image {
    width: 100%;
    height: auto;
  }
  
  .post-description {
    padding: 10px;
    font-size: 14px;
  }
  
  .post-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    border-top: 1px solid #ddd;
  }
  
  .like-button {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  </style>
  
  