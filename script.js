let displayedCount = 8;
let currentCategory = 'all';

function renderNews() {
    const newsList = document.getElementById('newsList');
    
    let filteredNews = allNews;
    if (currentCategory !== 'all') {
        filteredNews = allNews.filter(item => item.category === currentCategory);
    }
    
    const newsToShow = filteredNews.slice(0, displayedCount);
    
    newsList.innerHTML = newsToShow.map(item => `
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="news-card">
            <div class="news-header">
                <span class="category-tag category-${item.category}">${item.category}</span>
                <span class="time">${item.time}</span>
            </div>
            <h2>${item.title}</h2>
            <p class="summary">${item.summary}</p>
            <div class="source">
                <span class="source-icon">📰</span>
                <span>${item.source}</span>
            </div>
        </a>
    `).join('');
    
    // 更新加载更多按钮状态
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (displayedCount >= filteredNews.length) {
        loadMoreBtn.textContent = '没有更多了';
        loadMoreBtn.disabled = true;
    } else {
        loadMoreBtn.textContent = '加载更多';
        loadMoreBtn.disabled = false;
    }
}

// 分类切换
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        currentCategory = this.dataset.category;
        displayedCount = 8;
        renderNews();
    });
});

// 加载更多
document.getElementById('loadMoreBtn').addEventListener('click', function() {
    displayedCount += 8;
    renderNews();
});

// 显示更新时间
document.getElementById('updateTime').textContent = '更新时间：' + new Date().toLocaleDateString('zh-CN');

// 初始化
renderNews();
