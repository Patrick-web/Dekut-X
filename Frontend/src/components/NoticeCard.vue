<template>
  <div class="NoticeCard">
    <div class="bar"></div>
    <p>
      Semester Schedule 2020/2021 Academic Year - Applicable to 4th Year and 5th
      Year Students in Main Campus and All Students in Nairobi Campus
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.NoticeCard {
  background: #373737;
  font-weight: 300;
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  .bar {
    height: 10px;
    width: 100%;
    background: palevioletred;
  }
  p {
    padding: 10px;
  }
}
.NoticeCard:hover {
  .bar {
    background: rgb(247, 122, 247);
  }
}
</style>
