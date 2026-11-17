// Вопросы с фотоситуациями. Данные и результаты остаются в браузере.
const photo = {
  crossing: {
    src: "https://images.unsplash.com/photo-1773154558364-d3207299a2ae?auto=format&fit=crop&w=1200&q=85",
    alt: "Пешеходы переходят городскую улицу по зебре",
    caption: "ФОТОСИТУАЦИЯ · ПЕШЕХОДНЫЙ ПЕРЕХОД"
  },
  street: {
    src: "https://images.unsplash.com/photo-1772489678302-9e11a75c1c09?auto=format&fit=crop&w=1200&q=85",
    alt: "Городская улица с автомобилями и переходом",
    caption: "ФОТОСИТУАЦИЯ · ГОРОДСКОЕ ДВИЖЕНИЕ"
  },
  signal: {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/60/Pedestrian_traffic_light.jpg",
    alt: "Пешеходный светофор возле перехода",
    caption: "ФОТОСИТУАЦИЯ · СИГНАЛ СВЕТОФОРА"
  },
  bus: {
    src: "https://images.unsplash.com/photo-1775037409691-10362464c4e8?auto=format&fit=crop&w=1200&q=85",
    alt: "Пешеход рядом с автобусом на городской улице",
    caption: "ФОТОСИТУАЦИЯ · ОБЩЕСТВЕННЫЙ ТРАНСПОРТ"
  },
  rainy: {
    src: "https://images.unsplash.com/photo-1778083141914-58b1527dab65?auto=format&fit=crop&w=1200&q=85",
    alt: "Пешеходная улица в дождливую погоду",
    caption: "ФОТОСИТУАЦИЯ · СЛОЖНЫЕ УСЛОВИЯ"
  }
};

const tickets = [
  {
    name: "ПЕШЕХОД И ПЕРЕХОД",
    questions: [
      {q:"Ты подошёл к нерегулируемому пешеходному переходу. Как правильно начать переход?",a:["Сразу выйти на проезжую часть","Остановиться, оценить обстановку и убедиться, что водители уступают","Посмотреть только в одну сторону"],c:1,p:"crossing",why:"Перед переходом остановись у края проезжей части, посмотри по сторонам и убедись, что водители заметили тебя и уступают дорогу."},
      {q:"На фотографии пешеходы находятся на переходе. Что важно сделать до выхода на такой переход?",a:["Убедиться, что приближающиеся автомобили остановились или уступают","Идти, не глядя на транспорт","Начать бежать, чтобы быстрее перейти"],c:0,p:"street",why:"Пешеходный переход обозначает место перехода, но не отменяет внимательность. Убедись, что водители тебя видят и пропускают."},
      {q:"Обзор дороги закрывает припаркованный автомобиль. Как поступить?",a:["Выйти из-за него быстрым шагом","Найти место с хорошим обзором и переходить только после оценки обстановки","Перелезть через ограждение"],c:1,p:"street",why:"Из-за стоящего автомобиля водитель может не увидеть пешехода, а пешеход — приближающуюся машину. Не выходи на дорогу вслепую."},
      {q:"Ты переходишь дорогу и слышишь сигнал автомобиля. Что следует делать?",a:["Продолжать идти, не обращая внимания","Остановиться и оценить ситуацию, не совершая резких движений","Побежать назад через поток машин"],c:1,p:"crossing",why:"Сохраняй спокойствие, оцени обстановку и действуй предсказуемо. Не делай резких движений перед автомобилем."},
      {q:"Где следует переходить дорогу, если поблизости есть пешеходный переход?",a:["В любом удобном месте","По пешеходному переходу","Между припаркованными автомобилями"],c:1,p:"street",why:"При наличии в зоне видимости пешеходного перехода дорогу следует переходить по нему."}
    ]
  },
  {
    name: "СВЕТОФОР И СИГНАЛЫ",
    questions: [
      {q:"На пешеходном светофоре горит зелёный сигнал. Что нужно сделать перед началом движения?",a:["Сразу выйти на дорогу","Убедиться, что транспорт остановился и переход безопасен","Посмотреть только на светофор"],c:1,p:"signal",why:"Зелёный сигнал разрешает движение, но важно убедиться, что поворачивающие и приближающиеся автомобили остановились."},
      {q:"Пешеходный светофор начал мигать зелёным. Как следует поступить, если ты ещё на тротуаре?",a:["Начать переход как можно быстрее","Подождать следующего разрешающего сигнала","Обойти светофор и перейти"],c:1,p:"signal",why:"Мигающий зелёный предупреждает о скором окончании разрешающего сигнала. Не начинай переход, если не успеваешь безопасно его завершить."},
      {q:"На перекрёстке для пешеходов горит красный сигнал. Что делать?",a:["Ждать разрешающего сигнала","Переходить, если машин пока нет","Ориентироваться только на сигналы автомобилей"],c:0,p:"signal",why:"Красный сигнал запрещает переход. Дождись зелёного и перед началом движения оцени обстановку."},
      {q:"Ты переходишь дорогу на зелёный, а автомобиль поворачивает направо. Как действовать?",a:["Не обращать внимания на автомобиль","Убедиться, что водитель уступает, и переходить внимательно","Ускориться и закрыть глаза"],c:1,p:"street",why:"При повороте водитель должен уступить пешеходу, но пешеходу всё равно нужно убедиться, что автомобиль действительно остановился."},
      {q:"На фотографии светофор находится рядом с проезжей частью. Почему нельзя ориентироваться только на сигнал?",a:["Сигналы светофора не имеют значения","Потому что нужно также следить за транспортом и дорожной обстановкой","Потому что пешеход всегда должен ждать пять минут"],c:1,p:"signal",why:"Светофор регулирует движение, однако внимательность необходима всегда: смотри по сторонам и убеждайся, что водители тебя пропускают."}
    ]
  },
  {
    name: "ОСТАНОВКА И ТРАНСПОРТ",
    questions: [
      {q:"Автобус остановился у остановки. Ты хочешь перейти дорогу перед ним. Как поступить?",a:["Обойти автобус спереди","Дождаться отъезда автобуса и перейти в безопасном месте","Пройти вплотную перед автобусом"],c:1,p:"bus",why:"Автобус закрывает обзор. Дождись его отъезда, затем найди пешеходный переход и убедись, что дорога свободна."},
      {q:"Почему опасно обходить автобус сзади, чтобы перейти дорогу?",a:["Из-за автобуса не видно приближающийся транспорт","Автобус может внезапно изменить цвет","Это разрешено только взрослым"],c:0,p:"bus",why:"Автобус и другие крупные транспортные средства ограничивают обзор. Не выходи на проезжую часть из-за них."},
      {q:"Ты стоишь на остановке рядом с дорогой. Как безопаснее ожидать транспорт?",a:["Стоять на краю бордюра","Находиться на тротуаре или посадочной площадке, не выходя на проезжую часть","Стоять на дороге, чтобы автобус заметил"],c:1,p:"rainy",why:"Ожидай транспорт в безопасном месте — на тротуаре или посадочной площадке. Не стой на краю проезжей части."},
      {q:"После выхода из автобуса ты собираешься перейти дорогу. Что сделать сначала?",a:["Сразу перейти перед автобусом","Дождаться, когда автобус отъедет, и найти переход","Обойти автобус сзади"],c:1,p:"bus",why:"Не переходи дорогу перед или за стоящим автобусом. Он может закрывать тебя от водителей других машин."},
      {q:"На мокрой дороге автомобиль может остановиться не сразу. Как это учитывать?",a:["Выходить на переход без проверки","Дать водителю время остановиться и убедиться, что он уступает","Подавать сигнал рукой и идти"],c:1,p:"rainy",why:"На мокром покрытии тормозной путь может увеличиваться. Не начинай переход, пока не убедишься, что автомобиль остановился."}
    ]
  },
  {
    name: "БЕЗОПАСНЫЙ МАРШРУТ",
    questions: [
      {q:"Ты идёшь к переходу и читаешь сообщение на телефоне. Как лучше поступить?",a:["Продолжать читать на ходу","Убрать телефон и сосредоточиться на дороге","Смотреть в телефон, если рядом нет взрослых"],c:1,p:"crossing",why:"Телефон отвлекает внимание. Перед переходом убери его и полностью сосредоточься на дорожной обстановке."},
      {q:"Какой маршрут от дома до школы безопаснее?",a:["Самый короткий, даже если приходится идти по проезжей части","По тротуарам, освещённым улицам и пешеходным переходам","Через парковку между машинами"],c:1,p:"street",why:"Безопасный маршрут проходит по тротуарам и оборудованным переходам. Лучше потратить немного больше времени, чем рисковать."},
      {q:"Что поможет водителю заметить пешехода в сумерках?",a:["Световозвращающие элементы на одежде или рюкзаке","Тёмная одежда без деталей","Наушники с яркой подсветкой"],c:0,p:"rainy",why:"Световозвращатели отражают свет фар и помогают водителю раньше заметить пешехода."},
      {q:"Почему опасно переходить дорогу в наушниках с громкой музыкой?",a:["Можно не услышать приближающийся транспорт и сигналы","Наушники мешают видеть разметку","Это запрещено только в дождь"],c:0,p:"crossing",why:"На дороге важно воспринимать окружающую обстановку всеми доступными способами. Убери наушники или сделай звук выключенным перед переходом."},
      {q:"Вы с друзьями подошли к дороге большой группой. Как безопаснее перейти?",a:["Толпой выбежать на дорогу","Не толкаться, дождаться разрешающего сигнала и переходить организованно","Переходить по одному в случайных местах"],c:1,p:"street",why:"Группе важно сохранять порядок, не толкаться и не выбегать на дорогу. Переходите в разрешённом месте и соблюдайте сигналы."}
    ]
  }
];

const $ = selector => document.querySelector(selector);
const ticketGrid = $("#ticket-grid");
const quizPanel = $("#quiz-panel");
const resultPanel = $("#result-panel");
let activeTicket = 0;
let questionIndex = 0;
let selectedAnswer = null;
let isChecked = false;
let correctAnswers = 0;
let wrongQuestions = [];
let activeQuestions = [];
let isRetryRun = false;

function startTicket(ticketIndex, retry = false) {
  activeTicket = ticketIndex;
  questionIndex = 0;
  selectedAnswer = null;
  isChecked = false;
  correctAnswers = 0;
  if (!retry) wrongQuestions = [];
  isRetryRun = retry;
  activeQuestions = retry ? wrongQuestions.map(i => tickets[ticketIndex].questions[i]) : tickets[ticketIndex].questions;
  ticketGrid.hidden = true;
  resultPanel.hidden = true;
  quizPanel.hidden = false;
  renderQuestion();
  quizPanel.scrollIntoView({behavior:"smooth", block:"start"});
}

function renderQuestion() {
  const ticket = tickets[activeTicket];
  const item = activeQuestions[questionIndex];
  selectedAnswer = null;
  isChecked = false;
  $("#quiz-ticket-name").textContent = `БИЛЕТ № 0${activeTicket + 1} · ${ticket.name}`;
  $("#quiz-question-count").textContent = `${isRetryRun ? "ПОВТОР" : "ВОПРОС"} ${questionIndex + 1} / ${activeQuestions.length}`;
  $("#quiz-progress-fill").style.width = `${(questionIndex / activeQuestions.length) * 100}%`;
  $("#question-topic").textContent = ticket.name;
  $("#question-title").textContent = item.q;
  $("#question-image").src = photo[item.p].src;
  $("#question-image").alt = photo[item.p].alt;
  $("#question-image-caption").textContent = photo[item.p].caption;
  $("#explanation").hidden = true;
  $("#explanation").innerHTML = "";
  $("#quiz-hint").textContent = "Выбери один вариант ответа.";
  $("#answer-check").disabled = true;
  $("#answer-check").innerHTML = "Ответить <span>→</span>";
  $("#answer-list").innerHTML = item.a.map((answer, index) => `
    <button class="answer" type="button" data-answer="${index}">
      <span class="answer-letter">${String.fromCharCode(65 + index)}</span>
      <span>${escapeHTML(answer)}</span>
    </button>`).join("");
  $("#answer-list").querySelectorAll(".answer").forEach(button => {
    button.addEventListener("click", () => selectAnswer(Number(button.dataset.answer)));
  });
}

function selectAnswer(index) {
  if (isChecked) return;
  selectedAnswer = index;
  $("#answer-list").querySelectorAll(".answer").forEach(button => {
    button.classList.toggle("selected", Number(button.dataset.answer) === index);
  });
  $("#answer-check").disabled = false;
}

function checkAnswer() {
  if (selectedAnswer === null || isChecked) return;
  isChecked = true;
  const item = activeQuestions[questionIndex];
  const right = selectedAnswer === item.c;
  if (right) correctAnswers++;
  else if (!isRetryRun) wrongQuestions.push(questionIndex);

  $("#answer-list").querySelectorAll(".answer").forEach((button, index) => {
    button.disabled = true;
    if (index === item.c) button.classList.add("correct");
    if (index === selectedAnswer && !right) button.classList.add("wrong");
  });
  $("#explanation").hidden = false;
  $("#explanation").innerHTML = `<b>${right ? "Верный ответ" : "Разберём ошибку"}</b>${escapeHTML(item.why)}`;
  $("#quiz-hint").textContent = right ? "Ответ засчитан." : "Вопрос добавлен в список ошибок для повторения.";
  $("#answer-check").innerHTML = questionIndex === activeQuestions.length - 1 ? "Результат →" : "Следующий вопрос →";
}

function nextQuestion() {
  if (!isChecked) return;
  questionIndex++;
  if (questionIndex < activeQuestions.length) renderQuestion();
  else showResult();
}

function showResult() {
  quizPanel.hidden = true;
  resultPanel.hidden = false;
  const total = activeQuestions.length;
  let headline = "Есть темы для повторения";
  let description = "Посмотри разбор ошибок и попробуй решить билет ещё раз.";
  if (correctAnswers >= Math.ceil(total * 0.8)) {
    headline = "Хороший результат";
    description = "Ты уверенно справился с большинством заданий. Продолжай быть внимательным на дороге.";
  }
  if (correctAnswers === total) {
    headline = "Билет решён без ошибок";
    description = "Отличная работа! Ты правильно разобрал все фотоситуации этого билета.";
  }
  resultPanel.innerHTML = `
    <div class="result-mark">${String(correctAnswers).padStart(2,"0")}<span style="font-size:22px;color:#9aa9bc"> / ${String(total).padStart(2,"0")}</span></div>
    <h3>${headline}</h3>
    <p>${description}</p>
    <div class="result-breakdown">
      <div><b>${correctAnswers}</b>верных ответа</div>
      <div><b>${total - correctAnswers}</b>ошибок</div>
      <div><b>${Math.round(correctAnswers / total * 100)}%</b>результат</div>
    </div>
    ${(!isRetryRun && wrongQuestions.length) ? `<button class="btn btn-dark" id="retry-mistakes" type="button">Повторить ошибки ↻</button>` : ""}
    <button class="btn btn-dark" id="retry-ticket" type="button">Решить билет ещё раз ↻</button>
    <button class="back-link" id="result-back" type="button" style="margin-left:18px">К списку билетов</button>`;
  const retryMistakes = $("#retry-mistakes");
  if (retryMistakes) retryMistakes.addEventListener("click", () => startTicket(activeTicket, true));
  $("#retry-ticket").addEventListener("click", () => startTicket(activeTicket));
  $("#result-back").addEventListener("click", backToTickets);
  resultPanel.scrollIntoView({behavior:"smooth",block:"center"});
}

function backToTickets() {
  quizPanel.hidden = true;
  resultPanel.hidden = true;
  ticketGrid.hidden = false;
  ticketGrid.scrollIntoView({behavior:"smooth",block:"start"});
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  })[char]);
}

ticketGrid.querySelectorAll(".ticket-card").forEach(button => {
  button.addEventListener("click", () => startTicket(Number(button.dataset.ticket)));
});
$("#answer-check").addEventListener("click", () => isChecked ? nextQuestion() : checkAnswer());
$("#back-to-tickets").addEventListener("click", backToTickets);

// Мобильная навигация.
const menuToggle = $(".menu-toggle");
const nav = $("#nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Закрыть меню" : "Открыть меню");
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Открыть меню");
}));

// Кнопка прокрутки наверх.
const toTop = $("#to-top");
window.addEventListener("scroll", () => toTop.classList.toggle("visible", window.scrollY > 450), {passive:true});
toTop.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));
