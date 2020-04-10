<template>
  <v-toolbar fixed dark app>
    <v-toolbar-title class="ml-0 pl-3">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click="handleFullScreen()">
      <v-icon>fullscreen</v-icon>
    </v-btn>
    <v-menu
      offset-y
      origin="center center"
      class="elelvation-1"
      :nudge-bottom="14"
      :nudge-right="20"
      transition="scale-transition"
      
    >
      <v-btn slot="activator" icon flat>
          <v-icon medium>settings</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile
          v-for="(item, key) in items"
          :key="key"
          @click="handleClick"
          :to="item.to"
          style="width:120px;height:45px;"
        >
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav;
    },
    drawer: {
      get() {
        return this.$store.state.sidebar;
      },
      set(val) {
        this.$store.commit("SIDEBAR", val);
      }
    }
  },
  data() {
    return{
      items: [
        {
          icon: "account_circle",
          to: "/profile",
          title: "Profile"
        },
        {
          icon: "settings",
          to: "/settings",
          title: "Settings"
        },
        {
          icon: "fullscreen_exit",
          to: "/login",
          title: "Logout"
        }
      ]
    };
  },
  methods: {
    handleClick(e) {
      e.preventDefault();
    },
    handleFullScreen() {
      const doc = window.document;
      const docEl = doc.documentElement;
      const requestFullScreen =
        docEl.requestFullscreen ||
        docEl.mozRequestFullScreen ||
        docEl.webkitRequestFullScreen ||
        docEl.msRequestFullscreen;
      const cancelFullScreen =
        doc.exitFullscreen ||
        doc.mozCancelFullScreen ||
        doc.webkitExitFullscreen ||
        doc.msExitFullscreen;
      if (
        !doc.fullscreenElement &&
        !doc.mozFullScreenElement &&
        !doc.webkitFullscreenElement &&
        !doc.msFullscreenElement
      ) {
        requestFullScreen.call(docEl);
      } else {
        cancelFullScreen.call(doc);
      }
    }
  }
};
</script>
