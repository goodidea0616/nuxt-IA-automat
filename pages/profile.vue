<template>
  <v-container grid-list-xl fluid>
    <div class="my-3">
        <v-icon>account_box</v-icon>&nbsp;&nbsp;Profile
    </div>
    <v-layout row wrap>
       <!-- style="margin:0% 20% 0% 20%" -->
      <v-flex sm12 title="Edit Profile">
        <v-widget>
          <div slot="widget-content">
            <v-container>
              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    id="testing"
                    name="input-1"
                    label="First Name"
                    color="primary"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    id="testing"
                    name="input-1"
                    label="Last Name"
                    color="primary"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    id="testing"
                    name="input-1"
                    label="Address"
                    color="primary"
                    append-icon="location_on"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    v-model="email"
                    label="E-mail"
                    :rules="[rules.required, rules.email]"
                    append-icon="mail"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <!-- <v-layout row>
                <v-flex xs4>
                  <v-subheader>Single</v-subheader>
                </v-flex>
                <v-flex xs8>
                  <v-text-field
                    name="input-3"
                    label="Label Text"
                    value="Input text"
                    disabled
                  ></v-text-field>
                </v-flex>
              </v-layout> -->
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="input-7"
                    label="Phone"
                    value=""
                    append-icon="phone"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    id="testing"
                    name="input-1"
                    label="Company"
                    color="primary"
                    append-icon="location_city"
                  ></v-text-field>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  <v-btn class="success right mr-0">Save</v-btn> 
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </v-widget>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VWidget from "@/components/VWidget";
export default {
  components: {
    VWidget
  },
  data() {
    return {
      email: "",
      rules: {
        required: value => !!value || "Required.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        }
      }
    };
  }
};
</script>
