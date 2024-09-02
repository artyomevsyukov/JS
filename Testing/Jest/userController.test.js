// userController.test.js
const UserController = require('./userController');
const NotificationService = require('./notificationService');

test('должен вызывать метод send у NotificationService', () => {
  // Создаем мок для NotificationService
  const notificationServiceMock = {
    send: jest.fn() // Создаем мок-метод send
  };

  // Создаем экземпляр UserController с использованием мока
  const userController = new UserController(notificationServiceMock);

  // Вызываем метод notifyUser
  userController.notifyUser('Тестовое сообщение');

  // Проверяем, что метод send был вызван один раз с правильным аргументом
  expect(notificationServiceMock.send).toHaveBeenCalledTimes(1);
  expect(notificationServiceMock.send).toHaveBeenCalledWith('Тестовое сообщение');
});
