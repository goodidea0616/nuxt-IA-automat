<template>
<v-container grid-list-xl fluid>
  <div class="my-3">
      <v-icon>cloud_upload</v-icon>&nbsp;&nbsp;FILE UPLOAD
  </div>
  <v-flex class="pb-3">
    <v-card>
      <v-divider></v-divider>
      <v-card-text class="py-4" style="width:100%;text-align:center;">
        <template>
          <input type="file" multiple>
          <v-btn class="success"><v-icon>cloud_upload</v-icon>&nbsp;&nbsp;upload</v-btn>
        </template>
      </v-card-text>
    </v-card>
  </v-flex>
  <v-flex>
    <v-card>
      <v-toolbar card dense color="transparent">
        <v-toolbar-title><h5><v-icon>work</v-icon>&nbsp;&nbsp;Uploading files</h5></v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text class="pa-0">
        <template>
          <v-data-table
            :headers="headers"
            :items="projects"
            hide-actions
            class="elevation-0"
          >
            <template slot="items" slot-scope="props">
              <td style="width:10%" class="text-xs-right">
                <v-icon>description</v-icon>
              </td>
              <td style="width:25%">{{ props.item.name }}</td>
              <td style="width:50%" class="pt-1 pb-3">
                <v-progress-linear
                  :value="props.item.progress"
                  height="5"
                  :color="props.item.color"
                ></v-progress-linear>{{props.item.progress}}% done
              </td>
              <td style="width:15%">
                <v-list-tile-avatar color="light-green">
                  <v-icon dark>done</v-icon>
                </v-list-tile-avatar>
              </td>
            </template>
          </v-data-table>
        </template>
        <v-divider></v-divider>
      </v-card-text>
    </v-card>
    <v-btn to="/download" class="right success mt-3 mr-0" style="width:25%;">Next</v-btn>
  </v-flex>
</v-container>
</template>

<script>
import { Projects } from "@/data/project";
export default {
  data() {
    return {
      headers: [
        {
          text: "",
          align: "center",
          sortable: false,
          value: "avatar"
        },
        {
          text: "Name",
          align: "left",
          value: "name"
        },
        { text: "Progress", value: "progress" },
        { text: "State", value: "result" }
      ]
    };
  },
  computed: {
    projects() {
      return Projects;
    }
  }
};
</script>
<style scoped>
.ft-200 {
  font-weight: 200;
}
.post--item:hover {
  background: #303030;
}
.post--item a {
  text-decoration: none;
}
.flex-list.vertical {
  flex-direction: column;
}
.flex-list li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid #eee;
}
.flex-list li:last-child {
  border: none;
}

.flexbox-centering {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-scale:hover {
  transform: scale(1.15);
  transition: 0.7s;
}
</style> 
