<template>
  <section>
    <h1>Links</h1>
    <article v-for="(item, article) in projects.front" :key="article">
      <h2>
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </h2>
      <span>{{ item.stack }}</span>
    </article>
  </section>
</template>


<script>
export default {
  data() {
    return {
      projects: {
        front: [
          // {
          //   title: "Haus Ink Tattoo",
          //   stack: "Next.js / Bootstrap",
          //   url:
          //     "https://haus.ink"
          // },
          // {
          //   title: "Jade Arts",
          //   stack: "Wordpress / Tailwind",
          //   url:
          //     "https://next-amazona-phi.vercel.app"
          // },
          {
            title: "Front-end Test",
            stack: "HTML / CSS-Grid",
            url:
              "https://renato7oliveira.github.io/experimentos/Grid_CSS_Template_Canyon/src/"
          },
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss">
section{
  padding-bottom: 75px;
}
article {
  margin-bottom: 25px;
}
h2 {
  font-size: 1.1em;
  font-weight: 500;
  line-height: 30px;
  text-transform: unset;
}
span {
  // color: #78657E;
  font-size: 0.9em;
  font-weight: 500;
}
</style>