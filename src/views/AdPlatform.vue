<template>
  <div class="all-container d-flex" id="all-container">
    <div class="sidebar-area" id="sidebar-area">
      <Sidebar />
    </div>
    <div class="ad-table-area" id="ad-table-area">
      <AdTable />
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import AdTable from "../components/AdTable";

export default {
  components: {
    Sidebar,
    AdTable,
  },
};
</script>
