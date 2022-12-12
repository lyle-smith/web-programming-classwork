<script setup lang="ts">
// import { ref, watch } from "vue";

// const isTenorSearchOpen = ref(false);
// const tenorSearch = ref("");
// const tenorResults = ref([]);

// watch(tenorSearch, async () => {
//   if (tenorSearch.value.length > 2) {
//     const data = await fetch(
//       `https://tenor.googleapis.com/v2/search?q=${tenorSearch.value}&key=${
//         import.meta.env.VITE_TENOR_API_KEY
//       }&limit=8`
//     ).then((res) => res.json());
//     console.log({ data });
//     tenorResults.value = data.results;
//   }
// });
</script>

<template>
  <main>
    <h1 class="title">Home Page</h1>
    <h2>The page where you land</h2>

    <!-- <div class="field is-horizontal">
      <div class="field-label is-normal">
        <label class="label">Thumbnail</label>
      </div>
      <div class="field-body">
        <div class="field has-addons">
          <div class="control is-expanded">
            <input type="text" class="input" placeholder="Complete URL" />
          </div>
          <p class="control">
            <a
              href=""
              class="button is-warning"
              @click.prevent="isTenorSearchOpen = !isTenorSearchOpen"
              >Find a GIF</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="box" v-show="isTenorSearchOpen">
      <h3>Tenor Search</h3>
      <input
        type="text"
        class="input"
        placeholder="Complete URL"
        v-model="tenorSearch"
      />
      <div
        class="image tenor-gif"
        v-for="tenorGif in tenorResults"
        :key="tenorGif.id"
      >
        <img src="tenorGif.media_formats.tinygif.url" /> -->
    <!-- </div> -->
    <!-- </div> -->
  </main>
</template>

<style scoped>
.tenor-gif {
  display: inline-block;
  margin: 0.5rem;
  max-width: 220px;
}
</style>
