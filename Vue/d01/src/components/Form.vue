<template>
  <div class="form-card">
    <h2>Add Person</h2>
    <form @submit.prevent="addPerson">

      <div class="field">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" v-model="formValues.name" :class="{ error: error.name }" />
        <span class="error-msg" v-if="error.name">{{ error.name }}</span>
      </div>

      <div class="field">
        <label>Email</label>
        <input type="email" placeholder="Enter your email" v-model="formValues.email" :class="{ error: error.email }" />
        <span class="error-msg" v-if="error.email">{{ error.email }}</span>
      </div>

      <div class="field">
        <label>Role</label>
        <div class="radio-group">
          <label class="radio-label">
            <input type="radio" value="user" v-model="formValues.role" />
            User
          </label>
          <label class="radio-label">
            <input type="radio" value="admin" v-model="formValues.role" />
            Admin
          </label>
        </div>
      </div>

      <button type="submit">Add Person</button>
    </form>
  </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  name: "FormComponent",
  data() {
    return {
      formValues: {
        name: "",
        email: "",
        role: "user",
      },
      error: {
        name: "",
        email: "",
      },
    };
  },
  methods: {
    addPerson() {
      let hasError = false;

      if (!this.formValues.name) {
        this.error.name = "Name is required";
        hasError = true;
      }

      if (!this.formValues.email) {
        this.error.email = "Email is required";
        hasError = true;
      } else {
        const emailPattern = /\S+@\S+\.\S+/;
        if (!emailPattern.test(this.formValues.email)) {
          this.error.email = "Invalid email format";
          hasError = true;
        }
      }

      if (hasError) return;

      const person = {
        id: uuidv4(),
        name: this.formValues.name,
        email: this.formValues.email,
        role: this.formValues.role,
      };

      this.$emit("add-person", person);

      this.formValues.name = "";
      this.formValues.email = "";
      this.formValues.role = "user";
    },
  },
  watch: {
    "formValues.name"(newVal) {
      if (newVal) this.error.name = "";
    },
    "formValues.email"(newVal) {
      if (newVal) this.error.email = "";
    },
  },
};
</script>

<style scoped>
.form-card {
  background: var(--card-bg);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

h2 {
  color: var(--text-main);
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
}

.field > label {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-main);
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 0.6rem 0.9rem;
  border: 1.5px solid var(--border);
  border-radius: 7px;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s;
  background: var(--bg);
  color: var(--text-main);
}

input[type="text"]:focus,
input[type="email"]:focus {
  border-color: #6366f1;
}

input.error {
  border-color: #ef4444;
}

.error-msg {
  color: #ef4444;
  font-size: 0.8rem;
}

.radio-group {
  display: flex;
  gap: 1.5rem;
}

.radio-label {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  color: var(--text-main);
  cursor: pointer;
}

button[type="submit"] {
  width: 100%;
  background: #4f46e5;
  color: #fff;
  border: none;
  padding: 0.7rem;
  border-radius: 7px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 0.5rem;
}

button[type="submit"]:hover {
  background: #3730a3;
}
</style>