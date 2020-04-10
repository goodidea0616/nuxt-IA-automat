<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md3 lg3>
          <v-card class="elevation-1 pa-4">
            <v-card-text>
              <div class="layout column align-center">
                <!-- <img
                  src="https://via.placeholder.com/120/000000/FFFFFF/?text=TMP"
                  alt="Vue Material Admin"
                  width="120"
                  height="120"
                /> -->
                <h2 class="flex mb-4">
                  IA-AUTOMAT
                </h2>
              </div>
              <v-form>
                <v-text-field
                  v-model="model.username"
                  append-icon="person"
                  name="login"
                  label="Login"
                  color="#66BB6A"
                  type="text"
                ></v-text-field>
                <v-text-field
                  id="password"
                  v-model="model.password"
                  append-icon="lock"
                  name="password"
                  label="Password"
                  color="#66BB6A"
                  type="password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn block class="mx-2" color="#66BB6A" :loading="loading" @click="login"
                >LogIn</v-btn
              >
            </v-card-actions>
            <v-card-text>
              <div class="align-center">
                Don't you have an account? &nbsp;&nbsp;<router-link to="/register" style="color:#66BB6A;">SignUp</router-link>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import colors from "vuetify/es5/util/colors";
export default {
  layout: "basic",
  theme: {
    primary: '#66BB6A',
    secondary: colors.amber.lighten2,
    dark: false
  },
  data: () => ({
    loading: false,
    colors,
    model: {
      username: "",
      password: ""
    }
  }),

  methods: {
    login() {
      this.loading = true;
      setTimeout(() => {
        this.$router.push("/");
      }, 1000);
    }
  }
};
</script>
<style scoped lang="css">
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  z-index: 0;
}
</style>
