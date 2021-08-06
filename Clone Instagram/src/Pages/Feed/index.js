import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import FeedImage from '../../components/FeedImage';
import axios from 'axios';
import {
  Container,
  Post,
  Header,
  Avatar,
  Name,
  Description,
  Loading,
} from './styles';
import api from '../../services/api';

const Feed = () => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefresh] = useState(false);

  async function loadPage() {
    setLoading(true);
    const options = {
      method: 'GET',
      url: 'https://instagram-data1.p.rapidapi.com/user/feed?expand=author',
      params: {username: 'instagram'},
      headers: {
        'x-rapidapi-key': 'b12b007896msh444b7b2846c56d0p1de083jsn84d4defec0d7',
        'x-rapidapi-host': 'instagram-data1.p.rapidapi.com'
      }
    };

    const {data} = await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    setLoading(false);
    setFeed(data);
  }

  useEffect(() => {
    loadPage();
  }, []);

  async function refreshList() {
    setRefresh(true);
    await loadPage();
    setRefresh(false);
  }

  return (
    <Container>
      
    </Container>
  );
};

export default Feed;
