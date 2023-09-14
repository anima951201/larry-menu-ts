const buttonsContainer = document.querySelector('#buttonsContainer');
const originButtonsContainer = document.querySelector('#originButtonsContainer');
const itemsContainer = document.querySelector('#itemsContainer');


// header按鈕收合
const menuBtn = document.querySelector('.header')
const categoryContainer = document.querySelector('.category')

function ctrlMenuBtn() {
  categoryContainer.classList.toggle('show');
};





// 初始化按鈕，一開始顯示全部資料
initButtons();


// 顯示符合所選擇酒種的產地按鈕
function showOrigins(selectedCategory) {
  // 清空產地按鈕容器
  originButtonsContainer.innerHTML = '';

  // 從資料中獲取所有不重複的產地
  const origins = [...new Set(data.filter(item => item.category === selectedCategory).map(item => item.origin))];

  // 創建其他產地按鈕並將它們添加到容器中
  origins.forEach(origin => {
    const button = document.createElement('button');
    button.textContent = origin;
    button.classList.add('originBtn', 'btn');
    button.addEventListener('click', () => {
      showItems(selectedCategory, origin);
      setActiveButton(button, originButtonsContainer);
    });
    originButtonsContainer.appendChild(button);
  });

  // 如果選中的是 "All" 酒種，則不創建 "All" 產地按鈕
  if (selectedCategory !== 'All') {
    const allButton = document.createElement('button');
    allButton.textContent = 'All';
    allButton.classList.add('btn');
    allButton.addEventListener('click', () => {
      showItems(selectedCategory, 'All');
      setActiveButton(allButton, originButtonsContainer);
    });
    originButtonsContainer.appendChild(allButton);

    // 預設選中 "All" 按钮
    allButton.classList.add('active');
  }

  // 顯示符合所選擇酒種的卡片
  showItems(selectedCategory, 'All');
}

// 顯示符合所選擇酒種和產地的卡片
function showItems(selectedCategory, selectedOrigin) {
  // 清空卡片容器
  itemsContainer.innerHTML = '';

  // 過濾資料以找到符合的項目
  const filteredData = data.filter(item => {
    const isCategoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
    const isOriginMatch = selectedOrigin === 'All' || item.origin === selectedOrigin;
    return isCategoryMatch && isOriginMatch;
  });

  // 將符合條件的項目渲染為卡片
  filteredData.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('card', 'mb-2', 'col-sm-6');
    // card.style.maxWidth = '540px';

    const itemRow = document.createElement('div');
    itemRow.classList.add('row', 'g-0');
    card.appendChild(itemRow);

    // img-wrap
    const imgWrap = document.createElement('div');
    imgWrap.classList.add('col-4', 'position-relative', 'w-20', 'h-20');
    itemRow.appendChild(imgWrap);

    // img
    const image = document.createElement('img');
    image.classList.add('img-contain', 'img-fluid', 'rounded-start', 'position-absolute', 'top-50', 'start-50', 'translate-middle', 'img-center');
    image.src = item.image;
    image.alt = item.name;
    imgWrap.appendChild(image);

    // info
    const info = document.createElement('div');
    info.classList.add('col-8');
    itemRow.appendChild(info);

    // 商品名稱
    const title = document.createElement('h4');
    title.classList.add('item-title', 'card-title')
    title.textContent = item.name;
    info.appendChild(title);

    // 商品簡述
    const description = document.createElement('p');
    description.classList.add('item-info', 'card-text', 'fs-6', 'text-secondary')
    description.textContent = item.description;
    info.appendChild(description);

    // 商品價格
    const price = document.createElement('p');
    price.classList.add('card-text', 'fs-5')
    price.textContent = item.price;
    info.appendChild(price);

    // card.textContent = `${item.name} - ${item.origin}`;
    itemsContainer.appendChild(card);
  });
}

// 在點擊時為選中按鈕添加 "active" 類別，並移除其他按鈕的 "active" 類別
function setActiveButton(selectedButton, container) {
  const buttons = container.querySelectorAll('.btn');
  buttons.forEach(button => {
    if (button === selectedButton) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}

// 初始化按鈕
function initButtons() {
  // 從資料中獲取所有不重複的酒種
  const categories = ['All', ...new Set(data.map(item => item.category))];

  // 創建酒種按鈕並將它們添加到容器中
  categories.forEach(category => {
    const button = document.createElement('button');
    button.textContent = category;
    button.classList.add('categoryBtn', 'btn', 'mb-2', 'col-sm-6', 'col-12');
    button.addEventListener('click', () => {
      showOrigins(category);
      setActiveButton(button, buttonsContainer);

      // 在点击酒种按钮后关闭选择菜单
      categoryContainer.classList.remove('show');
    });
    buttonsContainer.appendChild(button);

    // 預設選中 "All" 按钮
    if (category === 'All') {
      button.classList.add('active');
      showItems('All', 'All')
    }
  });
}
