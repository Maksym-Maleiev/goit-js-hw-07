# Критерії приймання

- Створено репозиторій `goit-js-hw-07`.
- Домашня робота містить два посилання: на вихідні файли і робочу сторінку на
  `GitHub Pages`.
- В консолі відсутні помилки і попередження під час відкриття живої сторінки
  завдання.
- Імена змінних і функцій - зрозумілі та описові.
- Код відформатований за допомогою `Prettier`.

## Стартові файли

- У [папці src](./src) знайдеш стартові файли з базовою розміткою і готовими
  стилями. Скопіюй їх собі у проект. Для цього завантаж цей репозиторій як архів
  або використовуй [сервіс DownGit](https://downgit.github.io/) для завантаження
  окремої папки з репозиторія.
- Файл `gallery-items.js` містить масив `galleryItems`, який містить об'єкти з
  інформацією про зображення: маленьке (прев`ю), оригінальне (велике) і опис. Ми
  вже підключили його до кожного з JS-файлів проекту.

## Завдання 1 - галерея зображень

Створи галерею з можливістю кліку по її елементах і перегляду повнорозмірного
зображення у модальному вікні. Подивися демо відео роботи галереї.

https://user-images.githubusercontent.com/17479434/127711719-4e293f5b-fbaa-4851-8671-fc841963d961.mp4

Виконуй це завдання у файлах `01-gallery.html` і `01-gallery.js`. Розбий його на
декілька підзавдань:

1. Створення і рендер розмітки на підставі масиву даних `galleryItems` і
   наданого шаблону елемента галереї.
2. Реалізація делегування на `ul.gallery` і отримання `url` великого зображення.
3. Підключення скрипту і стилів бібліотеки модального вікна
   [basicLightbox](https://basiclightbox.electerious.com/). Використовуй
   [CDN сервіс jsdelivr](https://www.jsdelivr.com/package/npm/basiclightbox?path=dist)
   і додай у проект посилання на мініфіковані (`.min`) файли бібліотеки.
4. Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся
   з [документацією](https://github.com/electerious/basicLightbox#readme) і
   [прикладами](https://basiclightbox.electerious.com/).
5. Заміна значення атрибута `src` елемента `<img>` в модальному вікні перед
   відкриттям. Використовуй готову розмітку модального вікна із зображенням з
   прикладів бібліотеки [basicLightbox](https://basiclightbox.electerious.com/).

### Розмітка елемента галереї

Посилання на оригінальне зображення повинно зберігатися в data-атрибуті `source`
на елементі `<img>`, і вказуватися в `href` посилання. Не додавай інші HTML теги
або CSS класи, крім тих, що містяться в цьому шаблоні.

```html
<ul class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</ul>
```

Зверни увагу на те, що зображення обгорнуте посиланням, отже по кліку за
замовчуванням користувач буде перенаправлений на іншу сторінку. Заборони цю
поведінку за замовчуванням.

### Закриття з клавіатури

> ⚠️ Наступний функціонал не обов'язковий для здавання завдання, але буде
> хорошою додатковою практикою.

Додай закриття модального вікна після натискання клавіші `Escape`. Зроби так,
щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно.
Бібліотекаи [basicLightbox](https://basiclightbox.electerious.com/) містить
метод для програмного закриття модального вікна.

## Завдання 2 - бібліотека `SimpleLightbox`

Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку
[SimpleLightbox](https://simplelightbox.com/), яка візьме на себе обробку кліків
по зображеннях, відкриття і закриття модального вікна, а також гортання
зображень за допомогою клавіатури.

https://user-images.githubusercontent.com/17479434/127714821-4b7527c8-01db-42d3-83f0-8c1578561982.mp4

Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.
