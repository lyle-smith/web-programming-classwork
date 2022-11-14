<script setup lang="ts">
import { RouterLink } from "vue-router";
import session, { login } from "../stores/session";
</script>

<template>
  <div class="buttons" v-if="session.user == null">
    <a class="button is-primary">
      <strong>Sign up</strong>
    </a>
    <RouterLink
      to="login"
      class="button is-light"
      @click="login(session.user.name, session.user.email, 'password')"
    >
      Log in
    </RouterLink>
  </div>
  <div v-else>Welcome {{ session.user.name }} {{ session.user.email }}!</div>
</template>

<style scoped></style>
