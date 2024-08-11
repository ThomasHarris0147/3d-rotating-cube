<script lang="ts">
export default {
  data() {
    return {
      datetimeString: ''
    }
  },
  mounted() {
    function getDateTime(): string {
      const myDate = new Date(new Date().getTime() - new Date(2021, 8, 15, 10, 30, 24).getTime())
      return (
        new Date().getFullYear() -
        2021 +
        ' years ' +
        myDate.getMonth() +
        ' months ' +
        myDate.getDate() +
        ' days ' +
        myDate.getHours() +
        ' hours ' +
        myDate.getMinutes() +
        ' minutes ' +
        myDate.getSeconds() +
        ' seconds'
      )
    }
    this.datetimeString = getDateTime()
    setInterval(() => {
      this.datetimeString = getDateTime()
    }, 1000)
  }
}
</script>

<template>
  <div class="container">
    <h1>About Me</h1>
    <pre>
Hello, my name is Thomas Harris. I am from Chiang Mai, Thailand. I have been a programmer now for 
{{ datetimeString }}.
I hope you enjoy my website! if you want to see more of me feel free to checkout my <a href="https://github.com/ThomasHarris0147">Github</a>, <a href="https://www.linkedin.com/in/thomas-saran-timmothy-harris/">Linkedin</a> or <a href="mailto:thomasharris0147@gmail.com">Email me</a>.</pre>
  </div>
</template>
<style scoped>
.container {
  display: block;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}

h1 {
  text-align: center;
}
</style>
