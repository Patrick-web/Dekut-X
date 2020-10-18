<template>
  <div class="CoursePage">
    <Navbar currentCourse="CCS 2102 Data Structures and Algorithms" />
    <div class="lessonCardsWrapper">
      <LessonCard />
      <LessonCard />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import LessonCard from "@/components/LessonCard.vue";
export default {
  components: {
    Navbar,
    LessonCard,
  },
};
</script>

<style>
.CoursePage {
  padding-top: 30px;
}
.lessonCardsWrapper {
  padding: 40px;
}
</style>
