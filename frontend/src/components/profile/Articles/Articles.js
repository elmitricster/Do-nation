import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from 'components/profile/Articles/Article';
import { apiInstance } from 'api';

export function Articles() {
  const [articles, setArticles] = useState([]);
  
  const params = useParams();
  const api = apiInstance();
  
  useEffect(() => {
    const nickname = params.nickname;

    const getArticles = async () => {
      const user_response = await api.get(`/user/nickname?nickname=${nickname}`)
      const user_id = user_response.data.id

      const response = await api.get(`/community/read/all/${user_id}`)
      return response
    }

    getArticles()
      .then(res => {
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
