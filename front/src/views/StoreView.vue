<template>
  <section class="page-section cta">
    <div class="container">
      <div class="row">
        <div class="col-xl-9 mx-auto">
          <div class="text-center cta-inner rounded">
            <h2 class="section-heading mb-5"><span class="section-heading-upper">Come On In</span><span
                class="section-heading-lower">We're Open</span></h2>

            <ul class="list-unstyled text-start mx-auto list-hours mb-5">

              <li class="d-flex list-unstyled-item list-hours-item" v-for="operationDay in storeOperation">
                {{ operationDay.day }}
                <span class="ms-auto">{{ operationDay.hours == null ? 'Closed' : operationDay.hours }}</span>
              </li>
            </ul>

            <p class="address mb-5">
              <em>
                <strong>1116 Orchard Street</strong>
                <span><br>Golden Valley, Minnesota</span>
              </em>
            </p>
            <p class="address mb-0"><small><em>Call Anytime</em></small><span><br>(317) 585-8468</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="page-section about-heading">
    <div class="container">
      <img class="img-fluid rounded about-heading-img mb-3 mb-lg-0" src="assets/img/about.jpg">
      <div class="about-heading-content">
        <div class="row">
          <div class="col-lg-10 col-xl-9 mx-auto">
            <div class="bg-faded rounded p-5">
              <h2 class="section-heading mb-4">
                <span class="section-heading-upper">Strong Coffee, Strong Roots</span>
                <span class="section-heading-lower">&nbsp;About Our Cafe</span>
              </h2>

              <p>Founded in 1987 by the Hernandez brothers, our establishment has been serving up rich coffee sourced from
                artisan farmers in various regions of South and Central America. We are dedicated to traveling the world,
                finding the best coffee, and bringing back to you here in our cafe.</p>

              <p class="mb-0">
                <span>We guarantee that you will fall in&nbsp;</span>
                <em>lust</em>
                <span>&nbsp;with our
                  decadent blends the moment you walk inside until you finish your last sip. Join us for your daily
                  routine, an outing with friends, or simply just to enjoy some alone time.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      storeOperation: [
        { day: 'Sunday', hours: null },
        { day: 'Monday', hours: '9:00 AM to 5:00 PM' },
        { day: 'Tuesday', hours: '9:00 AM to 5:00 PM' },
        { day: 'Wednesday', hours: '9:00 AM to 5:00 PM' },
        { day: 'Thursday', hours: '9:00 AM to 5:00 PM' },
        { day: 'Friday', hours: '9:00 AM to 5:00 PM' },
        { day: 'Saturday', hours: '9:00 AM to 5:00 PM' },
      ]
    }
  }
}
</script>