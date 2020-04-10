<template>
  <v-container grid-list-xl fluid>
    <div class="my-3">
        <v-icon>people_alt</v-icon>&nbsp;&nbsp;CLIENTS
    </div>
    <v-layout row wrap>
      <v-flex lg12>
        <v-card>
          <v-divider></v-divider>
          <v-card-text class="pa-0">
            <v-data-table
              v-model="complex.selected"
              :headers="complex.headers_client"
              :items="complex.items_client"
              :rows-per-page-items="[5, 10, 30, { text: 'All', value: -1 }]"
              class="elevation-1"
              item-key="name"
            >
              <template slot="items" slot-scope="props">
                <td style="width:40%;">{{ props.item.name }}</td>
                <td style="width:15%;">{{ props.item.date }}</td>
                <td style="width:15%;">{{ props.item.kbis }}</td>
                <td style="width:15%;">{{ props.item.alist }}</td>
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
        <v-btn class="mx-2" fab large dark color="#66BB6A">
          <v-icon dark>add</v-icon>
        </v-btn>
        <h3 class="my-2">Create a new client.</h3>
      </div>
    </v-layout>
  </v-container>
</template>

<script>
import { Items as Clients } from "@/data/client";
export default {
  asyncData() {
    return {
      search: "",
      complex: {
        selected: [],
        headers_client: [
          {
            text: "Client Name",
            value: "name"
          },
          {
            text: "Date",
            value: "date"
          },
          {
            text: "Kbis",
            value: "kbis"
          },
          {
            text: "Alist",
            value: "alist"
          },
          {
            text: "State",
            value: "state"
          }
        ],
        items_client: Clients
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
