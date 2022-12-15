Vue.component("graphBar", {
  props: ["labels", "values", "type"],
  template: '<canvas width="400" height="200"></canvas>',
  mounted: function () {
    new Chart(this.$el, {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: [
          {
            label: "",
            data: this.values,
            backgroundColor: [
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "rgba(255, 206, 86, 0.6)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)",
              "hsl(10, 79%, 65%)"
            ],

            borderRadius: 10

          }
        ]
      },
      options: {

        plugins: {
          legend: {
            display: false
          }
        },
        onHover: (event, chartElement) => {
          event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
        },

        tooltips: {
          callbacks: {
            label: function (tooltipItem) {
              return tooltipItem.yLabel;
            }
          }
        },
        scales: {

          y: {
            display: false,
          },

          yAxes: [
            {
                ticks: {
                    beginAtZero: true
                }
            }
        ]

        }
      }
    });
  }
})

new Vue({
  el: "#app",
  data: {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    votes: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48]
  }
})