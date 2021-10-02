Vue.component('server-error', {
    props: ['err'],
    template:`
       <div class="error">
        <button class="del-btn center" @click="$parent.loadSimulate()" v-if="!err">Симулировать возникновение ошибки доступа к серверу</button>
        <button class="del-btn center" @click="$parent.loadSimulate()" v-else="err">Симулировать устранение ошибки доступа к серверу</button>    
        <div class="server-error" v-show="err">
         <p class="server-error-text">Нет доступа к серверу!</p>
        </div>
      </div>
    `
})