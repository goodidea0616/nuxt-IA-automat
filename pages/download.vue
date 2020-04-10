<template>
  <v-container grid-list-xl fluid>
    <div class="my-3">
        <v-icon>cloud_download</v-icon>&nbsp;&nbsp;FILE Download
    </div>
    <v-layout row wrap>
      <v-flex lg12>
        <v-card>
          <v-toolbar card dense color="transparent">
            <v-toolbar-title><h5><v-icon>description</v-icon>&nbsp;&nbsp;Created Documents</h5></v-toolbar-title>
          </v-toolbar>
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
              <template slot="items" slot-scope="props" class="py-3">
                <td style="width:10%" class="text-xs-left">
                  <v-icon>description</v-icon>
                </td>
                <td style="width:40%;">{{ props.item.name }}</td>
                <td style="width:15%;">{{ props.item.date }}</td>
                <td style="width:10%;">
                  <v-list-tile-avatar class="py-3" color="light-green">
                    <v-icon dark>done</v-icon>
                  </v-list-tile-avatar>
                </td>
                <td style="width:10%;">
                  <v-btn class="v-btn-download" dark color="blue">
                    <v-icon dark>cloud_download</v-icon>&nbsp;&nbsp;Docx
                  </v-btn>
                </td>
                <td style="width:25%;">
                  <v-btn class="v-btn-download" dark color="orange">
                    <v-icon dark>cloud_download</v-icon>&nbsp;&nbsp;PDF
                  </v-btn>
                </td>
              </template>
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import { Items as Documents } from "@/data/document";

export default {
    asyncData() {
        return {
          complex: {
            selected: [],
            headers_doc: [
            {
              text: "",        
              sortable: false
            },
            {
              text: "Document Name",
              value: "name"
            },
            {
              text: "Date",
              value: "date"
            },
            {
              text: "State",
              value: "state"
            },
            {
              text: "",        
              sortable: false
            },
            {
              text: "",        
              sortable: false
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

