<template>
  <div>
    <h2>Admins</h2>
    <div v-if="admins.length === 0" class="empty">No admins yet. Add one from the form.</div>
    <div class="card-list">
      <div class="card" v-for="admin in admins" :key="admin.id">
        <div class="card-info">
          <p>{{ admin.name }}</p>
          <p>{{ admin.email }}</p>
        </div>
        <button class="delete-btn" @click="deleteAdmin(admin.id)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminsComponent",
  props: {
    admins: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    deleteAdmin(id) {
      this.$emit("delete-admin", id);
    },
  },
};
</script>

<style scoped>
h2 {
  color: var(--text-main);
  margin-bottom: 1.25rem;
  font-size: 1.2rem;
}

.card-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card {
  background: var(--card-bg);
  border-radius: 10px;
  padding: 1rem 1.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card-info p {
  margin: 0;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.card-info p:first-child {
  font-weight: 600;
  font-size: 0.97rem;
  color: var(--text-main);
  margin-bottom: 2px;
}

.delete-btn {
  background: #fee2e2;
  color: #dc2626;
  border: none;
  padding: 0.4rem 0.85rem;
  border-radius: 6px;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.delete-btn:hover {
  background: #fecaca;
}

.empty {
  text-align: center;
  color: var(--text-muted);
  padding: 2rem;
  background: var(--card-bg);
  border-radius: 10px;
  transition: all 0.3s ease;
}
</style>