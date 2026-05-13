const API_URL = 'https://okorochki-est.onrender.com/api/admin';
//Функция для получения заявок
export async function loadAllApplications() {
    const response = await fetch(
        `${API_URL}/applications`
    );
    return await response.json();
}
//Функция обновления статуса заявки
export async function updateStatus(
    applicationId,
    status
) {
    const response = await fetch(
        `${API_URL}/applications/${applicationId}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status
            })
        }
    );
    return await response.json();
}
