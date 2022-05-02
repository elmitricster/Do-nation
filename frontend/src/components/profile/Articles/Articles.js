import { Article } from 'components/profile/Articles/Article';
import default_content from './따봉도치.jpg';

export function Articles() {
  const articles = [
    {
      id: 0,
      content:
        '글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용글 내용',
      image: default_content,
      likes: 100,
      comments: 10,
    },
    {
      id: 1,
      content: '글 내용',
      image: 'image_url',
      likes: 100,
      comments: 10,
    },
    {
      id: 2,
      content: '글 내용',
      image: 'image_url',
      likes: 100,
      comments: 10,
    },
  ];

  return (
    <div>
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}
