<template>
  <div class="nav-area d-flex" id="nav-area">
    <div class="brand-name-wrapper d-flex">
      <div class="brand-name">Ad Platform</div>
    </div>
    <ul class="nav-item-area">
      <li class="nav-item">
        <img src="../assets/frame.svg" alt="frame-image" class="image-frame" />
      </li>
      <li class="nav-item">
        <img
          src="../assets/folder.svg"
          alt="folder-image"
          class="image-folder"
        />
      </li>
      <li class="nav-item">
        <img src="../assets/mail.svg" alt="mail-image" class="image-mail" />
      </li>
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

.brand-name-wrapper:hover {
  background-color: #d2e9ff;
}

.brand-name-wrapper {
  background-color: #ffe66f;
  border-radius: 1.5rem;
  width: 80%;
  height: 4rem;
  line-height: 4rem;
  justify-content: center;
  margin-bottom: 5rem;
}

.brand-name {
  font-weight: 700;
  font-size: 1.3rem;
}

.nav-item-area {
  margin: 0;
  padding: 0;
}

.nav-item {
  width: 100%;
  margin-bottom: 2.5rem;
}

.image-frame:hover,
.image-folder:hover,
.image-mail:hover {
  cursor: pointer;
  transform: scale(1.1);
}
</style>