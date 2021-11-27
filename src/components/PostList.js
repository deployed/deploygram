import * as axios from 'axios';
import ImageAvatars from './Post';

export  async function fetchPosts() {
        return axios.get('https://deploygram.deployed.space/posts').then(response => response.data)
    }