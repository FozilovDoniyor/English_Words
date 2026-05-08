const STORAGE_KEY = 'english-vocab-words';
const STATS_KEY = 'english-vocab-stats';

const DEFAULT_WORDS = [];

const translations = {
  en: {
    siteTitle: 'English Words Practice',
    siteDescription: 'Add, save and repeat words with ease.',
    toggleLight: 'Light mode',
    toggleDark: 'Dark mode',
    tabAdd: 'Add Phrase',
    tabRepeat: 'Repeat',
    addHeading: 'Add a new phrase or word',
    englishLabel: 'English text',
    translationLabel: 'Translation',
    categoryLabel: 'Category',
    englishPlaceholder: 'English word or phrase',
    translationPlaceholder: 'Translation',
    categorySelect: 'Select',
    submitBtn: 'Save',
    filterCategoryLabel: 'Category',
    allCategories: 'All categories',
    showFavorites: 'Show favorites',
    showAllWords: 'Show all',
    favoriteBtn: '★',
    favoritedBtn: '★ Favorited',
    categoryDaily: 'Daily',
    categoryWork: 'Work',
    categoryTravel: 'Travel',
    categoryEducation: 'Education',
    categoryOther: 'Other',
    importHeading: 'Import/Export',
    importWarning: 'Warning: clearing browser data also deletes saved entries. Export your JSON first.',
    exportBtn: 'Export words (JSON)',
    importBtn: 'Import words (JSON)',
    savedHeading: 'Saved words',
    searchPlaceholder: 'Search...',
    emptyWordList: 'No words added yet.',
    repeatHeading: 'Repeat practice',
    startPractice: 'Start practice',
    questionLabel: 'Question:',
    answerLabel: 'Answer:',
    speakBtn: '🔊 Speak',
    showAnswerBtn: 'Show answer',
    correctBtn: 'Correct',
    wrongBtn: 'Wrong',
    directionEnToUz: 'English to translation',
    directionUzToEn: 'Translation to English',
    repeatInfo: 'Learned: {count} times in a row',
    statsHeading: 'Statistics',
    totalLabel: 'Total words',
    correctLabel: '✅ Correct answers',
    wrongLabel: '❌ Wrong answers',
    dailyLabel: '📅 Today correct',
    masteredPercentLabel: '🏆 Mastered %',
    editBtn: 'Edit',
    deleteBtn: 'Delete',
    categoryLabelList: 'Category:',
    correctText: 'Correct',
    wrongText: 'Wrong',
    streakLabel: 'Streak',
    dailyGoalLabel: 'Daily goal (words):',
    setDailyGoalBtn: 'Set goal',
    fillBothFields: 'Please fill in both fields.',
    savedMessage: 'Word saved.',
    deleteConfirm: 'Are you sure you want to delete this word?',
    deleteSuccess: 'Word deleted.',
    importErrorPrefix: 'Import error: ',
    importedSuccess: '{count} new words imported.',
    exportNoWords: 'No words to export.',
    exportSuccess: 'Words exported successfully.',
    addFirstWordError: 'Please add a word first.',
    dailyGoalSet: 'Daily goal set.',
    goalInvalid: 'Goal must be greater than 0.',
    browserNoSpeech: 'Your browser does not support voice pronunciation.',
    noWordsTitle: 'No words available',
    noWordsMessage: 'Please add words first before starting practice.',
    importSampleWords: 'Import sample words',
    closeModal: 'Close',
    filterModeLabel: 'Practice focus',
    filterModeAll: 'All words',
    filterModeNew: 'New words',
    filterModeWrong: 'Hard words',
    filterModeMastered: 'Mastered',
    undoBtn: 'Undo last action',
    undoSuccess: 'Last action reverted.',
    nothingToUndo: 'Nothing to undo.',
    reverseRatioLabel: 'Reverse mode ratio (TR → EN %)',
    sessionModeLabel: 'Session mode',
    sessionSmart: 'Smart mix',
    sessionWrong: 'Hard words only',
    sessionNew: 'New words only',
    prevPage: 'Previous',
    nextPage: 'Next',
    pageText: 'Page {current} / {total}',
    headerProgress: "Today's progress: {current} / {goal}",
    backupReminder: 'Tip: export your words as backup regularly.',
    masteredBadge: '🏆 Mastered',
    masteredProgressText: 'Mastered {percent}%',
  },
  uz: {
    siteTitle: "Inglizcha So'zlar Amaliyoti",
    siteDescription: "So'z qo'shish, saqlash va takrorlash uchun sayt.",
    toggleLight: 'Kunduzgi rejim',
    toggleDark: 'Tungi rejim',
    tabAdd: 'Gap qoʻshish',
    tabRepeat: 'Takrorlash',
    addHeading: 'Yangi gap yoki soʻz qoʻshish',
    englishLabel: 'Inglizcha matn',
    translationLabel: 'Tarjima',
    categoryLabel: 'Kategoriya',
    englishPlaceholder: 'English word or phrase',
    translationPlaceholder: 'Tarjima',
    categorySelect: 'Tanlang',
    submitBtn: 'Saqlash',
    filterCategoryLabel: 'Kategoriya',
    categoryDaily: 'Kundalik',
    categoryWork: 'Ish',
    categoryTravel: 'Sayohat',
    categoryEducation: 'Taʼlim',
    categoryOther: 'Boshqa',
    allCategories: 'Barcha kategoriyalar',
    showFavorites: 'Sevimlilar',
    showAllWords: 'Hammasini ko‘rsatish',
    favoriteBtn: '★',
    favoritedBtn: '★ Sevimli',
    importHeading: 'Import/Export',
    importWarning: 'Ogohlantirish: brauzer maʼlumotlarini tozalash saqlangan maʼlumotlarni ham olib tashlaydi. Avvalo JSON-ni eksport qiling.',
    exportBtn: 'Soʻzlarni eksport qilish (JSON)',
    importBtn: 'Soʻzlarni import qilish (JSON)',
    savedHeading: 'Saqlangan soʻzlar',
    searchPlaceholder: 'Qidiruv...',
    emptyWordList: 'Hozircha hech narsa qoʻshilmagan.',
    repeatHeading: 'Takrorlash',
    startPractice: 'Boshlash',
    questionLabel: 'Savol:',
    answerLabel: 'Javob:',
    speakBtn: '🔊 Oʻqish',
    showAnswerBtn: 'Tarjimani koʻrsatish',
    correctBtn: 'Toʻgʻri',
    wrongBtn: 'Xato',
    directionEnToUz: 'Inglizchadan tarjimaga',
    directionUzToEn: 'Tarjimadan inglizchaga',
    repeatInfo: 'Oʻrganilgan: {count} marta ketma-ket',
    statsHeading: 'Statistika',
    totalLabel: 'Umumiy soʻz',
    correctLabel: '✅ Toʻgʻri javoblar',
    wrongLabel: '❌ Notoʻgʻri javoblar',
    dailyLabel: '📅 Bugun toʻgʻri',
    masteredPercentLabel: '🏆 Oʻzlashtirilgan %',
    editBtn: 'Tahrirlash',
    deleteBtn: 'Oʻchirish',
    categoryLabelList: 'Kategoriya:',
    correctText: 'Toʻgʻri',
    wrongText: 'Xato',
    streakLabel: 'Ketma-ket',
    dailyGoalLabel: 'Kunlik maqsad (soʻz):',
    setDailyGoalBtn: 'Oʻrnatish',
    fillBothFields: 'Ikkala maydonni ham toʻldiring.',
    savedMessage: 'Soʻz saqlandi.',
    deleteConfirm: 'Bu soʻzni oʻchirishni xohlaysizmi?',
    deleteSuccess: 'Soʻz oʻchirildi.',
    importErrorPrefix: 'Import xatosi: ',
    importedSuccess: '{count} ta yangi soʻz import qilindi.',
    exportNoWords: 'Eksport qilish uchun soʻzlar yoʻq.',
    exportSuccess: 'Soʻzlar muvaffaqiyatli eksport qilindi.',
    addFirstWordError: 'Iltimos, avval gap yoki soʻz qoʻshing.',
    dailyGoalSet: 'Kunlik maqsad oʻrnatildi.',
    goalInvalid: 'Maqsad 1 dan katta boʻlishi kerak.',
    browserNoSpeech: 'Brauzeringiz ovozli talaffuzni qoʻllab-quvvatlamaydi.',
    noWordsTitle: 'Soʻzlar mavjud emas',
    noWordsMessage: 'Mashqni boshlashdan oldin avval soʻz qoʻshing.',
    importSampleWords: 'Namunaviy soʻzlarni import qilish',
    closeModal: 'Yopish',
    filterModeLabel: 'Mashq yoʻnalishi',
    filterModeAll: 'Barcha soʻzlar',
    filterModeNew: 'Yangi soʻzlar',
    filterModeWrong: 'Qiyin soʻzlar',
    filterModeMastered: 'Mukammal oʻzlashtirilgan',
    undoBtn: 'Oxirgi amalni qaytarish',
    undoSuccess: 'Oxirgi amal qaytarildi.',
    nothingToUndo: 'Qaytarish uchun amal yoʻq.',
    reverseRatioLabel: 'Teskari rejim ulushi (Tarjima → Inglizcha %)',
    sessionModeLabel: 'Sessiya rejimi',
    sessionSmart: 'Aqlli aralash',
    sessionWrong: 'Faqat qiyin soʻzlar',
    sessionNew: 'Faqat yangi soʻzlar',
    prevPage: 'Oldingi',
    nextPage: 'Keyingi',
    pageText: '{current} / {total}-sahifa',
    headerProgress: "Bugungi progress: {current} / {goal}",
    backupReminder: 'Maslahat: soʻzlarni vaqti-vaqti bilan JSON qilib eksport qiling.',
    masteredBadge: '🏆 Oʻzlashtirilgan',
    masteredProgressText: 'Oʻzlashtirilgan {percent}%',
  },
  ru: {
    siteTitle: 'Практика английских слов',
    siteDescription: 'Добавляйте, сохраняйте и повторяйте слова легко.',
    toggleLight: 'Дневная тема',
    toggleDark: 'Ночная тема',
    tabAdd: 'Добавить',
    tabRepeat: 'Повторение',
    addHeading: 'Добавить фразу или слово',
    englishLabel: 'Английский текст',
    translationLabel: 'Перевод',
    categoryLabel: 'Категория',
    categoryDaily: 'Ежедневное',
    categoryWork: 'Работа',
    categoryTravel: 'Путешествия',
    categoryEducation: 'Образование',
    categoryOther: 'Другое',
    englishPlaceholder: 'English word or phrase',
    translationPlaceholder: 'Перевод',
    categorySelect: 'Выбрать',
    submitBtn: 'Сохранить',
    filterCategoryLabel: 'Категория',
    allCategories: 'Все категории',
    showFavorites: 'Избранное',
    showAllWords: 'Показать все',
    favoriteBtn: '★',
    favoritedBtn: '★ В избранном',
    importHeading: 'Импорт/Экспорт',
    importWarning: 'Внимание: очистка данных браузера удаляет сохранённые записи. Сначала экспортируйте JSON.',
    exportBtn: 'Экспорт слов (JSON)',
    importBtn: 'Импорт слов (JSON)',
    savedHeading: 'Сохранённые слова',
    searchPlaceholder: 'Поиск...',
    emptyWordList: 'Слова ещё не добавлены.',
    repeatHeading: 'Повторение',
    startPractice: 'Начать',
    questionLabel: 'Вопрос:',
    answerLabel: 'Ответ:',
    speakBtn: '🔊 Произнеси',
    showAnswerBtn: 'Показать ответ',
    correctBtn: 'Правильно',
    wrongBtn: 'Неправильно',
    directionEnToUz: 'С английского на перевод',
    directionUzToEn: 'С перевода на английский',
    repeatInfo: 'Выучено: {count} раз подряд',
    statsHeading: 'Статистика',
    totalLabel: 'Всего слов',
    correctLabel: '✅ Правильно',
    wrongLabel: '❌ Неправильно',
    dailyLabel: '📅 Сегодня правильно',
    masteredPercentLabel: '🏆 Освоено %',
    editBtn: 'Редактировать',
    deleteBtn: 'Удалить',
    categoryLabelList: 'Категория:',
    correctText: 'Правильно',
    wrongText: 'Неправильно',
    streakLabel: 'Серии',
    dailyGoalLabel: 'Ежедневная цель (слов):',
    setDailyGoalBtn: 'Установить цель',
    fillBothFields: 'Пожалуйста, заполните оба поля.',
    savedMessage: 'Слово сохранено.',
    deleteConfirm: 'Вы действительно хотите удалить это слово?',
    deleteSuccess: 'Слово удалено.',
    importErrorPrefix: 'Ошибка импорта: ',
    importedSuccess: 'Импортировано {count} новых слов.',
    exportNoWords: 'Нет слов для экспорта.',
    exportSuccess: 'Слова успешно экспортированы.',
    addFirstWordError: 'Пожалуйста, сначала добавьте слово.',
    dailyGoalSet: 'Ежедневная цель установлена.',
    goalInvalid: 'Цель должна быть больше 0.',
    browserNoSpeech: 'Ваш браузер не поддерживает озвучивание.',
    noWordsTitle: 'Слова отсутствуют',
    noWordsMessage: 'Сначала добавьте слова, затем начните практику.',
    importSampleWords: 'Импортировать пример слов',
    closeModal: 'Закрыть',
    filterModeLabel: 'Фокус практики',
    filterModeAll: 'Все слова',
    filterModeNew: 'Новые слова',
    filterModeWrong: 'Сложные слова',
    filterModeMastered: 'Освоенные',
    undoBtn: 'Отменить последнее действие',
    undoSuccess: 'Последнее действие отменено.',
    nothingToUndo: 'Отменять нечего.',
    reverseRatioLabel: 'Доля обратного режима (Перевод → Английский %)',
    sessionModeLabel: 'Режим сессии',
    sessionSmart: 'Умный микс',
    sessionWrong: 'Только сложные слова',
    sessionNew: 'Только новые слова',
    prevPage: 'Назад',
    nextPage: 'Вперёд',
    pageText: 'Страница {current} / {total}',
    headerProgress: 'Прогресс за сегодня: {current} / {goal}',
    backupReminder: 'Совет: регулярно экспортируйте слова в JSON как резерв.',
    masteredBadge: '🏆 Освоено',
    masteredProgressText: 'Освоено {percent}%',
  },
};

let currentLanguage = 'en';

const tabs = {
  add: document.getElementById('tab-add'),
  repeat: document.getElementById('tab-repeat'),
};
const toggleDarkMode = document.getElementById('toggle-dark-mode');
const sections = {
  add: document.getElementById('section-add'),
  repeat: document.getElementById('section-repeat'),
};

const form = document.getElementById('add-form');
const inputEnglish = document.getElementById('input-english');
const inputTranslation = document.getElementById('input-translation');
const inputCategory = document.getElementById('input-category');
const addMessage = document.getElementById('add-message');
const wordList = document.getElementById('word-list');
const languageSelect = document.getElementById('language-select');

const exportWords = document.getElementById('export-words');
const importFile = document.getElementById('import-file');
const importWords = document.getElementById('import-words');
const importExportMessage = document.getElementById('import-export-message');
const filterCategory = document.getElementById('filter-category');
const toggleFavorites = document.getElementById('toggle-favorites');
const filterMode = document.getElementById('filter-mode');
const undoBtn = document.getElementById('undo-btn');
const prevPage = document.getElementById('prev-page');
const nextPage = document.getElementById('next-page');
const pageIndicator = document.getElementById('page-indicator');
const headerProgress = document.getElementById('header-progress');
const masteredProgressFill = document.getElementById('mastered-progress-fill');
const masteredProgressText = document.getElementById('mastered-progress-text');

// Modal elements
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalImportSample = document.getElementById('modal-import-sample');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');

const startRepeat = document.getElementById('start-repeat');
const repeatControls = document.querySelector('.repeat-controls');
const repeatCard = document.getElementById('repeat-card');
const promptText = document.getElementById('prompt-text');
const answerText = document.getElementById('answer-text');
const showAnswer = document.getElementById('show-answer');
const correctBtn = document.getElementById('correct');
const wrongBtn = document.getElementById('wrong');
const repeatDirection = document.getElementById('repeat-direction');
const itemStreak = document.getElementById('item-streak');
const speakPrompt = document.getElementById('speak-prompt');

const statTotal = document.getElementById('stat-total');
const statCorrect = document.getElementById('stat-correct');
const statWrong = document.getElementById('stat-wrong');
const statDaily = document.getElementById('stat-daily');
const statMasteredPercent = document.getElementById('stat-mastered-percent');
const dailyGoalInput = document.getElementById('daily-goal-input');
const setDailyGoal = document.getElementById('set-daily-goal');

const searchWords = document.getElementById('search-words');
const dailyProgress = document.getElementById('daily-progress');
const progressText = document.getElementById('progress-text');
const reverseRatio = document.getElementById('reverse-ratio');
const reverseRatioValue = document.getElementById('reverse-ratio-value');
const repeatMode = document.getElementById('repeat-mode');

let words = [];
let stats = { correct: 0, wrong: 0 };
let dailyStats = { date: new Date().toDateString(), correct: 0 };
let dailyGoal = 10;
let currentItem = null;
let currentDirection = 'en-to-uz';
let answerVisible = false;
let showFavoritesOnly = false;
let reverseRatioValueState = 50;
let repeatModeState = 'smart';
let currentPage = 1;
const pageSize = 12;
let editWordId = null;
let historyStack = [];

function translate(key) {
  return translations[currentLanguage][key] || translations.en[key] || key;
}

function formatMessage(template, values = {}) {
  return template.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? '');
}

function applyLanguage(language) {
  currentLanguage = language;
  languageSelect.value = language;
  document.documentElement.lang = language === 'en' ? 'en' : language === 'uz' ? 'uz' : 'ru';

  // Batch DOM updates for better performance
  const elements = {
    'site-title': 'siteTitle',
    'site-description': 'siteDescription',
    'tab-add': 'tabAdd',
    'tab-repeat': 'tabRepeat',
    'add-heading': 'addHeading',
    'label-english': 'englishLabel',
    'label-translation': 'translationLabel',
    'label-category': 'categoryLabel',
    'submit-btn': 'submitBtn',
    'import-heading': 'importHeading',
    'import-warning': 'importWarning',
    'export-words': 'exportBtn',
    'import-words': 'importBtn',
    'saved-heading': 'savedHeading',
    'repeat-heading': 'repeatHeading',
    'start-repeat': 'startPractice',
    'question-label': 'questionLabel',
    'answer-label': 'answerLabel',
    'speak-prompt': 'speakBtn',
    'speak-answer': 'speakBtn',
    'show-answer': 'showAnswerBtn',
    'correct': 'correctBtn',
    'wrong': 'wrongBtn',
    'stats-heading': 'statsHeading',
    'total-label': 'totalLabel',
    'correct-label': 'correctLabel',
    'wrong-label': 'wrongLabel',
    'daily-label': 'dailyLabel',
    'mastered-percent-label': 'masteredPercentLabel',
    'daily-goal-label': 'dailyGoalLabel',
    'set-daily-goal': 'setDailyGoalBtn',
    'filter-category-label': 'filterCategoryLabel',
    'filter-mode-label': 'filterModeLabel',
    'undo-btn': 'undoBtn',
    'reverse-ratio-label': 'reverseRatioLabel',
    'repeat-mode-label': 'sessionModeLabel',
    'prev-page': 'prevPage',
    'next-page': 'nextPage',
    'modal-import-sample': 'importSampleWords',
    'modal-close-btn': 'closeModal'
  };

  // Update all elements in one loop
  Object.entries(elements).forEach(([id, key]) => {
    const element = document.getElementById(id);
    if (element) element.textContent = translate(key);
  });

  // Special cases
  const isDark = document.body.classList.contains('dark-mode');
  document.getElementById('toggle-text').textContent = translate(isDark ? 'toggleLight' : 'toggleDark');
  document.getElementById('language-label').textContent = language === 'en' ? 'Language' : language === 'uz' ? 'Til' : 'Язык';
  document.getElementById('toggle-favorites').textContent = showFavoritesOnly ? translate('showAllWords') : translate('showFavorites');
  document.getElementById('modal-close').textContent = '×';
  reverseRatioValue.textContent = `${reverseRatioValueState}%`;
  renderPageIndicator(1);

  // Update placeholders
  inputEnglish.placeholder = translate('englishPlaceholder');
  inputTranslation.placeholder = translate('translationPlaceholder');
  searchWords.placeholder = translate('searchPlaceholder');

  // Update category options
  updateCategoryOptions();
  updateModeOptions();

  // Reset repeat info
  document.getElementById('repeat-direction').querySelector('strong').textContent = '';
  document.getElementById('repeat-info').textContent = formatMessage(translate('repeatInfo'), { count: 0 });

  renderWordList();
  renderHeaderProgress();
}

function updateCategoryOptions() {
  const categoryOptions = filterCategory.querySelectorAll('option');
  const categories = ['allCategories', 'categoryDaily', 'categoryWork', 'categoryTravel', 'categoryEducation', 'categoryOther'];

  categoryOptions.forEach((option, index) => {
    if (categories[index]) {
      option.textContent = translate(categories[index]);
    }
  });
}

function updateModeOptions() {
  const modeOptions = filterMode.querySelectorAll('option');
  const modeKeys = ['filterModeAll', 'filterModeNew', 'filterModeWrong', 'filterModeMastered'];
  modeOptions.forEach((option, index) => {
    if (modeKeys[index]) option.textContent = translate(modeKeys[index]);
  });

  const repeatModeOptions = repeatMode.querySelectorAll('option');
  const repeatKeys = ['sessionSmart', 'sessionWrong', 'sessionNew'];
  repeatModeOptions.forEach((option, index) => {
    if (repeatKeys[index]) option.textContent = translate(repeatKeys[index]);
  });
}

function loadStorage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  words = stored ? JSON.parse(stored) : [];
  const storedStats = localStorage.getItem(STATS_KEY);
  stats = storedStats ? JSON.parse(storedStats) : { correct: 0, wrong: 0 };
  const storedDaily = localStorage.getItem('english-daily-stats');
  dailyStats = storedDaily ? JSON.parse(storedDaily) : { date: new Date().toDateString(), correct: 0 };
  const storedGoal = localStorage.getItem('english-daily-goal');
  dailyGoal = storedGoal ? parseInt(storedGoal) : 10;
  dailyGoalInput.value = dailyGoal;
  reverseRatioValueState = parseInt(localStorage.getItem('english-reverse-ratio') || '50', 10);
  repeatModeState = localStorage.getItem('english-repeat-mode') || 'smart';
  reverseRatio.value = reverseRatioValueState;
  repeatMode.value = repeatModeState;
  // Reset daily if new day
  if (dailyStats.date !== new Date().toDateString()) {
    dailyStats = { date: new Date().toDateString(), correct: 0 };
  }
  // Dark mode
  const darkMode = localStorage.getItem('english-dark-mode') === 'true';
  document.body.classList.toggle('dark-mode', darkMode);

  const storedLanguage = localStorage.getItem('english-language');
  currentLanguage = storedLanguage || 'en';
  applyLanguage(currentLanguage);

  const lastBackupReminder = localStorage.getItem('english-last-backup-reminder');
  const now = Date.now();
  if (!lastBackupReminder || now - parseInt(lastBackupReminder, 10) > 1000 * 60 * 60 * 24 * 7) {
    showImportExportMessage(translate('backupReminder'), 'info');
    localStorage.setItem('english-last-backup-reminder', String(now));
  }
}

function saveStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  localStorage.setItem('english-daily-stats', JSON.stringify(dailyStats));
  localStorage.setItem('english-daily-goal', dailyGoal.toString());
}

function exportWordsToFile() {
  if (!words.length) {
    showImportExportMessage(translate('exportNoWords'), 'error');
    return;
  }
  const dataStr = JSON.stringify(words, null, 2);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'english-words.json';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showImportExportMessage(translate('exportSuccess'), 'info');
}

function importWordsFromFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedWords = JSON.parse(e.target.result);
      if (!Array.isArray(importedWords)) {
        throw new Error('Invalid file format.');
      }
      // Validate structure
      for (const word of importedWords) {
        if (!word.english || !word.uzbek) {
          throw new Error('Invalid word format.');
        }
      }
      // Merge with existing words, avoid duplicates
      const existingKeys = new Set(words.map(w => `${w.english}`.toLowerCase().trim() + '||' + `${w.uzbek}`.toLowerCase().trim()));
      const newWords = importedWords
        .filter(w => !existingKeys.has(`${w.english}`.toLowerCase().trim() + '||' + `${w.uzbek}`.toLowerCase().trim()))
        .map(w => createWordObject(w.english, w.uzbek, w.category || ''));
      pushHistory();
      words.push(...newWords);
      saveStorage();
      renderWordList();
      renderStats();
      showImportExportMessage(formatMessage(translate('importedSuccess'), { count: newWords.length }), 'info');
    } catch (error) {
      showImportExportMessage(translate('importErrorPrefix') + error.message, 'error');
    }
  };
  reader.readAsText(file);
}

function showImportExportMessage(text, type = 'info') {
  importExportMessage.textContent = text;
  importExportMessage.style.color = type === 'error' ? '#dc2626' : '#2563eb';
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  } else {
    alert(translate('browserNoSpeech'));
  }
}

function editWord(index) {
  const word = words[index];
  if (!word) return;
  editWordId = word.id;
  inputEnglish.value = word.english;
  inputTranslation.value = word.uzbek;
  inputCategory.value = word.category || '';
  // Focus on form
  inputEnglish.focus();
}

function deleteWord(index) {
  if (confirm(translate('deleteConfirm'))) {
    pushHistory();
    words.splice(index, 1);
    saveStorage();
    renderWordList();
    renderStats();
    showMessage(translate('deleteSuccess'), 'info');
  }
}

function createWordObject(english, uzbek, category = '') {
  return {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2),
    english: english.trim(),
    uzbek: uzbek.trim(),
    category: category.trim(),
    correctCount: 0,
    wrongCount: 0,
    streak: 0,
    favorite: false,
    intervalDays: 1,
    nextReview: Date.now(),
    lastReviewed: null,
  };
}

function showMessage(text, type = 'info') {
  addMessage.textContent = text;
  addMessage.style.color = type === 'error' ? '#dc2626' : '#2563eb';
}

function toggleFavorite(index) {
  const word = words[index];
  if (!word) return;
  word.favorite = !word.favorite;
  saveStorage();
  renderWordList();
}

function renderWordList() {
  const query = searchWords.value.toLowerCase();
  const categoryValue = filterCategory.value;
  const mode = filterMode.value;
  const filteredWords = words.filter((word) => {
    if (showFavoritesOnly && !word.favorite) {
      return false;
    }
    if (categoryValue && word.category !== categoryValue) {
      return false;
    }
    if (mode === 'new' && (word.correctCount + word.wrongCount > 0)) {
      return false;
    }
    if (mode === 'wrong' && word.wrongCount === 0) {
      return false;
    }
    if (mode === 'mastered' && word.streak < 10) {
      return false;
    }
    return (
      word.english.toLowerCase().includes(query) ||
      word.uzbek.toLowerCase().includes(query) ||
      (word.category && word.category.toLowerCase().includes(query))
    );
  });

  if (filteredWords.length === 0) {
    wordList.innerHTML = `<p>${translate('emptyWordList')}</p>`;
    renderPageIndicator(1);
    return;
  }

  const totalPages = Math.max(1, Math.ceil(filteredWords.length / pageSize));
  currentPage = Math.min(currentPage, totalPages);
  const start = (currentPage - 1) * pageSize;
  const currentSlice = filteredWords.slice(start, start + pageSize);

  wordList.innerHTML = currentSlice
    .map(word => {
      const originalIndex = words.findIndex(w => w.id === word.id);
      return `
        <div class="word-item ${word.favorite ? 'favorite-item' : ''} ${word.streak >= 10 ? 'mastered-item' : ''}">
          <div class="word-content">
            <div class="word-main-line">
              <span class="lang-badge">EN</span>
              <span class="word-main-text">${escapeHtml(word.english)}</span>
              <span class="lang-badge">TR</span>
              <span class="word-main-text">${escapeHtml(word.uzbek)}</span>
            </div>
            <div class="word-meta-row">
              <span class="meta-chip meta-correct">${translate('correctText')}: ${word.correctCount}</span>
              <span class="meta-chip meta-wrong">${translate('wrongText')}: ${word.wrongCount}</span>
              <span class="meta-chip meta-streak">${translate('streakLabel')}: ${word.streak}</span>
              ${word.category ? `<span class="meta-chip meta-category">${translate('categoryLabelList')} ${escapeHtml(word.category)}</span>` : ''}
            </div>
          </div>
          <div class="word-actions">
            ${word.streak >= 10 ? `<button class="mastered-badge" type="button" disabled>${translate('masteredBadge')}</button>` : ''}
            <button class="favorite-btn" data-index="${originalIndex}">${word.favorite ? translate('favoritedBtn') : translate('favoriteBtn')}</button>
            <button class="edit-btn" data-index="${originalIndex}">${translate('editBtn')}</button>
            <button class="delete-btn" data-index="${originalIndex}">${translate('deleteBtn')}</button>
          </div>
        </div>`;
    })
    .join('');
  renderPageIndicator(totalPages);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function renderStats() {
  statTotal.textContent = words.length;
  statCorrect.textContent = stats.correct;
  statWrong.textContent = stats.wrong;
  statDaily.textContent = dailyStats.correct;
  const masteredCount = words.filter((word) => word.streak >= 10).length;
  const masteredPercent = words.length ? Math.round((masteredCount / words.length) * 100) : 0;
  statMasteredPercent.textContent = `${masteredPercent}%`;
  masteredProgressFill.style.width = `${masteredPercent}%`;
  masteredProgressText.textContent = formatMessage(translate('masteredProgressText'), { percent: masteredPercent });

  const progressPercent = dailyGoal > 0 ? Math.min((dailyStats.correct / dailyGoal) * 100, 100) : 0;
  dailyProgress.style.width = `${progressPercent}%`;
  progressText.textContent = `${dailyStats.correct} / ${dailyGoal}`;
  renderHeaderProgress();
}

function renderHeaderProgress() {
  headerProgress.textContent = formatMessage(translate('headerProgress'), { current: dailyStats.correct, goal: dailyGoal });
}

function renderPageIndicator(totalPages) {
  pageIndicator.textContent = formatMessage(translate('pageText'), { current: currentPage, total: totalPages });
  prevPage.disabled = currentPage <= 1;
  nextPage.disabled = currentPage >= totalPages;
}

function setActiveTab(tabKey) {
  Object.entries(tabs).forEach(([key, button]) => {
    button.classList.toggle('active', key === tabKey);
    sections[key].classList.toggle('active', key === tabKey);
  });
  document.body.classList.toggle('repeat-active', tabKey === 'repeat');
}

function resetRepeatView() {
  repeatCard.classList.add('hidden');
  promptText.textContent = '';
  answerText.textContent = '******';
  repeatDirection.querySelector('strong').textContent = '';
  itemStreak.textContent = '0';
  answerVisible = false;
}

function selectRandomItem() {
  if (!words.length) {
    showMessage(translate('addFirstWordError'), 'error');
    return null;
  }

  const now = Date.now();
  let candidateWords = words.filter(item => (item.nextReview || 0) <= now);
  if (repeatModeState === 'wrong') {
    candidateWords = candidateWords.filter(item => item.wrongCount > 0);
  }
  if (repeatModeState === 'new') {
    candidateWords = candidateWords.filter(item => item.correctCount + item.wrongCount === 0);
  }
  const availableWords = candidateWords.filter(item => item.streak < 10);

  // If no available words, use all words (to avoid getting stuck)
  const fallbackPool = repeatModeState === 'wrong'
    ? words.filter(item => item.wrongCount > 0)
    : repeatModeState === 'new'
      ? words.filter(item => item.correctCount + item.wrongCount === 0)
      : words;
  const pool = availableWords.length > 0 ? availableWords : (fallbackPool.length ? fallbackPool : words);

  const weighted = pool.map((item) => {
    let priority = 1;
    
    // Add weight for frequently wrong words
    priority += item.wrongCount * 2;
    
    // Add weight for low streak (needs more practice)
    priority += Math.max(0, 3 - item.streak);
    if ((item.nextReview || 0) <= now) {
      priority += 2;
    }
    
    // Add weight for favorite words (1.5x bonus)
    if (item.favorite) {
      priority *= 1.5;
    }
    
    const weight = Math.max(1, priority);
    return { item, weight };
  });

  const totalWeight = weighted.reduce((sum, entry) => sum + entry.weight, 0);
  let threshold = Math.random() * totalWeight;
  for (const entry of weighted) {
    threshold -= entry.weight;
    if (threshold <= 0) {
      return entry.item;
    }
  }

  return weighted[weighted.length - 1].item;
}

function startRepeatSession() {
  currentItem = selectRandomItem();
  if (!currentItem) return;
  currentDirection = Math.random() < (reverseRatioValueState / 100) ? 'uz-to-en' : 'en-to-uz';
  answerVisible = false;
  repeatCard.classList.remove('hidden');
  promptText.textContent = currentDirection === 'en-to-uz' ? currentItem.english : currentItem.uzbek;
  answerText.textContent = '******';
  repeatDirection.querySelector('strong').textContent = currentDirection === 'en-to-uz' ? translate('directionEnToUz') : translate('directionUzToEn');
  itemStreak.textContent = String(currentItem.streak);
}

function showCurrentAnswer() {
  if (!currentItem) return;
  answerVisible = true;
  answerText.textContent = currentDirection === 'en-to-uz' ? currentItem.uzbek : currentItem.english;
}

function submitResult(isCorrect) {
  if (!currentItem) return;
  pushHistory();
  const now = Date.now();
  if (isCorrect) {
    currentItem.correctCount += 1;
    currentItem.streak += 1;
    stats.correct += 1;
    dailyStats.correct += 1;
    currentItem.intervalDays = Math.min((currentItem.intervalDays || 1) * 2, 64);
  } else {
    currentItem.wrongCount += 1;
    currentItem.streak = 0;
    stats.wrong += 1;
    currentItem.intervalDays = 1;
  }
  currentItem.lastReviewed = now;
  currentItem.nextReview = now + (currentItem.intervalDays || 1) * 24 * 60 * 60 * 1000;

  saveStorage();
  renderWordList();
  renderStats();
  startRepeatSession();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const english = inputEnglish.value.trim();
  const translation = inputTranslation.value.trim();
  const category = inputCategory.value;

  if (!english || !translation) {
    showMessage(translate('fillBothFields'), 'error');
    return;
  }

  pushHistory();
  if (editWordId) {
    const existing = words.find((word) => word.id === editWordId);
    if (existing) {
      existing.english = english;
      existing.uzbek = translation;
      existing.category = category;
    }
    editWordId = null;
  } else {
    words.push(createWordObject(english, translation, category));
  }
  saveStorage();
  renderWordList();
  showMessage(translate('savedMessage'), 'info');
  form.reset();
});

tabs.add.addEventListener('click', () => setActiveTab('add'));
tabs.repeat.addEventListener('click', () => setActiveTab('repeat'));

toggleDarkMode.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('english-dark-mode', isDark.toString());
  document.getElementById('toggle-text').textContent = translate(isDark ? 'toggleLight' : 'toggleDark');
});

startRepeat.addEventListener('click', () => {
  showMessage('');
  if (!words.length) {
    showModal(translate('noWordsTitle'), translate('noWordsMessage'));
    return;
  }
  repeatControls.closest('.card').remove();
  startRepeatSession();
});

showAnswer.addEventListener('click', () => {
  if (!currentItem) return;
  showCurrentAnswer();
});

correctBtn.addEventListener('click', () => submitResult(true));
wrongBtn.addEventListener('click', () => submitResult(false));

speakPrompt.addEventListener('click', () => {
  if (currentItem) {
    const text = currentDirection === 'en-to-uz' ? currentItem.english : currentItem.uzbek;
    speakText(text);
  }
});

const speakAnswer = document.getElementById('speak-answer');
speakAnswer.addEventListener('click', () => {
  if (currentItem) {
    const text = currentDirection === 'en-to-uz' ? currentItem.uzbek : currentItem.english;
    speakText(text);
  }
});

exportWords.addEventListener('click', exportWordsToFile);

importWords.addEventListener('click', () => {
  importFile.click();
});

filterCategory.addEventListener('change', () => {
  currentPage = 1;
  renderWordList();
});

filterMode.addEventListener('change', () => {
  currentPage = 1;
  renderWordList();
});

toggleFavorites.addEventListener('click', () => {
  showFavoritesOnly = !showFavoritesOnly;
  toggleFavorites.textContent = showFavoritesOnly ? translate('showAllWords') : translate('showFavorites');
  currentPage = 1;
  renderWordList();
});

importFile.addEventListener('change', importWordsFromFile);

setDailyGoal.addEventListener('click', () => {
  const goal = parseInt(dailyGoalInput.value);
  if (goal > 0) {
    dailyGoal = goal;
    saveStorage();
    showMessage(translate('dailyGoalSet'), 'info');
  } else {
    showMessage(translate('goalInvalid'), 'error');
  }
});

wordList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('favorite-btn')) {
    const index = parseInt(target.dataset.index);
    toggleFavorite(index);
  } else if (target.classList.contains('edit-btn')) {
    const index = parseInt(target.dataset.index);
    editWord(index);
  } else if (target.classList.contains('delete-btn')) {
    const index = parseInt(target.dataset.index);
    deleteWord(index);
  }
});

languageSelect.addEventListener('change', () => {
  currentLanguage = languageSelect.value;
  localStorage.setItem('english-language', currentLanguage);
  applyLanguage(currentLanguage);
});

searchWords.addEventListener('input', () => {
  currentPage = 1;
  renderWordList();
});

reverseRatio.addEventListener('input', () => {
  reverseRatioValueState = parseInt(reverseRatio.value, 10);
  reverseRatioValue.textContent = `${reverseRatioValueState}%`;
  localStorage.setItem('english-reverse-ratio', String(reverseRatioValueState));
});

repeatMode.addEventListener('change', () => {
  repeatModeState = repeatMode.value;
  localStorage.setItem('english-repeat-mode', repeatModeState);
});

undoBtn.addEventListener('click', () => {
  if (!historyStack.length) {
    showMessage(translate('nothingToUndo'), 'error');
    return;
  }
  words = JSON.parse(historyStack.pop());
  saveStorage();
  renderWordList();
  renderStats();
  showMessage(translate('undoSuccess'), 'info');
});

prevPage.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage -= 1;
    renderWordList();
  }
});

nextPage.addEventListener('click', () => {
  currentPage += 1;
  renderWordList();
});

modalClose.addEventListener('click', hideModal);
modalCloseBtn.addEventListener('click', hideModal);
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) hideModal();
});
modalImportSample.addEventListener('click', importSampleWords);

loadStorage();
renderWordList();
renderStats();

function pushHistory() {
  historyStack.push(JSON.stringify(words));
  if (historyStack.length > 20) historyStack.shift();
}

function showModal(title, message) {
  modalTitle.textContent = title;
  modalMessage.textContent = message;
  modalOverlay.classList.remove('hidden');
}

function hideModal() {
  modalOverlay.classList.add('hidden');
}

async function importSampleWords() {
  try {
    const response = await fetch('sample-words-100.json');
    const importedWords = await response.json();
    const existingKeys = new Set(words.map(w => `${w.english}`.toLowerCase().trim() + '||' + `${w.uzbek}`.toLowerCase().trim()));
    const newWords = importedWords
      .filter(w => w.english && (w.uzbek || w.translation))
      .filter(w => !existingKeys.has(`${(w.english || '')}`.toLowerCase().trim() + '||' + `${(w.uzbek || w.translation || '')}`.toLowerCase().trim()))
      .map(w => createWordObject(w.english, w.uzbek || w.translation, w.category || 'daily'));
    if (newWords.length) {
      pushHistory();
      words.push(...newWords);
      saveStorage();
      renderWordList();
      renderStats();
      showImportExportMessage(formatMessage(translate('importedSuccess'), { count: newWords.length }), 'info');
    }
    hideModal();
  } catch (error) {
    showImportExportMessage(translate('importErrorPrefix') + error.message, 'error');
  }
}

// Keyboard shortcuts
document.addEventListener('keydown', (event) => {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'SELECT') return;
  
  switch (event.code) {
    case 'Space':
      event.preventDefault();
      if (sections.repeat.classList.contains('active') && !repeatCard.classList.contains('hidden')) {
        showAnswer.click();
      }
      break;
    case 'Enter':
      event.preventDefault();
      if (sections.repeat.classList.contains('active') && !repeatCard.classList.contains('hidden')) {
        correctBtn.click();
      }
      break;
    case 'Escape':
      event.preventDefault();
      if (sections.repeat.classList.contains('active') && !repeatCard.classList.contains('hidden')) {
        wrongBtn.click();
      }
      break;
    case 'KeyS':
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault();
        speakPrompt.click();
      }
      break;
  }
});
