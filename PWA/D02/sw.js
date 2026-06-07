self.addEventListener('notificationclick', event => {
    const notification = event.notification;
    const action = event.action;

    if (action === 'markdone') {
        self.clients.matchAll().then(clients => {
            clients.forEach(client => {
                client.postMessage({ taskId: notification.data.taskId });
            });
        });
    }

    notification.close();
});
