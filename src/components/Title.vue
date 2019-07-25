<template>
    <div>
        <nav>
            <div class="title flex-start">
                <ul>
                    <li><router-link class="a" :to="{name: 'home'}">Home</router-link></li>
                    <li><router-link class="a" :to="{name: 'login'}">Login</router-link></li>
                    <li><router-link class="a" :to="{name: 'sign'}">Sign Up</router-link></li>
                </ul>
            </div>
        </nav>
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="stylus">
</style>
