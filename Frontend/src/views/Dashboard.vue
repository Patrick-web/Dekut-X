<template>
  <div class="Dashboard">
    <Navbar v-on:switchTo="switchTabs" />
    <div v-if="currentTab == 'courses'" class="coursesTab">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
    <div v-if="currentTab == 'notices'" class="noticesTab">
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
      <NoticeCard />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CourseCard from "@/components/CourseCard.vue";
import NoticeCard from "@/components/NoticeCard.vue";
export default {
  data() {
    return {
      currentTab: "courses",
    };
  },
  methods: {
    switchTabs(tab) {
      this.currentTab = tab;
    },
  },
  components: {
    Navbar,
    CourseCard,
    NoticeCard,
  },
};
</script>

<style>
.Dashboard {
  color: white;
  padding-top: 50px;
}
.coursesTab {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 40px;
  row-gap: 40px;
  padding: 40px;
}
.noticesTab {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 40px;
  row-gap: 40px;
  padding: 40px;
}
</style>
