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
        fetch('https://goldrhino.selvinkuik.com/PHPMailer/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstName: this.firstName
          })
        })
          .then(response => {
            console.log(response)
          })
      }
    }
  }
</script>
