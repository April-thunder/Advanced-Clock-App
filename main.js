// Случайные цитаты по нажатию кнопки

    const quoteBtn = document.querySelector('.quote-btn');
    const quoteText = document.querySelector('.quote-text');

    let quotes = 
        [ 
            '"Помните: вы притягиваете к себе то, во что вы верите."',
            '"Когда вам покажется, что цель недостижима – не изменяйте цель – измените свой план действий."',
            '"Путешествуйте не для того, чтобы сбежать от жизни, а для того, чтобы жизнь не сбежала от нас."',
            '"Если это важно для тебя, ты найдешь время, возможность и способ. Если нет – оправдание."',
            '"Ваши близкие люди, ваша семья будут счастливы лишь тогда, когда будете счастливы вы!"',
            '"Неудача – это просто возможность начать снова, но уже более мудро."',
            '"Если ты хочешь быть лучше остальных, то приготовься делать то, что остальные не хотят делать."',
            '"Всё когда-нибудь заканчивается. Важно то, что начинается после."',
            '"Будь несчастным. Или мотивируй себя. Что бы ни было сделано, это всегда твой выбор."',
            '"Не старайтесь стать успешным человеком, а пытайтесь стать ценным человеком."'
        ];

    quoteBtn.addEventListener('click', function(){
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
        quoteText.innerHTML = randomQuote;
    });

// Часы

    // Переменные для работы функций времени

    let clock = document.querySelector('.time');
    let greetingTime = document.querySelector('.greeting');
    let timeBackground = document.querySelector('.main');
    let btmColor = document.querySelector('.bottom-section')
    let borderLineColor = document.querySelector('.btm__left')

    // Функция вывода времени

    function time() {

        let date = new Date()

        let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        let min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        let sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        
        clock.innerHTML = `${hours}:${min}`;
        return hours;
    }

    setInterval(time, 1000);

// Функция смены приветствия, фона, цвета шрифта, иконки приветствия, вертикальной черты, цвета фона нижней секции в зависимости от времени

    function greetingChange() {

        let timeForChange = time();

        // Проверка работы - Раскомментировать и менять число
        // let timeForChange = 22;

        if ((6 <= timeForChange) && (timeForChange <= 10)) {
            greetingTime.innerHTML = 'Good Morning, its Currently';
            greetingTime.classList.add("greeting--day");
            timeBackground.classList.add("main--day");
            btmColor.classList.add('bottom-section--day');
            borderLineColor.classList.add('btm__left--day')
        }

        else if ((10 < timeForChange) && (timeForChange <= 16)) {
            greetingTime.innerHTML = 'Good Day, its Currently';
            greetingTime.classList.add("greeting--day");
            timeBackground.classList.add("main--day");
            btmColor.classList.add('bottom-section--day');
            borderLineColor.classList.add('btm__left--day')
        }

        else if ((16 < timeForChange) && (timeForChange < 22)) {
            greetingTime.innerHTML = 'Good Evening, its Currently';
            greetingTime.classList.add("greeting--evening");
            timeBackground.classList.add("main--night");
        }

        else {
            greetingTime.innerHTML = 'Good Night, its Currently';
            greetingTime.classList.add("greeting--evening");
            timeBackground.classList.add("main--night");
        }
    }

    setInterval(greetingChange, 1);

// Изменение надписи, поворот кнопки More/Less, исчезновение цитаты, подьнм нижней секции

    const btnClock = document.querySelector('.clock-btn');
    const quoteBlock = document.querySelector('.quote-block');
    const timeWrapper = document.querySelector('.time-wrapper');
    const btnSection = document.querySelector('.bottom-section');


    btnClock.addEventListener('click', function() {
        btnClock.innerHTML = (btnClock.innerHTML === 'Less') ? btnClock.innerHTML = 'More' : btnClock.innerHTML = 'Less';
        btnClock.classList.toggle('clock-btn--less');
        quoteBlock.classList.toggle('quote-block--none');
        timeWrapper.classList.toggle('time-wrapper--short');
        btnSection.classList.toggle('bottom-section--active');
    })

// Вставляем данные в поднимающимся меню с помощью библиотеки Luxon

    const dayWeekYear = luxon.DateTime;

    // название временной зоны
    const timeZone = document.querySelector('.large-text--tz'); 
    const tz = dayWeekYear.now().zoneName;
    timeZone.textContent = tz;

    // день года
    const dayOfYear = document.querySelector('.large-text--day-year'); 
    const dy = dayWeekYear.now().ordinal;
    dayOfYear.textContent = dy;

    // день недели
    const dayOfWeek = document.querySelector('.large-text--day-week');
    const dw = dayWeekYear.now().weekday;
    dayOfWeek.textContent = dw;

    // номер недели в году
    const weekNumber = document.querySelector('.large-text--week-number');
    const wn = dayWeekYear.now().weekNumber;
    weekNumber.textContent = wn;

    // const today = dayWeekYear.now().day; - день месяца
    // const today = dayWeekYear.now().offsetNameLong;






