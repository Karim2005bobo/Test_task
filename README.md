Инструкция по запуску автоматических тестов
1. Клонируйте репозиторий:
git clone <url-репозитория>
cd <папка-проекта>
2. Установите зависимости - npm install
3. Создайте файл .env в корне проекта:
BASE_URL=https://qa-internship.avito.com
SELLER_ID_RANGE_START=111111
SELLER_ID_RANGE_END=999999
4. Для запуска всех тестов - npm test
5. Для запуска отдельных групп (например, позитивных) - npm run test:positive
6. Генерация отчета - npm run test:report
Ожидаемые результаты
Все тесты проходят (зелёный статус).
Отчёт генерируется в reports/test-report.html.
Логи ошибок — в logs/error.log
