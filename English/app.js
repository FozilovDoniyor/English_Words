const STORAGE_KEY = 'english-uzbek-words';
const STATS_KEY = 'english-uzbek-stats';

const DEFAULT_WORDS = [];

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
const inputUzbek = document.getElementById('input-uzbek');
const inputCategory = document.getElementById('input-category');
const addMessage = document.getElementById('add-message');
const wordList = document.getElementById('word-list');

const exportWords = document.getElementById('export-words');
const importFile = document.getElementById('import-file');
const importWords = document.getElementById('import-words');
const importExportMessage = document.getElementById('import-export-message');

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
  toggleDarkMode.textContent = darkMode ? '☀️ Kunduzgi rejim' : '🌙 Tungi rejim';
}

function saveStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(words));
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  localStorage.setItem('english-daily-stats', JSON.stringify(dailyStats));
  localStorage.setItem('english-daily-goal', dailyGoal.toString());
}

function exportWordsToFile() {
  if (!words.length) {
    showImportExportMessage('Eksport qilish uchun so\'zlar yo\'q.', 'error');
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
  showImportExportMessage('So\'zlar muvaffaqiyatli eksport qilindi.', 'info');
}

function importWordsFromFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const importedWords = JSON.parse(e.target.result);
      if (!Array.isArray(importedWords)) {
        throw new Error('Noto\'g\'ri format.');
      }
      // Validate structure
      for (const word of importedWords) {
        if (!word.english || !word.uzbek) {
          throw new Error('So\'zlar noto\'g\'ri formatda.');
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
      showImportExportMessage(`${newWords.length} ta yangi so\'z import qilindi.`, 'info');
    } catch (error) {
      showImportExportMessage('Import xatosi: ' + error.message, 'error');
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
    utterance.lang = 'en-US'; // English
    utterance.rate = 0.8;
    speechSynthesis.speak(utterance);
  } else {
    alert('Brauzeringiz ovozli talaffuzni qo\'llab-quvvatlamaydi.');
  }
}

function editWord(index) {
  const word = words[index];
  inputEnglish.value = word.english;
  inputUzbek.value = word.uzbek;
  inputCategory.value = word.category || '';
  // Remove the word temporarily
  words.splice(index, 1);
  renderWordList();
  renderStats();
  // Focus on form
  inputEnglish.focus();
}

function deleteWord(index) {
  if (confirm('Bu so\'zni o\'chirishni xohlaysizmi?')) {
    words.splice(index, 1);
    saveStorage();
    renderWordList();
    renderStats();
    showMessage('So\'z o\'chirildi.', 'info');
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
  };
}

function showMessage(text, type = 'info') {
  addMessage.textContent = text;
  addMessage.style.color = type === 'error' ? '#dc2626' : '#2563eb';
}

function renderWordList() {
  const query = searchWords.value.toLowerCase();
  const filteredWords = words.filter(word =>
    word.english.toLowerCase().includes(query) ||
    word.uzbek.toLowerCase().includes(query) ||
    (word.category && word.category.toLowerCase().includes(query))
  );

  if (filteredWords.length === 0) {
    wordList.innerHTML = '<p>Hozircha biron bir so\'z qo\'shilmagan.</p>';
    return;
  }

  wordList.innerHTML = filteredWords
    .map(word => {
      const originalIndex = words.indexOf(word);
      return `
        <div class="word-item">
          <div class="word-content">
            <span><strong>EN:</strong> ${escapeHtml(word.english)}</span>
            <span><strong>UZ:</strong> ${escapeHtml(word.uzbek)}</span>
            ${word.category ? `<span><strong>Kategoriya:</strong> ${escapeHtml(word.category)}</span>` : ''}
            <small>To'g'ri: ${word.correctCount} • Xato: ${word.wrongCount} • Ketma-ket: ${word.streak}</small>
          </div>
          <div class="word-actions">
            <button class="edit-btn" data-index="${originalIndex}">Tahrirlash</button>
            <button class="delete-btn" data-index="${originalIndex}">O'chirish</button>
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
    showMessage('Iltimos, avval gap yoki so\'z qo\'shing.', 'error');
    return null;
  }

  const weighted = words.map((item) => {
    const base = 1;
    const priority = base + item.wrongCount * 2 + Math.max(0, 3 - item.streak);
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
  repeatDirection.querySelector('strong').textContent = currentDirection === 'en-to-uz' ? 'Inglizchadan o\'zbekchaga' : 'O\'zbekchadan inglizchaga';
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
  const uzbek = inputUzbek.value.trim();
  const category = inputCategory.value;

  if (!english || !uzbek) {
    showMessage('Ikkala maydonni ham to\'ldiring.', 'error');
    return;
  }

  words.push(createWordObject(english, uzbek, category));
  saveStorage();
  renderWordList();
  showMessage('So\'z saqlandi.', 'info');
  form.reset();
});

tabs.add.addEventListener('click', () => setActiveTab('add'));
tabs.repeat.addEventListener('click', () => setActiveTab('repeat'));

toggleDarkMode.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('english-dark-mode', isDark.toString());
  toggleDarkMode.textContent = isDark ? '☀️ Kunduzgi rejim' : '🌙 Tungi rejim';
});

startRepeat.addEventListener('click', () => {
  showMessage('');
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

importFile.addEventListener('change', importWordsFromFile);

setDailyGoal.addEventListener('click', () => {
  const goal = parseInt(dailyGoalInput.value);
  if (goal > 0) {
    dailyGoal = goal;
    saveStorage();
    showMessage('Kunlik maqsad o\'rnatildi.', 'info');
  } else {
    showMessage('Maqsad 1 dan katta bo\'lishi kerak.', 'error');
  }
});

wordList.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('edit-btn')) {
    const index = parseInt(target.dataset.index);
    editWord(index);
  } else if (target.classList.contains('delete-btn')) {
    const index = parseInt(target.dataset.index);
    deleteWord(index);
  }
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
