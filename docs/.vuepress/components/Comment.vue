<template>
  <div v-if="flag && isPost" id="comment-wrap">
    <script
      src="https://utteranc.es/client.js"
      repo="jewelism/jewelism.github.io"
      :issue-term="postId"
      theme="github-light"
      crossorigin="anonymous"
      async
    ></script>
  </div>
</template>

<script>
export default {
  name: "Comment",
  data: () => ({
    flag: true,
  }),
  computed: {
    isPost() {
      return String(this.$frontmatter.layout).toLowerCase() === "post";
    },
    postId() {
      return this.$frontmatter.title;
    },
  },
  watch: {
    $route(to, from) {
      if (to.name !== from.name) {
        this.flag = false;
        this.$nextTick(() => {
          this.flag = true;
        });
      }
    },
  },
};
</script>

<style>
#comment-wrap {
  padding: 0 2rem;
}
</style>
