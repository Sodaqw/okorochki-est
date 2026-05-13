const API_URL = 'https://okorochki-est.onrender.com/api/applications';
///Функция для создания заявки на курс
export async function createApplication(data) {
    const response = await fetch(
        API_URL,
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
//Функция загрузки заявок
export async function loadApplications(userId) {
    const response = await fetch(
        `${API_URL}/${userId}`
    );
    return await response.json();
}
