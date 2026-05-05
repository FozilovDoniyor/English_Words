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
const dailyGoalInput = document.getElementById('daily-goal-input');
const setDailyGoal = document.getElementById('set-daily-goal');

const searchWords = document.getElementById('search-words');
const dailyProgress = document.getElementById('daily-progress');
const progressText = document.getElementById('progress-text');

let words = [];
let stats = { correct: 0, wrong: 0 };
let dailyStats = { date: new Date().toDateString(), correct: 0 };
let dailyGoal = 10;
let currentItem = null;
let currentDirection = 'en-to-uz';
let answerVisible = false;
let showFavoritesOnly = false;

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
    'daily-goal-label': 'dailyGoalLabel',
    'set-daily-goal': 'setDailyGoalBtn',
    'filter-category-label': 'filterCategoryLabel',
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

  // Update placeholders
  inputEnglish.placeholder = translate('englishPlaceholder');
  inputTranslation.placeholder = translate('translationPlaceholder');
  searchWords.placeholder = translate('searchPlaceholder');

  // Update category options
  updateCategoryOptions();

  // Reset repeat info
  document.getElementById('repeat-direction').querySelector('strong').textContent = '';
  document.getElementById('repeat-info').textContent = formatMessage(translate('repeatInfo'), { count: 0 });

  renderWordList();
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
      const existingIds = new Set(words.map(w => w.id));
      const newWords = importedWords
        .filter(w => !existingIds.has(w.id))
        .map(w => createWordObject(w.english, w.uzbek));
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
  inputEnglish.value = word.english;
  inputTranslation.value = word.uzbek;
  inputCategory.value = word.category || '';
  // Remove the word temporarily
  words.splice(index, 1);
  renderWordList();
  renderStats();
  // Focus on form
  inputEnglish.focus();
}

function deleteWord(index) {
  if (confirm(translate('deleteConfirm'))) {
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
  const filteredWords = words.filter((word) => {
    if (showFavoritesOnly && !word.favorite) {
      return false;
    }
    if (categoryValue && word.category !== categoryValue) {
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
    return;
  }

  wordList.innerHTML = filteredWords
    .map(word => {
      const originalIndex = words.findIndex(w => w.id === word.id);
      return `
        <div class="word-item ${word.favorite ? 'favorite-item' : ''}">
          <div class="word-content">
            <span><strong>EN:</strong> ${escapeHtml(word.english)}</span>
            <span><strong>TR:</strong> ${escapeHtml(word.uzbek)}</span>
            ${word.category ? `<span><strong>${translate('categoryLabelList')}</strong> ${escapeHtml(word.category)}</span>` : ''}
            <small>${translate('correctText')}: ${word.correctCount} • ${translate('wrongText')}: ${word.wrongCount} • ${translate('streakLabel')}: ${word.streak}</small>
          </div>
          <div class="word-actions">
            <button class="favorite-btn" data-index="${originalIndex}">${word.favorite ? translate('favoritedBtn') : translate('favoriteBtn')}</button>
            <button class="edit-btn" data-index="${originalIndex}">${translate('editBtn')}</button>
            <button class="delete-btn" data-index="${originalIndex}">${translate('deleteBtn')}</button>
          </div>
        </div>`;
    })
    .join('');
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

  const progressPercent = dailyGoal > 0 ? Math.min((dailyStats.correct / dailyGoal) * 100, 100) : 0;
  dailyProgress.style.width = `${progressPercent}%`;
  progressText.textContent = `${dailyStats.correct} / ${dailyGoal}`;
}

function setActiveTab(tabKey) {
  Object.entries(tabs).forEach(([key, button]) => {
    button.classList.toggle('active', key === tabKey);
    sections[key].classList.toggle('active', key === tabKey);
  });
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

  // Filter out words with streak >= 10
  const availableWords = words.filter(item => item.streak < 10);

  // If no available words, use all words (to avoid getting stuck)
  const pool = availableWords.length > 0 ? availableWords : words;

  const weighted = pool.map((item) => {
    let priority = 1;
    
    // Add weight for frequently wrong words
    priority += item.wrongCount * 2;
    
    // Add weight for low streak (needs more practice)
    priority += Math.max(0, 3 - item.streak);
    
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
  currentDirection = Math.random() < 0.5 ? 'en-to-uz' : 'uz-to-en';
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
  if (isCorrect) {
    currentItem.correctCount += 1;
    currentItem.streak += 1;
    stats.correct += 1;
    dailyStats.correct += 1;
  } else {
    currentItem.wrongCount += 1;
    currentItem.streak = 0;
    stats.wrong += 1;
  }

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

  words.push(createWordObject(english, translation, category));
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
  renderWordList();
});

toggleFavorites.addEventListener('click', () => {
  showFavoritesOnly = !showFavoritesOnly;
  toggleFavorites.textContent = showFavoritesOnly ? translate('showAllWords') : translate('showFavorites');
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
  renderWordList();
});

loadStorage();
renderWordList();
renderStats();

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
