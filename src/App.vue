<script setup lang="ts">
import { ref } from 'vue';
import Options from './components/Options.vue';
import Show from './components/Show.vue'
import type { Card } from './types';

const options = ref<string[]>([
    '人物',
    '动漫'
])


</script>

<template>
  <div class="app">
    <header class="app__head">
      cartoon
    </header>
    <main class="wrap">
      <aside class="wrap__leftWrap">
        <Options :options="options"/>
      </aside>
      <article class="wrap__rightWrap">
        <Show />
      </article>

    </main>
    <footer class="app__foot">
      地址：青青草原
      <p>
        青青草原一片天，谁见懒爷不递烟
      </p>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.app__head {
  widows: 100vw;
  height: 10vh;
  background-color: #ebc6e5;

  line-height: 10vh;
  text-align: center;
  font-size: 5rem;
  font-weight: bold;
  color: #45a7af;
}
.wrap {
  display: flex;
  width: 100vw;
  height: 80vh;

  overflow: hidden;

  &__leftWrap {
    width: 30vw;
    background-color: #cc9bd0;
  }

  &__rightWrap {
    width: 70vw;
    background-color: #c585ce;

    overflow: auto;
  }
}

.app__foot {
  widows: 100vw;
  height: 10vh;
  background-image: linear-gradient(#9eebca, #262a26);

  display: flex;
  flex-direction: column;
  justify-content: center;

  
  text-align: center;
  font-weight: bold;
  color: #222f30;
}
</style>
