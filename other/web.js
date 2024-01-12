const username = 'sogoodgithub';
//带token的文件不能上传到git，所以要临时从 token.js拷贝（token.js不会上传）
const token = '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';
const key = "description";
const value = "iptv".toLowerCase();

fetch(`https://api.github.com/user/subscriptions?per_page=100&page=1`, {
        headers: {
            Accept: "application/vnd.github+json",
            Authorization: `token ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        // 处理返回的数据
        console.log(`${data.length} repositories found.`);
        for (let item of data) {
            if (item[key] != null && item[key].toLowerCase().indexOf(value) > -1) {
                console.log('********************');
                console.log(`${item.description} : ${item.html_url}`);
            }
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });