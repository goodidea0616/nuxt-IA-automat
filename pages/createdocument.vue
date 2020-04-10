<template>
  <v-container grid-list-xl fluid>
    <div class="my-3">
      <v-icon>note_add</v-icon>&nbsp;&nbsp;CREATE DOCUMENT
    </div>
    <div style="width:80%;padding-left:15%;">
        <v-text-field
        flat
        solo-inverted
        append-icon="search"
        label="Name of Document"
        class="hidden-sm-and-down"
        ></v-text-field>
    </div>
    <v-layout row wrap>
      <v-flex sm12>
        <div style="height:1px; width:100%;background-color:grey;"></div>
      </v-flex>
      <v-flex class="create_doc_card">
        <v-card>
          <v-responsive :aspect-ratio="4/5">
            <!-- <v-icon>description</v-icon> -->
            <v-img height="100%" src='/doc/doc.png'>
                <!-- <h2 class="white--text pa-3">
                Card with image
                </h2> -->
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              {{ cardText }}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn to="/uploaddocument" color="#4285f4" small class="fullwidth">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="create_doc_card">
        <v-card>
          <v-responsive :aspect-ratio="4/5">
            <!-- <v-icon>description</v-icon> -->
            <v-img height="100%" src='/doc/doc.png'>
                <!-- <h2 class="white--text pa-3">
                Card with image
                </h2> -->
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              {{ cardText }}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn to="/uploaddocument" color="#4285f4" small class="fullwidth">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="create_doc_card">
        <v-card>
          <v-responsive :aspect-ratio="4/5">
            <v-img height="100%" src='/doc/doc.png'>
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              {{ cardText }}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn to="/uploaddocument" color="#4285f4" small class="fullwidth">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="create_doc_card">
        <v-card>
          <v-responsive :aspect-ratio="4/5">
            <!-- <v-icon>description</v-icon> -->
            <v-img height="100%" src='/doc/doc.png'>
                <!-- <h2 class="white--text pa-3">
                Card with image
                </h2> -->
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              {{ cardText }}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn to="/uploaddocument" color="#4285f4" small class="fullwidth">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="create_doc_card">
        <v-card>
          <v-responsive :aspect-ratio="4/5">
            <!-- <v-icon>description</v-icon> -->
            <v-img height="100%" src='/doc/doc.png'>
                <!-- <h2 class="white--text pa-3">
                Card with image
                </h2> -->
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              {{ cardText }}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn to="/uploaddocument" color="#4285f4" small class="fullwidth">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="create_doc_card">
        <v-card>
          <v-responsive :aspect-ratio="4/5">
            <!-- <v-icon>description</v-icon> -->
            <v-img height="100%" src='/doc/doc.png'>
                <!-- <h2 class="white--text pa-3">
                Card with image
                </h2> -->
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              {{ cardText }}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn to="/uploaddocument" color="#4285f4" small class="fullwidth">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="create_doc_card">
        <v-card>
          <v-responsive :aspect-ratio="4/5">
            <!-- <v-icon>description</v-icon> -->
            <v-img height="100%" src='/doc/doc.png'>
                <!-- <h2 class="white--text pa-3">
                Card with image
                </h2> -->
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              {{ cardText }}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn to="/uploaddocument" color="#4285f4" small class="fullwidth">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="create_doc_card">
        <v-card>
          <v-responsive :aspect-ratio="4/5">
            <!-- <v-icon>description</v-icon> -->
            <v-img height="100%" src='/doc/doc.png'>
                <!-- <h2 class="white--text pa-3">
                Card with image
                </h2> -->
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              {{ cardText }}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn to="/uploaddocument" color="#4285f4" small class="fullwidth">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="create_doc_card">
        <v-card>
          <v-responsive :aspect-ratio="4/5">
            <!-- <v-icon>description</v-icon> -->
            <v-img height="100%" src='/doc/doc.png'>
                <!-- <h2 class="white--text pa-3">
                Card with image
                </h2> -->
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              {{ cardText }}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn to="/uploaddocument" color="#4285f4" small class="fullwidth">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="create_doc_card">
        <v-card>
          <v-responsive :aspect-ratio="4/5">
            <!-- <v-icon>description</v-icon> -->
            <v-img height="100%" src='/doc/doc.png'>
                <!-- <h2 class="white--text pa-3">
                Card with image
                </h2> -->
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              {{ cardText }}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn to="/uploaddocument" color="#4285f4" small class="fullwidth">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="create_doc_card">
        <v-card>
          <v-responsive :aspect-ratio="4/5">
            <!-- <v-icon>description</v-icon> -->
            <v-img height="100%" src='/doc/doc.png'>
                <!-- <h2 class="white--text pa-3">
                Card with image
                </h2> -->
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              {{ cardText }}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn to="/uploaddocument" color="#4285f4" small class="fullwidth">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex class="create_doc_card">
        <v-card>
          <v-responsive :aspect-ratio="4/5">
            <!-- <v-icon>description</v-icon> -->
            <v-img height="100%" src='/doc/doc.png'>
                <!-- <h2 class="white--text pa-3">
                Card with image
                </h2> -->
            </v-img>
          </v-responsive>
          <v-card-text>
            <div>
              {{ cardText }}
            </div>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-btn to="/uploaddocument" color="#4285f4" small class="fullwidth">Create</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      
    </v-layout>
  </v-container>
</template>

<script>
export default {
  asyncData() {
    return {
      show: true,
      cardText:
        "Title :  doc1"
    };
  }
};
</script>
<style scoped>
.mt-45 {
  margin-top: -45px;
}
.mt-56 {
  margin-top: -56px;
}
</style>
