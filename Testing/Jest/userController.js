// userController.js
const NotificationService = require('./notificationService');

class UserController {
  constructor(notificationService) {
    this.notificationService = notificationService;
  }

  notifyUser(message) {
    this.notificationService.send(message);
  }
}

module.exports = UserController;
