const API_URL = 'https://okorochki-est.onrender.com/api/admin';
//Функция для входа администратора
export async function adminLogin(data) {
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
