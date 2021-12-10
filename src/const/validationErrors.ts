export const validationErrors = {
  required: 'Заполните поле',
  noValidEmail: 'Укажите корректный email',
  minLength: (n: number) => `Минимальная длина ${n} символов`,
  noEqualPasswords: 'Пароли не совпадают',
  disAgree: 'Необходимо согласиться с соглашением',
  username: 'Укажите корректное имя',
  tel: 'Введите корректный номер',
  url: 'Недействительный url адрес'
}