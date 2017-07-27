<template>
  <div class="navigation-mobile">
    <div class="bar" :class="{ 'is-open': isOpen }"></div>
  </div>
</template>

<script>
  export default {
    props: ['open'],
    computed: {
      isOpen: function() {
        return this.open;
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '~assets/css/variables.scss'; // will be fixed soon

  .navigation-mobile {
    cursor: pointer;
    width: 25px;
    height: 25px;
    display: inline-block;
    .bar {
      position: relative;
      transform: translateY(10px);
      background-color: $darkGrey;
      width: 25px;
      height: 2px;
      transition: background-color .3s cubic-bezier(.23,1,.32,1);
      &:before {
        bottom: 10px;
        transition: bottom .3s .3s cubic-bezier(.23,1,.32,1),transform .3s cubic-bezier(.23,1,.32,1);
      }
      &:after {
        top: 10px;
        transition: top .3s .3s cubic-bezier(.23,1,.32,1),transform .3s cubic-bezier(.23,1,.32,1);
      }
      &:before, &:after {
        content: "";
        width: 25px;
        height: 2px;
        position: absolute;
        background-color: $darkGrey;
        left: 0;
      }
      &.is-open {
        background-color: transparent;
        &:before {
          bottom: 0;
          transform: rotate(-45deg);
          transition: bottom .3s cubic-bezier(.23,1,.32,1),transform .3s .3s cubic-bezier(.23,1,.32,1);
        }
        &:after {
          top: 0;
          transform: rotate(45deg);
          transition: top .3s cubic-bezier(.23,1,.32,1),transform .3s .3s cubic-bezier(.23,1,.32,1);
        }
      }
    }
  }
</style>
