/**
 * AI 热选 - AI热点精选聚合网站
 * 交互逻辑脚本
 */

// ===================================
// 全局状态管理
// ===================================
const state = {
  data: null,           // 原始数据
  currentDate: null,     // 当前选中的日期
  currentTags: [],       // 当前选中的标签筛选
  searchQuery: '',       // 当前搜索关键词
  allTags: [],           // 所有可用标签
  dates: []              // 所有可用日期
};

// ===================================
// DOM 元素引用
// ===================================
let elements = {};

// ===================================
// 初始化
// ===================================
document.addEventListener('DOMContentLoaded', async () => {
  // 缓存DOM元素
  cacheElements();
  
  // 加载数据
  await loadData();
  
  // 绑定事件
  bindEvents();
  
  // 初始化显示
  initDisplay();
});

/**
 * 缓存常用的DOM元素
 */
function cacheElements() {
  elements = {
    dateDisplay: document.getElementById('dateDisplay'),
    datePrevBtn: document.getElementById('datePrevBtn'),
    dateNextBtn: document.getElementById('dateNextBtn'),
    dateDots: document.getElementById('dateDots'),
    searchInput: document.getElementById('searchInput'),
    tagsContainer: document.getElementById('tagsContainer'),
    newsContainer: document.getElementById('newsContainer'),
    statsBar: document.getElementById('statsBar'),
    backToTop: document.getElementById('backToTop'),
    loading: document.getElementById('loading')
  };
}

/**
 * 加载数据
 */
async function loadData() {
  try {
    // 显示加载状态
    elements.loading.style.display = 'flex';
    elements.newsContainer.innerHTML = '';
    
    // 优先使用内嵌数据（支持本地file://打开），再尝试fetch
    if (typeof SITE_DATA !== 'undefined' && SITE_DATA) {
      state.data = SITE_DATA;
    } else {
      const response = await fetch('./data.json');
      if (!response.ok) {
        throw new Error('数据加载失败');
      }
      state.data = await response.json();
    }
    
    // 提取所有日期并排序
    state.dates = Object.keys(state.data.dates).sort().reverse();
    
    // 设置当前日期为最新日期
    state.currentDate = state.dates[0];
    
    // 提取所有标签
    extractAllTags();
    
  } catch (error) {
    console.error('加载数据失败:', error);
    elements.newsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">⚠️</div>
        <p class="empty-text">数据加载失败，请刷新重试</p>
      </div>
    `;
  } finally {
    elements.loading.style.display = 'none';
  }
}

/**
 * 提取所有标签并统计数量
 */
function extractAllTags() {
  const tagCounts = {};
  
  // 遍历所有日期的新闻
  Object.values(state.data.dates).forEach(newsList => {
    newsList.forEach(news => {
      news.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });
  });
  
  // 转换为数组并排序
  state.allTags = Object.entries(tagCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

/**
 * 绑定事件监听
 */
function bindEvents() {
  // 日期导航按钮
  elements.datePrevBtn.addEventListener('click', () => navigateDate(-1));
  elements.dateNextBtn.addEventListener('click', () => navigateDate(1));
  
  // 搜索输入（实时搜索）
  elements.searchInput.addEventListener('input', debounce(handleSearch, 150));
  
  // 回到顶部按钮
  elements.backToTop.addEventListener('click', scrollToTop);
  
  // 滚动监听
  window.addEventListener('scroll', handleScroll);
  
  // 键盘快捷键
  document.addEventListener('keydown', handleKeydown);
}

/**
 * 初始化显示
 */
function initDisplay() {
  renderDateNavigation();
  renderTags();
  renderNews();
  updateStats();
}

/**
 * 日期导航
 */
function navigateDate(direction) {
  const currentIndex = state.dates.indexOf(state.currentDate);
  const newIndex = currentIndex + direction;
  
  if (newIndex >= 0 && newIndex < state.dates.length) {
    state.currentDate = state.dates[newIndex];
    state.currentTags = [];
    state.searchQuery = '';
    elements.searchInput.value = '';
    
    renderDateNavigation();
    renderTags();
    renderNews();
    updateStats();
  }
}

/**
 * 渲染日期导航
 */
function renderDateNavigation() {
  // 更新日期显示
  elements.dateDisplay.textContent = formatDateDisplay(state.currentDate);
  
  // 更新日期点
  elements.dateDots.innerHTML = state.dates.map(date => `
    <span class="date-dot ${date === state.currentDate ? 'active' : ''}" 
          data-date="${date}"
          title="${date}"></span>
  `).join('');
  
  // 绑定日期点点击事件
  elements.dateDots.querySelectorAll('.date-dot').forEach(dot => {
    dot.addEventListener('click', () => {
      state.currentDate = dot.dataset.date;
      state.currentTags = [];
      state.searchQuery = '';
      elements.searchInput.value = '';
      
      renderDateNavigation();
      renderTags();
      renderNews();
      updateStats();
    });
  });
  
  // 更新导航按钮状态
  const currentIndex = state.dates.indexOf(state.currentDate);
  elements.datePrevBtn.style.opacity = currentIndex === state.dates.length - 1 ? '0.3' : '1';
  elements.datePrevBtn.style.pointerEvents = currentIndex === state.dates.length - 1 ? 'none' : 'auto';
  elements.dateNextBtn.style.opacity = currentIndex === 0 ? '0.3' : '1';
  elements.dateNextBtn.style.pointerEvents = currentIndex === 0 ? 'none' : 'auto';
}

/**
 * 渲染标签筛选
 */
function renderTags() {
  elements.tagsContainer.innerHTML = state.allTags.map(tag => `
    <button class="tag-filter ${state.currentTags.includes(tag.name) ? 'active' : ''}" 
            data-tag="${tag.name}">
      ${tag.name}
      <span class="tag-count">${tag.count}</span>
    </button>
  `).join('');
  
  // 绑定标签点击事件
  elements.tagsContainer.querySelectorAll('.tag-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      const tag = btn.dataset.tag;
      
      if (state.currentTags.includes(tag)) {
        state.currentTags = state.currentTags.filter(t => t !== tag);
      } else {
        state.currentTags.push(tag);
      }
      
      renderTags();
      renderNews();
      updateStats();
    });
  });
}

/**
 * 渲染新闻列表
 */
function renderNews() {
  const news = getFilteredNews();
  
  if (news.length === 0) {
    elements.newsContainer.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <p class="empty-text">没有找到符合条件的新闻</p>
      </div>
    `;
    return;
  }
  
  elements.newsContainer.innerHTML = news.map((item, index) => `
    <div class="timeline-item fade-in" style="animation-delay: ${index * 50}ms">
      <div class="timeline-dot"></div>
      <div class="card">
        <div class="card-header">
          <span class="card-time">🕐 ${item.time}</span>
          <div class="card-source">
            <img class="card-avatar" src="${item.source_avatar}" alt="${item.source}" 
                 onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2280%22>👤</text></svg>'">
            <span class="card-source-name">${item.source}</span>
          </div>
          <span class="card-score">
            <span class="card-score-icon">⭐</span>
            ${item.score}
          </span>
        </div>
        <h3 class="card-title">
          <span class="card-level">${item.level}</span>
          <a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.title}</a>
        </h3>
        <p class="card-summary">${item.summary}</p>
        <div class="card-recommend">
          <p>${item.recommend}</p>
        </div>
        <div class="card-tags">
          ${item.tags.map(tag => `
            <span class="card-tag ${state.currentTags.includes(tag) ? 'active' : ''}" 
                  data-tag="${tag}">#${tag}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `).join('');
  
  // 绑定卡片标签点击事件
  elements.newsContainer.querySelectorAll('.card-tag').forEach(tag => {
    tag.addEventListener('click', (e) => {
      e.stopPropagation();
      const tagName = tag.dataset.tag;
      
      if (!state.currentTags.includes(tagName)) {
        state.currentTags.push(tagName);
        renderTags();
        renderNews();
        updateStats();
      }
    });
  });
}

/**
 * 获取筛选后的新闻
 */
function getFilteredNews() {
  let news = state.data.dates[state.currentDate] || [];
  
  // 标签筛选
  if (state.currentTags.length > 0) {
    news = news.filter(item => 
      state.currentTags.some(tag => item.tags.includes(tag))
    );
  }
  
  // 搜索筛选
  if (state.searchQuery) {
    const query = state.searchQuery.toLowerCase();
    news = news.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.source.toLowerCase().includes(query) ||
      item.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }
  
  // 按时间排序（最新在前）
  return news.sort((a, b) => {
    const timeA = a.time.replace(':', '');
    const timeB = b.time.replace(':', '');
    return parseInt(timeB) - parseInt(timeA);
  });
}

/**
 * 更新统计信息
 */
function updateStats() {
  const news = getFilteredNews();
  const totalNews = state.data.dates[state.currentDate]?.length || 0;
  const filteredNews = news.length;
  
  // 计算平均分数
  const avgScore = filteredNews > 0 
    ? Math.round(news.reduce((sum, item) => sum + item.score, 0) / filteredNews)
    : 0;
  
  // 计算活跃标签数
  const activeTags = filteredNews > 0 
    ? new Set(news.flatMap(item => item.tags)).size 
    : 0;
  
  elements.statsBar.innerHTML = `
    <div class="stat-item">
      <div class="stat-value">${filteredNews}</div>
      <div class="stat-label">当前显示 / 共 ${totalNews} 条</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${avgScore}</div>
      <div class="stat-label">平均精选分数</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">${activeTags}</div>
      <div class="stat-label">涉及话题</div>
    </div>
  `;
}

/**
 * 搜索处理
 */
function handleSearch(e) {
  state.searchQuery = e.target.value.trim();
  renderNews();
  updateStats();
}

/**
 * 滚动处理 - 回到顶部按钮显示/隐藏
 */
function handleScroll() {
  if (window.scrollY > 300) {
    elements.backToTop.classList.add('visible');
  } else {
    elements.backToTop.classList.remove('visible');
  }
}

/**
 * 回到顶部
 */
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/**
 * 键盘快捷键
 */
function handleKeydown(e) {
  // 左右箭头切换日期
  if (e.key === 'ArrowLeft' && !isInputFocused()) {
    navigateDate(-1);
  } else if (e.key === 'ArrowRight' && !isInputFocused()) {
    navigateDate(1);
  }
  
  // Ctrl/Cmd + K 聚焦搜索
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    elements.searchInput.focus();
  }
  
  // Escape 清空搜索和筛选
  if (e.key === 'Escape') {
    if (document.activeElement === elements.searchInput) {
      elements.searchInput.blur();
    } else {
      state.searchQuery = '';
      state.currentTags = [];
      elements.searchInput.value = '';
      renderTags();
      renderNews();
      updateStats();
    }
  }
}

/**
 * 检查是否在输入框中
 */
function isInputFocused() {
  const activeElement = document.activeElement;
  return activeElement.tagName === 'INPUT' || activeElement.tagName === 'TEXTAREA';
}

/**
 * 格式化日期显示
 */
function formatDateDisplay(dateStr) {
  const date = new Date(dateStr);
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  
  // 判断是否是今天或昨天
  const isToday = dateStr === formatDateStr(today);
  const isYesterday = dateStr === formatDateStr(yesterday);
  
  if (isToday) {
    return `今天 · ${dateStr}`;
  } else if (isYesterday) {
    return `昨天 · ${dateStr}`;
  }
  
  // 格式化中文日期
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  const weekday = weekdays[date.getDay()];
  
  return `${month}月${day}日 ${weekday} · ${dateStr}`;
}

/**
 * 格式化日期为 YYYY-MM-DD
 */
function formatDateStr(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * 防抖函数
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
