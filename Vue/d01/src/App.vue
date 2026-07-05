<template>
  <div class="app">
    <nav class="navbar">
      <div class="nav-links">
        <button @click="setPage('form')" :class="['nav-btn', currentPage === 'form' ? 'active' : '']">
          Add Person
        </button>

        <button @click="setPage('users')" :class="['nav-btn', currentPage === 'users' ? 'active' : '']">
          Users
          <span class="badge" v-if="users.length">{{ users.length }}</span>
        </button>

        <button @click="setPage('admins')" :class="['nav-btn', currentPage === 'admins' ? 'active' : '']">
          Admins
          <span class="badge" v-if="admins.length">{{ admins.length }}</span>
        </button>
      </div>

      <button class="theme-toggle" @click="toggleTheme">
        <span v-if="dark"> Light</span>
        <span v-else>Dark</span>
      </button>
    </nav>

    <main class="main">
      <div v-if="currentPage === 'form'">
        <FormComponent @add-person="addPerson" />
      </div>

      <div v-else-if="currentPage === 'users'">
        <UsersComponent :users="users" @delete-user="deleteUser" />
      </div>

      <div v-else>
        <AdminsComponent :admins="admins" @delete-admin="deleteAdmin" />
      </div>
    </main>
  </div>
</template>

<script>
import FormComponent from "./components/Form.vue";
import UsersComponent from "./components/Users.vue";
import AdminsComponent from "./components/Admins.vue";

export default {
  name: "App",

  data() {
    return {
      currentPage: "form",
      users: [],
      admins: [],
      dark: false,
    };
  },

  methods: {
    toggleTheme() {
      this.dark = !this.dark;
      document.documentElement.classList.toggle("dark-theme", this.dark);
    },

    setPage(page) {
      this.currentPage = page;
    },

    addPerson(person) {
      if (person.role === "user") {
        this.users.push(person);
        this.setPage("users");
      } else {
        this.admins.push(person);
        this.setPage("admins");
      }
    },

    deleteUser(id) {
      this.users = this.users.filter((u) => u.id !== id);
    },

    deleteAdmin(id) {
      this.admins = this.admins.filter((a) => a.id !== id);
    },
  },

 
  components: {
    FormComponent,
    UsersComponent,
    AdminsComponent,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #f0f2f8;
  --nav-bg: #3730a3;
  --card-bg: #ffffff;
  --text-main: #1e1b4b;
  --text-muted: #6b7280;
  --nav-text: #c7d2fe;
  --border: #e0e7ff;
}

.dark-theme {
  --bg: #0f172a;
  --nav-bg: #020617;
  --card-bg: #1e293b;
  --text-main: #f9fafb;
  --text-muted: #94a3b8;
  --nav-text: #94a3b8;
  --border: #334155;
}

body {
  background: var(--bg);
  transition: background 0.3s ease, color 0.3s ease;
  font-family: system-ui, sans-serif;
}

.app {
  min-height: 100vh;
}

/* Navbar */
.navbar {
  background: var(--nav-bg);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/* Buttons */
.nav-btn {
  background: transparent;
  border: none;
  color: var(--nav-text);
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.nav-btn.active {
  color: white;
  font-weight: bold;
}

/* Theme button */
.theme-toggle {
  position: absolute;
  right: 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  cursor: pointer;
}

.theme-toggle:hover {
  background: rgba(255, 255, 255, 0.2);
}

.badge {
  background: #6366f1;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 999px;
}

.nav-links {
  display: flex;
  gap: 0.5rem;
}

.active {
  color: white;
  font-weight: bold;
}

/* Main */
.main {
  max-width: 680px;
  margin: 2.5rem auto;
  padding: 0 1rem;
}
</style>