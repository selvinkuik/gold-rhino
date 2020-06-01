<template>
  <div class="grid-container full">
    <div class="foreground dark-neutral">
      <NavBar tintClass="dark" />

      <form @submit.prevent="checkForm">
        <div class="grid-x">
          <div class="form-group cell small-10 small-offset-1 large-7 large-offset-2">
            PERSONAL DETAILS
          </div>
        </div>

        <TextInput
          name="First name"
          v-model="firstName"
        />

        <TextInput
          name="Last name"
          v-model="lastName"
        />

        <SelectInput
          name="Country"
          :items="['Austria','Belgium','Bulgaria']"
          v-model="country"
        />

        <TextInput
          name="Description of business"
          v-model="descriptionOfBusiness"
          :multiline="true"
        />

        <FileInput
          name="Business plan (PDF)"
          v-model="businessPlan"
        />

        <div class="grid-x">
          <div class="cell small-10 small-offset-1 large-4 large-offset-5">
            <input
              class="submit"
              type="submit"
              value="SUBMIT"
            />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import NavBar from '@/components/NavBar.vue'
  import FileInput from '@/components/FileInput.vue'
  import SelectInput from '@/components/SelectInput.vue'
  import TextInput from '@/components/TextInput.vue'

  export default {
    name: 'Investment',

    components: {
      NavBar,
      FileInput,
      SelectInput,
      TextInput
    },

    data() {
      return {
        firstName: '',
        lastName: '',
        country: '',
        descriptionOfBusiness: '',
        businessPlan: ''
      }
    },

    methods: {
      checkForm() {
        const rawData = JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          country: this.country,
          descriptionOfBusiness: this.descriptionOfBusiness
        })

        let formData = new FormData()
        formData.append('businessPlan', this.businessPlan)
        formData.append('data', rawData)

        axios.post(
          'https://goldrhino.selvinkuik.com/PHPMailer/',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-group {
    color: #747a7f;
    font: 10px Termina;
    letter-spacing: 2px;
  }

  .submit {
    background-color: transparent;
    border: 2px solid $light-neutral;
    color: $light-neutral;
    cursor: pointer;
    font-family: Termina;
    letter-spacing: 3px;
    padding: 50px 0;
    text-align: center;
    transition: background-color .2s, color .2s;
    width: 100%;

    &:hover {
      background-color: $light-neutral;
      color: $dark-neutral;
    }
  }
</style>
