<template>
  <div class="table-container">
    <h1 class="table-title">Campaign</h1>
    <div class="table-area">
      <table class="main-table">
        <thead>
          <tr class="table-header table-row">
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
              />
            </th>
            <th class="table-cell table-cell-starttime">
              <span>Start Time</span>
              <img
                class="header-cell-icon header-cell-icon-right"
                src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/sort.svg"
              />
            </th>
            <th class="table-cell table-cell-endtime">
              <span>End Time</span>
              <img
                class="header-cell-icon header-cell-icon-right"
                src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/sort.svg"
              />
            </th>
            <th class="table-cell table-cell-action">Action</th>
          </tr>
        </thead>
        <tbody class="table-body">
          <tr class="table-row" v-for="ad in ads" :key="ad.id">
            <td class="table-cell table-cell-checkbox">
              <input type="checkbox" />
            </td>
            <td class="table-cell table-cell-id">{{ ad.id }}</td>
            <td class="table-cell table-cell-name">{{ ad.name }}</td>
            <td class="table-cell table-cell-description">
              {{ ad.description }}
            </td>
            <td class="table-cell table-cell-price">{{ ad.price }}</td>
            <td class="table-cell table-cell-starttime">{{ ad.startTime }}</td>
            <td class="table-cell table-cell-endtime">{{ ad.endTime }}</td>
            <td class="table-cell table-cell-action">
              <img
                class="cell-action-icon"
                src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/menu.svg"
                :id="`icon-${ad.id}`"
                alt="menu"
                @click="toggleMenu"
              />
              <!-- menu -->
              <!-- 運用 aria 屬性，增進網頁無障礙的使用體驗，labelledby 可綁定 toogle 元素的 id -->
              <div
                class="action-menu"
                role="dialog"
                aria-modal="true"
                :aria-labelledby="`icon-${ad.id}`"
                v-if="showDetail"
              >
                <menu class="menu-body">
                  <menuitem class="menu-item">
                    <img
                      src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/duplicate.svg"
                      class="menu-item-icon"
                    />
                    <span>Duplicate</span>
                  </menuitem>
                  <menuitem class="menu-item">
                    <img
                      src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/edit.svg"
                      class="menu-item-icon"
                    />
                    <span>Edit</span>
                  </menuitem>
                  <menuitem class="menu-item">
                    <img
                      src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/delete.svg"
                      class="menu-item-icon"
                    />
                    <span>Delete</span>
                  </menuitem>
                </menu>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
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
    endTime: "2021-01-25",
  },
  {
    id: 5,
    name: "M35-45 + Taipei",
    description: "房子 + slogan",
    price: 150000,
    startTime: "2021-01-19",
    endTime: "2021-01-25",
  },
];

export default {
  data() {
    return {
      ads: [],
      showDetail: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showDetail = !this.showDetail;
    },
    // 模擬串接 API
    fetchAds() {
      this.ads = [...dummyAds];
    },
  },
  created() {
    this.fetchAds();
  },
};
</script>

<style scoped>
.table-container {
  height: 100%;
  padding: 2rem 2.5rem 1rem 1rem;
}

.table-title {
  margin: 1rem 0 1rem 0;
}

.table-header {
  background: var(--header-color);
  color: var(--header-text-color);
}

.table-row {
  height: 50px;
  border-bottom: 1px solid var(--border-color);
}

.table-cell {
  text-align: center;
}

.table-cell-checkbox {
  width: 50px;
}

.table-cell-id {
  width: 80px;
}

.table-cell-name,
.table-cell-advertiser,
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

.cell-advertiser-line {
  display: block;
}

.cell-advertiser-line-group {
  color: var(--table-grey-text);
}

.table-cell-description {
  width: 200px;
}

.table-cell-action {
  width: 100px;
  position: relative;
}

.cell-action-icon,
.header-cell-icon {
  cursor: pointer;
}

.header-cell-icon-right {
  position: absolute;
  right: 0;
}

/* .hidden {
  display: none;
} */

.menu-body {
  display: flex;
  flex-direction: column;
  padding-left: 12px;
}

.menu-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 40px;
}

.menu-item-icon {
  margin-right: 14px;
}

.action-menu {
  z-index: 999;
  position: absolute;
  top: 100%;
  right: 50%;
  width: 140px;
  height: 120px;
  background: var(--white);
  border: 1px solid var(--border-color);
}
</style>