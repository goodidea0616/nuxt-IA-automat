<template>
  <v-container grid-list-xl fluid>
    <div class="my-3">
        <v-icon>description</v-icon>&nbsp;&nbsp;DOCUMENT
    </div>
    <v-layout row wrap>
      <v-flex lg12>
        <v-card>
          <!-- <v-toolbar card>
            <h3>Document</h3>
          </v-toolbar> -->
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-data-table
              v-model="complex.selected"
              :headers="complex.headers_doc"
              :items="complex.items_doc"
              :rows-per-page-items="[5, 10, 30, { text: 'All', value: -1 }]"
              class="elevation-1"
              item-key="name"
            >
              <template slot="items" slot-scope="props">
                <td style="width:45%;">{{ props.item.name }}</td>
                <td style="width:20%;">{{ props.item.date }}</td>
                <td style="width:20%;">{{ props.item.client }}</td>
                <td style="width:15%;">
                  <v-chip
                    label
                    small
                    :color="getColorByStatus(props.item.state)"
                    text-color="white"
                    >{{ props.item.state }}</v-chip
                  >
                </td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
      <div class="my-3" style="width:100%;text-align:center;">
        <v-btn to="/createdocument" class="mx-2" fab large dark color="#66BB6A">
          <v-icon dark>add</v-icon>
        </v-btn>
        <h3 class="my-2">Create a new document.</h3>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import { Items as Documents } from "@/data/document";
export default {
  asyncData() {
    return {
      search: "",
      complex: {
        selected: [],
        headers_doc: [
          {
            text: "Document Name",
            value: "name"
          },
          {
            text: "Date",
            value: "date"
          },
          {
            text: "Client",
            value: "client"
          },
          {
            text: "State",
            value: "state"
          }
        ],
        items_doc: Documents
      },
      colors: {
        Incomplete: "orange",
        Complete: "green"
      }    
    };
  },
  methods: {
    getColorByStatus(state) {
      return this.colors[state];
    }
  }
};
</script>
