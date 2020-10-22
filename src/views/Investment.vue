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
        :label="formName"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input
          type="hidden"
          label="form-name"
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
          label="First name"
          name="first-name"
          v-model="firstName"
        />

        <TextInput
          label="Last name"
          name="last-name"
          v-model="lastName"
        />

        <TextInput
          label="Email address"
          name="email-address"
          v-model="emailAddress"
          type="email"
        />

        <TextInput
          label="Job title"
          name="job-title"
          v-model="jobTitle"
        />

        <TextInput
          label="Company name"
          name="company-name"
          v-model="companyName"
        />

        <TextInput
          label="Trading name (if different)"
          name="trading-name"
          v-model="tradingName"
        />

        <TextInput
          label="City"
          name="city"
          v-model="city"
        />

        <SelectInput
          label="Country"
          :items="['Australia', 'New Zealand']"
          name="country"
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
          label="Year business was incorporated"
          name="year-business-was-incorporated"
          v-model="yearBusinessWasIncorporated"
          type="number"
        />

        <SelectInput
          label="Stage of business"
          :items="['Early stage start-up (<$500k Revenue)', 'Mid-stage start-up ($500k-$1m Revenue)', 'Late stage start-up ($1m-$2m Revenue)', 'Established business ($2> Revenue)']"
          name="stage-of-business"
          v-model="stageOfBusiness"
        />

        <TextInput
          label="Number of shareholders"
          name="number-of-shareholders"
          v-model="numberOfShareholders"
          type="number"
        />

        <TextInput
          label="Percent owned by shareholders"
          name="percent-owned-by-shareholders"
          v-model="percentOwnedByShareholders"
          suffix="%"
          type="number"
        />

        <TextInput
          label="Debt"
          name="debt"
          v-model="debt"
          prefix="$"
          type="number"
        />

        <SelectInput
          label="Debt source"
          :items="['Family & Friends', 'Bank', 'Private Equity / Venture Capital']"
          name="debt-source"
          v-model="debtSource"
        />

        <TextInput
          label="Number of staff (FTE)"
          name="number-of-staff"
          v-model="numberOfStaff"
          type="number"
        />

        <SelectInput
          label="Industry (ANZSIC Division)"
          :items="['Technology', 'Non-Technology']"
          name="industry"
          v-model="industry"
        />

        <TextInput
          label="Description of business"
          name="description-of-business"
          v-model="descriptionOfBusiness"
          type="textarea"
        />

        <TextInput
          label="Competition"
          name="competition"
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
          label="Elevator pitch (what makes your business unique, and why you need our assistance)"
          name="elevator-pitch"
          v-model="elevatorPitch"
          type="textarea"
        />

        <FileInput
          label="Business plan (PDF)"
          name="business-plan"
          v-model="businessPlan"
        />

        <TextInput
          label="Funding sought"
          name="funding-sought"
          v-model="fundingSought"
          prefix="$"
          type="number"
        />

        <TextInput
          label="Use of funding"
          name="use-of-funding"
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
        const formData = new FormData()
        Object.keys(data).forEach((key) => formData.append(key, data[key]))
        return formData
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
            }),
            {
              // 'Content-Type': 'multipart/form-data'
              header: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }
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
