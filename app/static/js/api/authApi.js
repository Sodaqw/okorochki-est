const API_URL = 'https://okorochki-est.onrender.com/api';
//Функция для регистрации пользователя
export async function registerUser(data) {
    const response = await fetch(
        `${API_URL}/register`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );
    return await response.json();
}
//Функция для входа пользователя
export async function loginUser(data) {
    const response = await fetch(
        `${API_URL}/login`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );
    return await response.json();
}
