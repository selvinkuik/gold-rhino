<template>
  <form @submit.prevent="checkForm" method="post">
    <div>
      <label>
        First name:
        <input v-model="firstName" type="text" />
      </label>
    </div>

    <div>
      <input type="submit" value="Submit" />
    </div>
  </form>
</template>

<script>
  export default {
    name: 'Investment',

    data() {
      return {
        firstName: ''
      }
    },

    methods: {
      checkForm() {
        fetch('http://localhost:8080/' + encodeURIComponent(this.firstName))
          .then(async res => {
            let errorResponse = await res.json()
            console.log(errorResponse)
          })
      }
    }
  }
</script>
