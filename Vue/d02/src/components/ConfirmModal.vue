<template>
  <transition name="modal">
    <div class="modal-overlay" v-if="show" @click.self="$emit('cancel')">
      <div class="modal-card">
        <div class="modal-header">
          <div class="warning-icon">
            <i class="fas fa-exclamation-triangle"></i>
          </div>
          <h2>Confirm Deletion</h2>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to permanently remove this product from your inventory? This action cannot be undone.</p>
        </div>
        <div class="modal-footer">
          <button @click="$emit('cancel')" class="btn btn-outline">Cancel</button>
          <button @click="$emit('confirm')" class="btn btn-delete">Delete Product</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ConfirmModal',
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
}

.modal-card {
  background: white;
  padding: 40px;
  border-radius: 24px;
  max-width: 450px;
  width: 90%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  text-align: center;
}

.warning-icon {
  width: 60px;
  height: 60px;
  background: #ffebee;
  color: #b21f1f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin: 0 auto 20px;
}

h2 {
  color: #1a2a6c;
  margin-bottom: 15px;
}

p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 30px;
}

.modal-footer {
  display: flex;
  gap: 15px;
}

.btn {
  flex: 1;
  padding: 14px;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  transition: all 0.2s;
}

.btn-outline {
  background: #f8f9fa;
  color: #666;
}

.btn-outline:hover {
  background: #eee;
}

.btn-delete {
  background: #b21f1f;
  color: white;
}

.btn-delete:hover {
  background: #d32f2f;
  box-shadow: 0 5px 15px rgba(178, 31, 31, 0.3);
}

/* Modal Animation */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
