<template>
  <v-toolbar fixed class="orange" dark>
    <v-toolbar-title class="mr-4">
      <v-btn
        v-if="$store.state.isUserLoggedIn"
        flat
        class="orange"
        dark
        to="/normalUser"
        >Home
      </v-btn>
      <v-btn
        v-if="$store.state.isAdminLoggedIn"
        flat
        class="orange"
        dark
        to="/adminUser"
        >Home
      </v-btn>
      <v-btn
        v-if="!$store.state.isUserLoggedIn && !$store.state.isAdminLoggedIn"
        flat
        class="orange"
        dark
        to="/"
        >Home
      </v-btn>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items>
        <v-btn
        v-if="!$store.state.isUserLoggedIn && !$store.state.isAdminLoggedIn"
        flat
        class="orange"
        dark
        to="authentication"
        >LOGIN
        </v-btn>

        <v-btn
        v-if="!$store.state.isUserLoggedIn && !$store.state.isAdminLoggedIn"
        flat
        class="orange"
        dark
        to="register"
        >SIGN UP
        </v-btn>

        <v-btn
        v-if="$store.state.isUserLoggedIn || $store.state.isAdminLoggedIn"
        flat
        class="orange"
        dark
        @click="logout"
        to="/"
        >LOG OUT
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    logout () { // managing the activities of the users
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setAdmin', null)
      this.$store.dispatch('setUser', null)
    }
  }
}
</script>

<style scoped>
</style>
