// const fetch = require('node-fetch');
import fetch from 'node-fetch';

const username = 'sogoodgithub';
const token = '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';

fetch(`https://api.github.com/users/${username}/subscriptions?per_page=100`, {
        headers: {
            Accept: "application/vnd.github+json",
            Authorization: `token ${token}`
        }
    })
    .then(response => response.json())
    .then(data => {
        // 处理返回的数据
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });