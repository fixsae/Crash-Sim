# Сайт T0ssi Studios: Crash Sim

Простой статический сайт (HTML + CSS + JS, без сборки) для **GitHub Pages**. Есть кнопка «Скачать APK» и кнопка «Играть в браузере» с веб-демо игры.

## Что лежит в папке
```
index.html        главная страница (игра, возможности, скриншоты, версии, скачать, студия)
privacy.html      политика конфиденциальности (нужна для Google Play и AdMob)
style.css         дизайн (белый и голубой)
main.js           сам находит скриншоты в screenshots/ и делает галерею
app-ads.txt       для AdMob (заполнишь позже)
favicon.svg       иконка вкладки
assets/logo.svg   логотип T0ssi Studios
screenshots/      сюда скриншоты: 1.jpg, 2.jpg, 3.jpg ... (первый станет главной картинкой)
downloads/        сюда APK: crash-sim.apk
play/             сюда веб-версия игры из Godot (index.html и остальные файлы)
.nojekyll         чтобы GitHub отдавал все файлы как есть
```

## 1. Что заменить перед загрузкой
- **Скриншоты:** положи в `screenshots/` файлы `1.jpg`, `2.jpg`… (можно `.png`, лучше 1280×720 или 1920×1080). Их может быть до 12, галерея соберётся сама.
- **APK:** собери игру (Godot → Export → Android) и положи файл как `downloads/crash-sim.apk`.
- **privacy.html:** впиши дату и свой e-mail вместо `ДД.ММ.ГГГГ` и `твой-email@gmail.com`.

## 2. Веб-версия игры (демо)
В проекте игры (`crash-sim-v9`) уже есть **режим демо**. Он включается сам при экспорте под Web:
- только седан и карта «Прототип»;
- нет трафика, фар, мигалок, ночи, дождя, магазина и монет;
- кузов на лёгкой сетке 36 узлов, чтобы быстро работало в браузере;
- в паузе есть кнопка «Скачать полную версию», она ведёт на `index.html#download`.

Как экспортировать:
1. Godot → **Editor → Manage Export Templates**: шаблоны должны быть установлены (они же нужны для Android).
2. **Project → Export →** выбери пресет **Web** (он уже добавлен).
3. Нажми **Export Project** и выбери папку `play/` сайта. Имя файла **`index.html`**. Заглушку `play/index.html` можно заменить.
4. В `play/` появятся `index.html`, `.js`, `.wasm`, `.pck` и другие файлы. Загрузи их все.

> В пресете выключены потоки (`thread_support = false`), поэтому игра работает на GitHub Pages без особых настроек сервера. Если Godot ругается, проверь именно эту галочку.
>
> Проверить на ПК: файл `index.html` нельзя просто открыть двойным кликом, браузер его заблокирует. В Godot нажми иконку **Remote Debug → Run in Browser**, или в папке сайта запусти `python -m http.server` и открой http://localhost:8000.

## 3. Залить на GitHub Pages (бесплатно)
1. Зарегистрируйся на https://github.com. Ник лучше сделать **t0ssi**, тогда адрес будет `t0ssi.github.io`.
2. Нажми **New repository**.
   - Название: **`t0ssi.github.io`** (точно `ник.github.io`, тогда сайт откроется по корневому адресу). Если назвать иначе, например `crash-sim`, адрес будет `ник.github.io/crash-sim`.
   - Public → **Create repository**.
3. На странице репозитория: **Add file → Upload files**. Перетащи **содержимое** папки сайта (не саму папку). Затем **Commit changes**.
   - Файл `.nojekyll` скрытый. Если он не загрузился, нажми **Add file → Create new file**, назови `.nojekyll` и сохрани пустым.
4. **Settings → Pages → Source: Deploy from a branch → Branch: `main` / `(root)` → Save.**
5. Через 1–2 минуты сайт откроется по адресу `https://t0ssi.github.io`.

Обновлять сайт так же: **Upload files**, и новые файлы заменят старые.

### Ограничения GitHub
- Один файл не больше **100 МБ** (через браузер не больше 25 МБ). Если APK больше 25 МБ, загрузи его через **Releases → Draft a new release** (там до 2 ГБ) и поменяй ссылку кнопки в `index.html`:
  `href="downloads/crash-sim.apk"` → `href="https://github.com/НИК/РЕПОЗИТОРИЙ/releases/latest/download/crash-sim.apk"`.
- Если `.pck` веб-версии больше 25 МБ, тоже используй GitHub Desktop (https://desktop.github.com), там лимит 100 МБ.

## 4. Позже
- **Свой домен** `t0ssi.com` (около $10 в год, например на Namecheap или Porkbun): Settings → Pages → Custom domain.
- **AdMob:** вставь строку из AdMob в `app-ads.txt`.
- **Google Play:** замени кнопку «Скачать APK» на ссылку Google Play, а в Play Console укажи ссылку на `privacy.html`.
