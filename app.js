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
              "hsl(186, 34%, 60%)",
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
          },

          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || '';

                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                }
                return label;
              },
              labelTextColor: function () {
                return '#fffaf5'
              },
              title: function () {
                return ''
              }
            }
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
          x: {
            border: {
              display: false
            },
            grid: {
              display: false,
              drawOnChartArea: true,
              drawTicks: true
            }
          },
          y: {
            display: false,
            border: {
              display: false
            },
            grid: {
              display: false,
              drawOnChartArea: true,
              drawTicks: true
            }
          }
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