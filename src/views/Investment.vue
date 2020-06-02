<template>
  <div class="grid-container full">
    <div class="foreground dark-neutral">
      <NavBar tintClass="dark" />

      <div class="grid-x">
        <div class="cell small-10 small-offset-1 large-6 large-offset-2">
          <p class="text xxlarge-text light-neutral">Interested in moving <strong>Forward Together?</strong> Please complete the following investment qualification form</p>
        </div>
      </div>

      <div class="grid-x">
        <div class="cell small-10 small-offset-1 large-7 large-offset-2">
          <p class="text xsmall-text light-neutral">The information you provide to us will be treated as completely confidential, and will not be shared in any way with any other third party outside of Gold Rhino.</p>
        </div>
      </div>

      <ScrollIndicator
        :scrollMax="3"
        :scrollPosition="scrollPosition"
      />

      <form @submit.prevent="checkForm">
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
          :items="['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Côte d’Ivoire', 'Cabo Verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo (Congo-Brazzaville)', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia (Czech Republic)', 'Democratic Republic of the Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini (formerly Swaziland)', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti', 'Holy See', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar (formerly Burma)', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Palestine State', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe']"
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

        <TextInput
          name="Stage of business"
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
        />

        <TextInput
          name="Debt"
          v-model="debt"
        />

        <TextInput
          name="Debt source"
          v-model="debtSource"
        />

        <TextInput
          name="Number of staff (FTE)"
          v-model="numberOfStaff"
          type="number"
        />

        <TextInput
          name="Industry"
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
        />

        <TextInput
          name="Use of funding"
          v-model="useOfFunding"
          type="textarea"
        />

        <TextInput
          name="Exit strategy"
          v-model="exitStrategy"
          type="textarea"
        />

        <TextInput
          name="Potential acquiror"
          v-model="potentialAcquiror"
          type="textarea"
        />

        <TextInput
          name="Estimated sale price"
          v-model="estimatedSalePrice"
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

      <ClipPathBox
        counter="05"
        image="placeholder.jpg"
        text="Who we are"
        to="/who-we-are"
      />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
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
        businessPlan: '',
        fundingSought: '',
        useOfFunding: '',
        exitStrategy: '',
        potentialAcquiror: '',
        estimatedSalePrice: ''
      }
    },

    methods: {
      checkForm() {
        const rawData = JSON.stringify({
          firstName: this.firstName,
          lastName: this.lastName,
          emailAddress: this.emailAddress,
          jobTitle: this.jobTitle,
          companyName: this.companyName,
          tradingName: this.tradingName,
          city: this.city,
          country: this.country,
          yearBusinessWasIncorporated: this.yearBusinessWasIncorporated,
          stageOfBusiness: this.stageOfBusiness,
          numberOfShareholders: this.numberOfShareholders,
          percentOwnedByShareholders: this.percentOwnedByShareholders,
          debt: this.debt,
          debtSource: this.debtSource,
          numberOfStaff: this.numberOfStaff,
          industry: this.industry,
          descriptionOfBusiness: this.descriptionOfBusiness,
          competition: this.competition,
          elevatorPitch: this.elevatorPitch,
          fundingSought: this.fundingSought,
          useOfFunding: this.useOfFunding,
          exitStrategy: this.exitStrategy,
          potentialAcquiror: this.potentialAcquiror,
          estimatedSalePrice: this.estimatedSalePrice
        })

        let formData = new FormData()
        formData.append('businessPlan', this.businessPlan)
        formData.append('data', rawData)

        axios
          .post(
            'http://goldrhino.com.au/PHPMailer/',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          )
          .then((response) => {
            if (response.status == 200) {
              this.$router.push('/investment/thank-you')
            }
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
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
