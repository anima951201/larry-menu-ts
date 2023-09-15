// *** 
// 這個頁面是萊萊的可修改區域
// ***


const data = [
  // category: 'whiskey'
  { name: '法國純麥威士忌', category: 'whiskey', origin: 'France', image: './img/c-01.jpg', description: '法國特色威士忌，某某酒莊西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌', price: '$6650' },
  { name: '法國威士忌', category: 'whiskey', origin: 'France', image: './img/c-02.jpg', description: '法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊', price: '$8550' },
  { name: '澳洲威士忌', category: 'whiskey', origin: 'australia', image: './img/c-03.jpg', description: '澳洲特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌，某某酒莊', price: '$5600' },
  { name: '純麥純麥澳洲威士忌22', category: 'whiskey', origin: 'australia', image: './img/c-04.jpg', description: '法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊 / 澳洲特色威士忌', price: '$5000' },
  { name: '澳洲純麥威士忌33', category: 'whiskey', origin: 'australia', image: './img/j-01.png', description: '法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊', price: '$5200' },
  { name: '西班牙純麥威士忌01', category: 'whiskey', origin: 'spain', image: './img/j-02.png', description: '法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊', price: '$5300' },
  { name: '西班牙威士忌02', category: 'whiskey', origin: 'spain', image: './img/j-03.png', description: '法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊', price: '$5590' },
  { name: '西班牙純麥純麥純麥威士忌03', category: 'whiskey', origin: 'spain', image: './img/j-04.png', description: '西班牙特色威士忌，某某酒莊', price: '$7850' },
  // category: 'redWine'
  { name: 'France01紅葡萄酒', category: 'redWine', origin: 'France', image: './img/c-05.jpg', description: '法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊', price: '$1050' },
  { name: 'australia02紅葡萄酒', category: 'redWine', origin: 'australia', image: './img/c-06.jpg', description: '法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊', price: '$950' },
  { name: '台灣03紅葡萄酒', category: 'redWine', origin: '台灣', image: './img/c-07.jpg', description: '法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊', price: '$850' },
  { name: 'spain0spain4紅葡萄酒', category: 'redWine', origin: 'spain', image: './img/o-01.webp', description: '法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊', price: '$1850' },
  // category: 'whiteWine'
  { name: '台灣白葡萄酒1995', category: 'whiteWine', origin: '台灣', image: './img/j-01.png', description: '西班牙特色紅葡萄酒', price: '$2000' },
  { name: 'spain白葡萄酒187', category: 'whiteWine', origin: 'spain', image: './img/j-02.png', description: '西班牙特色紅葡萄酒', price: '$3010' },
  { name: 'spainspain白葡萄酒1885', category: 'whiteWine', origin: 'spain', image: './img/j-03.png', description: '法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊', price: '$1850' },
  // category: 'pinkWine'
  { name: 'spain粉紅酒123', category: 'pinkWine', origin: 'spain', image: './img/j-03.png', description: 'beer1321323', price: '$1850' },
  { name: 'spain粉紅酒uihl12546334', category: 'pinkWine', origin: 'spain', image: './img/j-03.png', description: 'beer1321323', price: '$1850' },
  { name: '日本粉紅酒1hiu2334', category: 'pinkWine', origin: '日本', image: './img/j-03.png', description: 'beer1321323', price: '$1850' },
  // category: 'champagne'
  { name: 'australia香檳64554', category: 'champagne', origin: 'australia', image: './img/j-01.png', description: '法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊', price: '$1120' },
  { name: 'France香檳187', category: 'champagne', origin: 'France', image: './img/j-02.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: 'spain香檳1885', category: 'champagne', origin: 'spain', image: './img/j-03.png', description: '西班牙特色紅葡萄酒', price: '$800' },
  // category: 'sorghum'
  { name: '日本高粱1995', category: 'sorghum', origin: '日本', image: './img/j-01.png', description: '法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊', price: '$1850' },
  { name: 'australia高粱187', category: 'sorghum', origin: 'australia', image: './img/j-02.png', description: '法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊', price: '$1850' },
  { name: '日本高粱1885', category: 'sorghum', origin: '日本', image: './img/j-03.png', description: '法國特色西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌西班牙特色威士忌威士忌，某某酒莊', price: '$1850' },
  // category: 'gin'
  { name: '台灣琴酒1995', category: 'gin', origin: '台灣', image: './img/j-01.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: 'australia琴酒187', category: 'gin', origin: 'australia', image: './img/j-02.png', description: '西班牙特色紅葡萄酒', price: '$1300' },
  { name: 'France琴酒1885', category: 'gin', origin: 'France', image: './img/j-03.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  // category: 'rum'
  { name: 'spain萊姆酒1995', category: 'rum', origin: 'spain', image: './img/j-01.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: '台灣萊姆酒187', category: 'rum', origin: '台灣', image: './img/j-02.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: '台灣萊姆酒1885', category: 'rum', origin: '台灣', image: './img/j-03.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  // category: 'vodka'
  { name: 'spain伏特加1995', category: 'vodka', origin: 'spain', image: './img/j-01.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: 'France伏特加187', category: 'vodka', origin: 'France', image: './img/j-02.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: 'spain伏特加1885', category: 'vodka', origin: 'spain', image: './img/j-03.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  // category: 'wine'
  { name: 'France水果酒1995', category: 'wine', origin: 'France', image: './img/j-01.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: 'spain水果酒187', category: 'wine', origin: 'spain', image: './img/j-02.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: 'spain水果酒1885', category: 'wine', origin: 'spain', image: './img/j-03.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  // category: 'liqueur'
  { name: 'spain利口酒1995', category: 'liqueur', origin: 'spain', image: './img/j-01.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: '台灣利口酒187', category: 'liqueur', origin: '台灣', image: './img/j-02.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: 'spain利口酒1885', category: 'liqueur', origin: 'spain', image: './img/j-03.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  // category: 'soju'
  { name: '台灣燒酒1995', category: 'soju', origin: '台灣', image: './img/j-01.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: 'spain燒酒187', category: 'soju', origin: 'spain', image: './img/j-02.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: 'spain燒酒1885', category: 'soju', origin: 'spain', image: './img/j-03.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  // category: 'beer'
  { name: 'France啤酒1995', category: 'beer', origin: 'France', image: './img/j-01.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: 'spain啤酒187', category: 'beer', origin: 'spain', image: './img/j-02.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: 'spain啤酒1885', category: 'beer', origin: 'spain', image: './img/j-03.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  // category: 'other'
  { name: '台灣其他調酒1995', category: 'other', origin: '台灣', image: './img/j-01.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: 'spain其他調酒187', category: 'other', origin: 'spain', image: './img/j-02.png', description: '西班牙特色紅葡萄酒', price: '$1850' },
  { name: 'France其他調酒1885', category: 'other', origin: 'France', image: './img/j-03.png', description: '西班牙特色紅葡萄酒', price: '$1850' },

  // ... 在此放置所有商品數據
];