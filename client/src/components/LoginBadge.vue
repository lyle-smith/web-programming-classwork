<script setup lang="ts">
import { RouterLink } from "vue-router";
import session, { login } from "../stores/session";

function getName() {
  if (session.user?.name) {
    return session.user.name;
  } else {
    return "Guest";
  }
}

function getEmail() {
  if (session.user?.email) {
    return session.user.email;
  } else {
    return "Guest";
  }
}

async function google_login() {
  const authClient = google.accounts.oauth2.initTokenClient({
    client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
    scope: "profile email https://www.googleapis.com/auth/calendar.readonly",
    callback(token: any) {
      console.log({ token });
      const data = fetch(`https://www.googleapis.com/oauth2/v1/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
  });
  authClient.requestAccessToken();
}
</script>
<script lang="ts">
declare const google: any;
</script>

<template>
  <div class="buttons" v-if="session.user == null">
    <a class="button is-primary">
      <strong>Sign up</strong>
    </a>
    <RouterLink
      to="login"
      class="button is-light"
      @click.prevent="google_login"
    >
      Log in
    </RouterLink>
  </div>
  <div v-else>Welcome {{ session.user.name }} {{ session.user.email }}!</div>
</template>

<style scoped></style>
