//Функция для выхода и перехода на страницу Вход
export function logout() {
    localStorage.removeItem('token');
    window.location.href = '/login';
}
