<script lang='ts' setup>
import GithubLoginButton from '~/components/Auth/GithubButton.vue'
const user = useSupabaseUser()
</script>

<template>
  <div v-if='user'>
    <h1>You are logged in.</h1>
  </div>
  <div v-else>
    <GithubLoginButton />
  </div>
</template>