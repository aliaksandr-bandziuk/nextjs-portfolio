import cookie from 'js-cookie';

export default function handler(req, res) {
  // Установка куки с именем "myCookie" и значением "example-value"
  cookie.set('myCookie', 'example-value', {
    // Дополнительные опции, такие как время истечения срока действия, домен, путь и т. д.
    expires: 7, // Срок действия - 7 дней
    path: '/', // Доступно на всех страницах
  });

  res.status(200).json({ message: 'Куки успешно установлены' });
}
