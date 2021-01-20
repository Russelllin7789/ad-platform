<template>
  <tr class="table-row">
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
    <td class="table-cell table-cell-action-one">
      <img
        class="cell-action-icon"
        src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/menu.svg"
        :id="`icon-${ad.id}`"
        alt="menu"
        @click="toggleMenu()"
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
          <menuitem class="menu-item" @click="handleDelete(ad.id)">
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
</template>

<script>
export default {
  props: {
    initialAd: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ad: {
        id: -1,
        name: "",
        description: "",
        price: -1,
        startTime: "",
        endTime: "",
      },
      showDetail: false,
    };
  },
  methods: {
    toggleMenu() {
      this.showDetail = !this.showDetail;
    },
    fetchAd() {
      this.ad = { ...this.ad, ...this.initialAd };
    },
    handleDuplicate(id) {
      this.$emit("handle-duplicate", id);
    },
    handleDelete(id) {
      this.$emit("handle-delete", id);
    },
  },
  created() {
    this.fetchAd();
  },
};
</script>

<style scoped>
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

.table-cell-action-one {
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