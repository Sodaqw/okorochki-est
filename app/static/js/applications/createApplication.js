import { showToast } from '../components/toast.js';
import { createApplication } from '../api/applicationApi.js';
//Функция для создания заявки
export function initCreateApplication() {
    const form = document.getElementById('applicationForm');
    form.addEventListener('submit',
    async (event) => {
        event.preventDefault();
        //Получение данных для БД
        const data = {
            user_id: localStorage.getItem('user_id'),
            course_name: document.getElementById('courseName').value,
            start_date: document.getElementById('startDate').value,
            payment_method: document.getElementById('paymentMethod').value
        };
        try {
            const response = await createApplication(data);
            showToast(response.message);
            form.reset();
            window.dispatchEvent(
                new Event(
                    'applicationsUpdated'
                )
            );
        } catch (error) {
            showToast('Ошибка сервера');
        }
    });
}
