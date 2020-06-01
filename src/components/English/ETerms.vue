<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">【Terms of use】</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Terms of use</span>
        </v-card-title>
        <v-card-text>
          <p>“Terms of use” stipulate the terms and conditions for members to use the Facebook group provided by GG ONLINE (hereinafter referred to as the “Community”).</p>
          <p class="mb-0">(Scope of application)</p>
          <ol>
            <li>This agreement applies to all members who use the “Community”.</li>
            <li>Members are deemed to have agreed to these terms at the time of membership registration for this “Community”.</li>
            <li>Members must sincerely adhere to these terms.</li>
          </ol>
          <br>

          <p class="mb-0">(The “Community”)</p>
          <p>For members, the “Community” provides a place on Facebook for people of different languages to interact with each other.</p>

          <p class="mb-0">(Member)</p>
          <p>A “Member” is a customer who has accepted this agreement and has filled out the "Membership Application Form" with the necessary information, and who has been approved by this “Community”.</p>

          <p class="mb-0">(Change of Membership information)</p>
          <p>In cases of changes in the information written in the application form at the time of joining membership, the member must immediately apply for the change of the member information by electronic writing predetermined by this “Community”.</p>

          <p class="mb-0">(Cooling off after applying for membership)</p>
          <ol>
            <li>The applicant may cancel the application electronically including the date of delivery of this agreement</li>
            <li>Termination of contract is only possible when the applicant sends an electronic document stating the withdrawal of application from the “Community”.</li>
            <li>No fee will be required for withdrawal of application, and the applicant will not be charged of any compensation for damages or penalty.</li>
            <li>Members who are renewed before the withdrawal request is sent, they must pay to the “Community”.</li>
          </ol>
          <br>

          <p class="mb-0">(Withdrawal)</p>
          <p>In case a member wishes to withdraw, he / she should apply to this “Community” by the end of the month in which he / she wishes to withdraw (e.g.: until April 30 if he / she wishes to withdraw on April 3). The membership fee for the current month will not be refunded.</p>

          <p class="mb-0">(Activity)</p>
          <p>“Activities” are defined as all activities in this community on Facebook. (e.g.: Language learning using Zoom and Facebook, exchanging and selling goods, holding events, etc.)</p>
          <ol>
            <li>Members can participate in various activities of this community by paying a regular membership fee.</li>
            <li>Members can participate in activities as much as he / she wants.</li>
            <li>Authority / rights such as conditions for participation in activities shall be temporarily transferred to the organizer.</li>
          </ol>
          <br>

          <p class="mb-0">(Membership fee)</p>
          <ol>
            <li>Membership fee of the “Community” will be withdrawn automatically.</li>
            <li>The monthly membership fee is \500(exc.tax).</li>
            <li>The withdrawal date for account transfer is basically closed on the 26th of every month, and the billing from the 13th of the previous month to the 12th of the current month will be charged on the 26th of the following month.</li>
            <li>There is no community usage fee until September 12, 2020.</li>
          </ol>
          <br>

          <p class="mb-0">(Prohibited acts)</p>
          <p>Members should not do the following.</p>
          <ol>
            <li>To provide false information when applying for membership.</li>
            <li>To cause inconvenience to other members or the organizer.</li>
            <li>To disturb the harmony with other members.</li>
            <li>To access unauthorizedly to the data environment within this “Community”.</li>
            <li>To violate the law, whether intentional or negligent.</li>
            <li>To interfere with the operation of this community.</li>
            <li>To violate public order and morals, or disadvantage others.</li>
            <li>Others whatever the community deems inappropriate.</li>
          </ol>
          <br>

          <p class="mb-0">(Cancellation of membership)</p>
          <p>The “Community” can suspend the usage of this service and cancel the membership if the member falls under any of the following conditions.</p>
          <ol>
            <li>In case he / she violates this agreement.</li>
            <li>When there is an act of obstruction to this “Community”.</li>
            <li>When complaints are frequently made by the activity organizer or other members.</li>
            <li>In case of illegal use of this service.</li>
            <li>Others whenever the community deems inappropriate.</li>
          </ol>
          <br>

          <p class="mb-0">(Compensation for damages)</p>
          <p>In case a member causes damage to the community by violating this agreement or by any other illegal act, the “Community” may claim a reasonable damage compensation to the member.</p>

          <p class="mb-0">(Disclaimer)</p>
          <p>Except for reasons attributable to the “Community”, the “Community” shall not be liable for damages caused by the member's use of this service or the inability to use the service.</p>

          <p>Except for causes attributable to the “Community”, the “Community” shall not be liable for any accidents or troubles outside the community made by the member.</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="dialog = false">Disagree</v-btn>
          <v-btn color="green darken-1" text @click="dialog = false">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
    export default {
        data () {
            return {
                dialog: false,
            }
        },
    }
</script>