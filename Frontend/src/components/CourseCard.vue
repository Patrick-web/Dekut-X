<template>
  <div class="CourseCard">
    <div class="header animated">
      <div class="editOptions">
        <img src="@/assets/pen.svg" alt="" />
      </div>
    </div>
    <div class="content">
      <h3>Computer Organization and Architecture and something else</h3>
      <div class="info">
        <p>CCS 1202</p>
        <p>SARAH MURAGE</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.CourseCard {
  background: #373737;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  border-bottom: 1px solid rgba(0, 0, 0, 0);
  .header {
    background: palevioletred;
    height: 150px;
    width: 100%;
    border-radius: 20px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    .editOptions {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      background: rgba(255, 255, 255, 0.329);
      backdrop-filter: blur(10px);
      margin-right: 5px;
      margin-top: 5px;
      img {
        width: 50%;
      }
    }
    .editOptions:hover {
      transform: scale(1.1) translate(-2px, 2px);
    }
  }
  h3 {
    height: 50px;
    text-align: left;
    transition: none;
  }
  .content {
    padding: 10px;
  }
  .info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    transition: none;
  }
}
.CourseCard:hover {
  background: #303030;
  .header {
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.26);
  }
}
</style>
