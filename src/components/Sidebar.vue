<template>
  <div class="nav-area d-flex" id="nav-area">
    <div class="brand-name-wrapper d-flex">
      <div class="brand-name">Ad Platform</div>
    </div>
    <ul class="nav-item-area">
      <li class="nav-item">1</li>
      <li class="nav-item">2</li>
      <li class="nav-item">3</li>
    </ul>
  </div>
</template>

<style scoped>
.nav-area {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #03396a;
}

.brand-name-wrapper {
  background-color: #ffe66f;
  border-radius: 1.5rem;
  width: 90%;
  height: 4rem;
  line-height: 4rem;
  justify-content: center;
  margin-bottom: 2rem;
}

.brand-name {
  font-weight: 700;
  font-size: 1.2rem;
}

.nav-item-area {
  margin: 0;
  padding: 0;
}

.nav-item {
  width: 100%;
  margin-bottom: 1.5rem;
}
</style>