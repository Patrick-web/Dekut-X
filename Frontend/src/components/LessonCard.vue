<template>
  <div class="LessonCard">
    <h3>Lesson 1: Introduction</h3>
    <div class="cardBody">
      <div class="cardItem">
        <span class="iconArea"
          ><img src="@/assets/powerpoint.png" alt=""
        /></span>
        <span class="description">Normalization Assignment </span>
      </div>
      <div class="cardItem">
        <span class="iconArea"
          ><img src="@/assets/powerpoint.png" alt=""
        /></span>
        <span class="description"
          >Submission of Demonstration of Concurrency ProblemsAssignment
        </span>
      </div>
      <div class="cardItem">
        <span class="iconArea"
          ><img src="@/assets/powerpoint.png" alt=""
        /></span>
        <span class="description">Normalization Assignment </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.LessonCard {
  background: #373737;
  margin-bottom: 20px;
  cursor: pointer;
  h3 {
    width: 100%;
    background: white;
    color: black;
    padding: 5px;
    padding-right: 0px;
    padding-left: 0px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.26);
  }
  .cardBody {
    padding: 10px;
    .cardItem {
      padding: 10px;
      border-bottom: 1px solid grey;
      display: flex;
      align-items: center;
      color: white;
      transition: none;
      .iconArea {
        img {
          max-width: 50px;
          width: 50%;
        }
      }
    }
  }
}
.cardItem:hover {
  background: rgba(230, 230, 250, 0.068);
}
@media (max-width: 700px) {
  .cardItem {
    display: grid !important;
    grid-template-columns: 1fr 3fr;
    text-align: left;
  }
}
</style>
