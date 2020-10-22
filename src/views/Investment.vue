<template>
  <div
    ref="page"
    class="grid-container full"
  >
    <div class="pb-large-large-only foreground dark-neutral">
      <NavBar
        :tintClass="pageHasScrolled ? 'dark' : ''"
        :showRouteLabel="true"
      />

      <div class="grid-x intro">
        <div class="cell small-10 small-offset-1 large-6 large-offset-2">
          <p class="text xxlarge-text light-neutral">Interested in moving <strong>Forward Together?</strong> Please complete the following investment qualification form</p>
        </div>
      </div>

      <div class="grid-x small-print">
        <div class="cell small-10 small-offset-1 large-7 large-offset-2">
          <p class="text xsmall-text light-neutral">The information you provide to us will be treated as completely confidential, and will not be shared in any way with any other third party outside of Gold Rhino.</p>
          <p class="text xsmall-text light-neutral">Gold Rhino only invests in Australian and New Zealand based companies.</p>
        </div>
      </div>

      <ScrollIndicator
        :scrollMax="3"
        :scrollPosition="scrollPosition"
      />

      <form
        @submit.prevent="checkForm"
        :name="formName"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          name="form-name"
          :value="formName"
        />

        <FormHeading
          :scrollCounter="1"
          :scrollMax="3"
          :scrollPosition.sync="scrollPosition"
        >
          PERSONAL DETAILS
        </FormHeading>

        <TextInput
          name="First name"
          v-model="firstName"
        />

        <TextInput
          name="Last name"
          v-model="lastName"
        />

        <TextInput
          name="Email address"
          v-model="emailAddress"
          type="email"
        />

        <TextInput
          name="Job title"
          v-model="jobTitle"
        />

        <TextInput
          name="Company name"
          v-model="companyName"
        />

        <TextInput
          name="Trading name (if different)"
          v-model="tradingName"
        />

        <TextInput
          name="City"
          v-model="city"
        />

        <SelectInput
          name="Country"
          :items="['Australia', 'New Zealand']"
          v-model="country"
        />

        <FormHeading
          :scrollCounter="2"
          :scrollMax="3"
          :scrollPosition.sync="scrollPosition"
        >
          BUSINESS DETAILS
        </FormHeading>

        <TextInput
          name="Year business was incorporated"
          v-model="yearBusinessWasIncorporated"
          type="number"
        />

        <SelectInput
          name="Stage of business"
          :items="['Early stage start-up (<$500k Revenue)', 'Mid-stage start-up ($500k-$1m Revenue)', 'Late stage start-up ($1m-$2m Revenue)', 'Established business ($2> Revenue)']"
          v-model="stageOfBusiness"
        />

        <TextInput
          name="Number of shareholders"
          v-model="numberOfShareholders"
          type="number"
        />

        <TextInput
          name="Percent owned by shareholders"
          v-model="percentOwnedByShareholders"
          suffix="%"
          type="number"
        />

        <TextInput
          name="Debt"
          v-model="debt"
          prefix="$"
          type="number"
        />

        <SelectInput
          name="Debt source"
          :items="['Family & Friends', 'Bank', 'Private Equity / Venture Capital']"
          v-model="debtSource"
        />

        <TextInput
          name="Number of staff (FTE)"
          v-model="numberOfStaff"
          type="number"
        />

        <SelectInput
          name="Industry (ANZSIC Division)"
          :items="['Technology', 'Non-Technology']"
          v-model="industry"
        />

        <TextInput
          name="Description of business"
          v-model="descriptionOfBusiness"
          type="textarea"
        />

        <TextInput
          name="Competition"
          v-model="competition"
        />

        <FormHeading
          :scrollCounter="3"
          :scrollMax="3"
          :scrollPosition.sync="scrollPosition"
        >
          BUSINESS STRATEGY
        </FormHeading>

        <TextInput
          name="Elevator pitch (what makes your business unique, and why you need our assistance)"
          v-model="elevatorPitch"
          type="textarea"
        />

        <FileInput
          name="Business plan (PDF)"
          v-model="businessPlan"
        />

        <TextInput
          name="Funding sought"
          v-model="fundingSought"
          prefix="$"
          type="number"
        />

        <TextInput
          name="Use of funding"
          v-model="useOfFunding"
          type="textarea"
        />

        <div class="grid-x submit">
          <div class="cell small-10 small-offset-1 large-4 large-offset-5">
            <input
              class="submit-button"
              type="submit"
              value="SUBMIT"
            />
          </div>
        </div>
      </form>

      <ClipPathBox
        counter="05"
        text="Who we are"
        image="who-we-are-banner.jpg"
        to="/who-we-are"
      />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import imagesLoaded from 'imagesloaded'
  import throttle from 'lodash/throttle'
  import ClipPathBox from '@/components/ClipPathBox.vue'
  import NavBar from '@/components/NavBar.vue'
  import FileInput from '@/components/FileInput.vue'
  import FormHeading from '@/components/FormHeading.vue'
  import ScrollIndicator from '@/components/ScrollIndicator.vue'
  import SelectInput from '@/components/SelectInput.vue'
  import TextInput from '@/components/TextInput.vue'

  export default {
    name: 'Investment',

    components: {
      ClipPathBox,
      NavBar,
      FileInput,
      FormHeading,
      SelectInput,
      ScrollIndicator,
      TextInput
    },

    data() {
      return {
        formName: 'gold-rhino',

        imageLoadCounter: 0,
        pageHasScrolled: false,
        scrollPosition: 1,

        firstName: '',
        lastName: '',
        emailAddress: '',
        jobTitle: '',
        companyName: '',
        tradingName: '',
        city: '',
        country: '',
        yearBusinessWasIncorporated: '',
        stageOfBusiness: '',
        numberOfShareholders: '',
        percentOwnedByShareholders: '',
        debt: '',
        debtSource: '',
        numberOfStaff: '',
        industry: '',
        descriptionOfBusiness: '',
        competition: '',
        elevatorPitch: '',
        fundingSought: '',
        useOfFunding: '',

        businessPlan: ''
      }
    },

    methods: {
      encode(data) {
        return Object
          .keys(data)
          .map(
            key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
          )
          .join('&')
      },
      
      checkForm() {
        axios
          .post(
            '/',
            this.encode({
              'form-name': this.formName,

              'first-name': this.firstName,
              'last-name': this.lastName,
              'email-address': this.emailAddress,
              'job-title': this.jobTitle,
              'company-name': this.companyName,
              'trading-name': this.tradingName,
              'city': this.city,
              'country': this.country,
              'year-business-was-incorporated': this.yearBusinessWasIncorporated,
              'stage-of-business': this.stageOfBusiness,
              'number-of-shareholders': this.numberOfShareholders,
              'percent-owned-by-shareholders': this.percentOwnedByShareholders + '%',
              'debt': '$' + this.debt,
              'debt-source': this.debtSource,
              'number-of-staff': this.numberOfStaff,
              'industry': this.industry,
              'description-of-business': this.descriptionOfBusiness,
              'competition': this.competition,
              'elevator-pitch': this.elevatorPitch,
              'funding-sought': '$' + this.fundingSought,
              'use-of-funding': this.useOfFunding,

              'business-plan': this.businessPlan
            })
            // {
            //   headers: {
            //     'Content-Type': 'multipart/form-data'
            //   }
            // }
          )
          .then((response) => {
            if (response.status == 200) {
              this.$router.push('/investment/thank-you')
            }
          })
      },

      handleScroll() {
        this.pageHasScrolled = window.scrollY > 100
      }
    },

    created() {
      this.handleDebouncedScroll = throttle(this.handleScroll, 100)
      window.addEventListener('scroll', this.handleDebouncedScroll)
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.handleDebouncedScroll)
    },

    mounted() {
      imagesLoaded(this.$refs.page, () => {
        this.$emit('update:progress', 1)
      })
        .on('progress', () => {
          this.imageLoadCounter++

          this.$emit('update:progress', this.imageLoadCounter / this.$refs.page.querySelectorAll('img').length)
        })
    }
  }
</script>

<style lang="scss" scoped>
  .intro {
    padding-top: 40%;

    @include breakpoint(large) {
      padding-top: 13.5%;
    }
  }

  .small-print {
    padding-top: 6.3%;
  }

  .submit {
    padding-top: 7.2%;
  }

  .submit-button {
    background-color: transparent;
    border: 2px solid $light-neutral;
    color: $light-neutral;
    cursor: pointer;
    font-family: Termina;
    letter-spacing: 3px;
    padding: 44px 0;
    text-align: center;
    transition: background-color .2s, color .2s;
    width: 100%;

    &:hover {
      background-color: $light-neutral;
      color: $dark-neutral;
    }
  }
</style>
