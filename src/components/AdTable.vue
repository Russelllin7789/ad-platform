<template>
  <div class="table-container">
    <h1 class="table-title">Campaign</h1>
    <div class="table-area">
      <table class="main-table">
        <thead>
          <tr class="table-header">
            <th class="table-cell table-cell-checkbox">
              <input type="checkbox" />
            </th>
            <th class="table-cell table-cell-id">ID</th>
            <th class="table-cell table-cell-name">Name</th>
            <th class="table-cell table-cell-description">Descripton</th>
            <th class="table-cell table-cell-price">
              <span>Price</span>
              <img
                class="header-cell-icon header-cell-icon-right"
                src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/sort.svg"
                @click="handleSortByPrice"
              />
            </th>
            <th class="table-cell table-cell-starttime">
              <span>Start Time</span>
              <img
                class="header-cell-icon header-cell-icon-right"
                src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/sort.svg"
                @click="handleSortByStartTime"
              />
            </th>
            <th class="table-cell table-cell-endtime">
              <span>End Time</span>
              <img
                class="header-cell-icon header-cell-icon-right"
                src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/sort.svg"
                @click="handleSortByEndTime"
              />
            </th>
            <th class="table-cell table-cell-action">Action</th>
          </tr>
        </thead>
        <tbody class="table-body">
          <AdRow
            v-for="ad in ads"
            :key="ad.id"
            :initial-ad="ad"
            @handle-delete="handleDelete"
            @handle-duplicate="handleDuplicate"
          />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AdRow from "../components/AdRow";
import dayjs from "dayjs";

const dummyAds = [
  {
    id: 1,
    name: "M18-21 + Taipei",
    description: "潮車 + slogan",
    price: 20000,
    startTime: "2021-01-18",
    endTime: "2021-01-25",
  },
  {
    id: 2,
    name: "F18-21 + Taipei",
    description: "洋裝 + slogan",
    price: 50000,
    startTime: "2021-01-13",
    endTime: "2021-01-25",
  },
  {
    id: 3,
    name: "M25-30 + Taipei",
    description: "工作 + slogan",
    price: 35000,
    startTime: "2021-01-01",
    endTime: "2021-01-25",
  },
  {
    id: 4,
    name: "F35-45 + Taipei",
    description: "家電 + slogan",
    price: 70000,
    startTime: "2020-11-11",
    endTime: "2021-02-25",
  },
  {
    id: 5,
    name: "M35-45 + Taipei",
    description: "房子 + slogan",
    price: 150000,
    startTime: "2021-01-19",
    endTime: "2021-01-20",
  },
];

export default {
  components: {
    AdRow,
  },
  data() {
    return {
      ads: [],
    };
  },
  methods: {
    // 模擬串接 API
    fetchAds() {
      this.ads = [...dummyAds];
    },
    handleDelete(adId) {
      this.ads = this.ads.filter((ad) => ad.id !== adId);
    },
    handleDuplicate(adId) {
      let data = dummyAds[adId - 1];
      this.ads.push({
        id: this.ads.length + 1,
        name: data.name,
        description: data.description,
        price: data.price,
        startTime: data.startTime,
        endTime: data.endTime,
      });
    },
    handleSortByPrice() {
      this.ads = this.ads.sort((a, b) => {
        return a.price - b.price;
      });
    },
    handleSortByStartTime() {
      this.ads = this.ads.sort((a, b) => {
        return dayjs(a.startTime) - dayjs(b.startTime);
      });
    },
    handleSortByEndTime() {
      this.ads = this.ads.sort((a, b) => {
        return dayjs(a.endTime) - dayjs(b.endTime);
      });
    },
  },
  created() {
    this.fetchAds();
  },
};
</script>

<style scoped>
.table-container {
  background: var(--background-grey);
  height: 100%;
  padding: 0 0 0 1rem;
}

.table-title {
  padding: 2rem 2.5rem 1rem 1rem;
  color: var(--main-text-color);
}

.table-header {
  background: var(--header-color);
  color: var(--header-text-color);
  height: 50px;
  border-bottom: 1px solid var(--border-color);
}

.table-cell {
  text-align: center;
  color: var(--main-text-color);
}

.table-cell-checkbox {
  width: 50px;
}

.table-cell-id {
  width: 80px;
}

.table-cell-name,
.table-cell-price,
.table-cell-starttime,
.table-cell-endtime {
  width: 140px;
}

.table-cell-price,
.table-cell-starttime,
.table-cell-endtime {
  position: relative;
}

.table-cell-description {
  width: 200px;
}

.header-cell-icon {
  cursor: pointer;
}

.header-cell-icon-right {
  position: absolute;
  right: 0;
}
</style>