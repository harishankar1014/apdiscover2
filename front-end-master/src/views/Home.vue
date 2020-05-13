<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{content}}</h3>
      <div id="chart">
        <!-- <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart> -->
        <vue-easy-pie-chart :percent="30"></vue-easy-pie-chart>
      </div>
    </header>
  </div>
</template>

<script>
import UserService from '../services/user.service';
import VueEasyPieChart from 'vue-easy-pie-chart'
  import 'vue-easy-pie-chart/dist/vue-easy-pie-chart.css'
export default {
  name: 'Home',
  components:{ VueEasyPieChart },
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
    );
  }
};

</script>
