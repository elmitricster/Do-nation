import { useEffect, useState } from 'react';
import { Article } from 'components/profile/Articles/Article';
import { apiInstance } from 'api';

export function Articles() {
  const [articles, setArticles] = useState([]);
  const api = apiInstance();
  
  useEffect(() => {
    const nickname = localStorage.getItem('user');

    const getArticles = async () => {
      const user_response = await api.get(`/user/nickname?nickname=${nickname}`)
      const user_id = user_response.data.id

      const response = await api.get(`/community/read/${user_id}`)
      return response
    }

    getArticles()
      .then(res => {
        console.log(res.data)
        setArticles(res.data)
      })
  }, [])

  return (
    <div>
      {articles.map(article => (
        <Article key={article.communityId} article={article} />
      ))}
    </div>
  );
}
