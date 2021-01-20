<template>
  <div class="nav-area d-flex" id="nav-area">
    <div class="brand-name-wrapper d-flex">
      <div class="brand-name">Ad Platform</div>
    </div>
    <ul class="nav-item-area">
      <li class="nav-item">
        <router-link class="frame" :to="{ name: 'ad-platform' }">
          <img
            src="../assets/frame.svg"
            alt="frame-image"
            class="image-frame"
            id="image-frame"
            @click="toggleActive"
          />
        </router-link>
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
      <!-- dark mode toggle -->
      <li class="nav-item">
        <label class="sidebar-darkmode-label" for="dark-mode-toggle"></label>
        <input
          type="checkbox"
          class="sidebar-darkmode-input"
          id="dark-mode-toggle"
          @change="toggleDarkMode"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    toggleActive() {
      const frame = document.getElementById("image-frame");
      frame.classList.toggle("active");
    },
    toggleDarkMode() {
      // target the switch element
      const darkModeToggle = document.getElementById("dark-mode-toggle");
      // toggle handler
      const darkModeToggleHandler = (event) => {
        if (event.target.checked) {
          document.documentElement.setAttribute("theme", "dark");
        } else {
          document.documentElement.setAttribute("theme", "light");
        }
      };
      // bind the event
      darkModeToggle.addEventListener("change", darkModeToggleHandler);
    },
  },
};
</script>

<style scoped>
.nav-area {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background: var(--main-dark);
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
  margin-bottom: 5rem;
}

.image-frame:hover,
.image-folder:hover,
.image-mail:hover,
.image-darkmode-off:hover {
  cursor: pointer;
  transform: scale(1.1);
}

.active {
  transform: scale(1.5);
}

.sidebar-darkmode-label {
  background: var(--darkmode-toggle-url);
  background-size: 100% 100%;
  cursor: pointer;
  height: 36px;
  width: 100%;
}

.sidebar-darkmode-input {
  display: none;
}
</style>