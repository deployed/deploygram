import * as axios from 'axios';

export  async function fetchPosts() {
        return axios.get('https://deploygram.deployed.space/posts').then(response => response.data)
    }