export default {
  AUTH_LOGIN: (name: string | null, email: string | null) => `Пользователь ${name || email} вошел в систему`,
  AUTH_REGISTER: (name: string | null, email: string | null) => `Пользователь ${name || email} зарегистрирован`,
  LOGOUT: 'Вы вышли из системы',
  REMOVE_ACCOUNT: 'Аккаунт удален'
}