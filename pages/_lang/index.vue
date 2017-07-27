<template>
  <section class="container">
    <div>
      <h1 class="title">
        etereo
      </h1>
      <h2 class="subtitle">
        {{$t('tagline')}}
      </h2>

      <div :class="['network',online ? 'online' : 'offline']">
        <div class="circle"></div>
        <span>Network Status:</span>
        {{ online ? 'online' : 'offline' }}
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        online: true
      }
    },
    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },
    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },
    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>

<style></style>
