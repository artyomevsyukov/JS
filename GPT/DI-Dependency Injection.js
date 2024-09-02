// Интерфейс для отправки уведомлений
class NotificationService {
    send(message) {
        // Реализация в дочерних классах
    }
}

// Реализация для отправки email
class EmailService extends NotificationService {
    send(message) {
        console.log(`Отправка email: ${message}`);
    }
}

// Реализация для отправки SMS
class SMSService extends NotificationService {
    send(message) {
        console.log(`Отправка SMS: ${message}`);
    }
}

// Класс, который использует службу отправки уведомлений
class UserController {
    constructor(notificationService) {
        this.notificationService = notificationService; // Внедрение зависимости
    }

    notifyUser(message) {
        this.notificationService.send(message);
    }
}

// Внедрение зависимости
const emailService = new EmailService();
const userController = new UserController(emailService);
userController.notifyUser("sdfsdfds"); // Отправка email: Ваше уведомление.
