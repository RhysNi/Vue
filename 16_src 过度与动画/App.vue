<template>
  <div>
    <Animation/>
    <Excessive/>
    <Excessive2/>
  </div>
</template>

<script>
import Animation from './components/Animation'
import Excessive from './components/Excessive'
import Excessive2 from './components/Excessive2'
export default {
  name: "App",
  components:{
    Animation,
    Excessive,
    Excessive2
  }
};
</script>

<style>
</style>