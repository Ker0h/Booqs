<template>
  <div class="home">

    <b-row>
      <b-col>
        <img alt="Vue logo" src="../assets/logo.png">
      </b-col>
    </b-row>

    <b-row>
        <b-col>
            <b-alert
                :show="dismissCountDown"
                dismissible
                fade
                variant="danger"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged">
                      This alert will dismiss after {{ dismissCountDown }} seconds...
            </b-alert>
        </b-col>
    </b-row>

  </div>
</template>

<script>
export default {
  data () {
    return {
      dismissSecs: 10,
      dismissCountDown: 0
    }
  },
  name: 'home',
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  },
  mounted () {
    this.showAlert()
  }
}

</script>
