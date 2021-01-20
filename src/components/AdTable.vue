<template>
  <div class="table-container">
    <h1 class="table-title">Campaign</h1>
    <div class="table-area">
      <thead>
        <tr class="table__header table__row">
          <th class="table__cell table__cell--checkbox">
            <input type="checkbox" />
          </th>
          <th class="table__cell table__cell--id">ID</th>
          <th class="table__cell table__cell--name">名字</th>
          <th class="table__cell table__cell--advertiser">
            <span class="cell__advertiser__line">Advertiser</span>
            <span class="cell__advertiser__line cell__advertiser__line--group"
              >Group</span
            >
          </th>
          <th class="table__cell table__cell--description">Descripton</th>
          <th class="table__cell table__cell--price">
            <span>Price</span>
            <img
              class="header__cell__icon header__cell__icon--right"
              src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/sort.svg"
            />
          </th>
          <th class="table__cell table__cell--starttime">
            <span>Start Time</span>
            <img
              class="header__cell__icon header__cell__icon--right"
              src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/sort.svg"
            />
          </th>
          <th class="table__cell table__cell--endtime">
            <span>End Time</span>
            <img
              class="header__cell__icon header__cell__icon--right"
              src="https://raw.githubusercontent.com/ALPHACamp/WFE-data-table/0f97f3113bff18353154b8644eb0b31fff2a3bef/icons/sort.svg"
            />
          </th>
          <th class="table__cell table__cell--action">Action</th>
        </tr>
      </thead>
    </div>
  </div>
</template>

<style scoped>
.table-container {
  height: 100%;
  padding: 2rem 2.5rem 1rem 1rem;
}

.table-title {
  margin-top: 1rem;
}

.table__header {
  background: var(--header-color);
  color: var(--header-text-color);
}
</style>