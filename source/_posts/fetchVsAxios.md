---
title: Fetch vs. Axios
tags: JavaScript
date: 2023 01 04
---
<!-- # fetch vs. axios -->
<!-- ###### tags: `JavaScript`
 -->
## fetch API
- [CDN參考資訊](https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API)
- Promise 回傳：使用then進一步處理，使用catch處理錯誤。
- 回傳物件：ReadableStream，是Response.body()的實體。
- 回傳資料類型處理方法各異：
    - Response.body().arrayBuffer()
    - Response.body().blob()
    - Response.body().formData()
    - Response.body().json()
    - Response.body().text()

- 要自行判定回傳代碼。
- 在404時，不會顯示error，所已要真對response.ok 是否為true做檢查。（[參考CDN](https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch)）
![](https://i.imgur.com/W83sA6i.png)

### GET（預設）
```javascript!=
fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonData) {
    console.log(jsonData);
  });
```

### POST / PUT
- body若是要傳資料（非formdata），要記得先轉成字串（JSON.stringify）。
```javascript!=
fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
```

## axios
- [npm參考](https://www.npmjs.com/package/axios)
- 非原生，要另外安裝。
- Promise 回傳，前後端皆可用。
- 可使用async-await或then-catch。

### GET
- then-catch
```javascript!=
axios.get(url, { // 有需要的時候才放parameters物件。
    params: {
      key: value
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    // always executed - 非必須。
  });
```
- async-await
```javascript!=
async function getUser() {
  try {
    const response = await axios.get(url);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

### POST
```javascript!=
axios.post('url', {
    key: value
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

### 執行多個POST
```javascript!=
function getUserAccount() {
  return axios.get(url);
}

function getUserPermissions() {
  return axios.get(url);
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });

```

### 使用method的寫法
- GET
```javascript!=
axios({
  method: 'get',
  url: url,
  responseType: 'stream'
})
  .then(function (response) { response.data.pipe(fs.createWriteStream('image.jpg'))
  });
```

- POST
```javascript!=
axios({
  method: 'post',
  url: url,
  data: {
    key: value,
  }
});
```
