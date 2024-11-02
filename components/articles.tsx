import { ArticlesItem, ArticlesList, ArticlesMore } from './ui/articles'
import { Headline } from './ui/headline'

const articles = [
  {
    href: '/articles/1',
    title: 'How to Hack Your Brain',
    date: '2024-01-01',
  },
  {
    href: '/articles/2',
    title: 'How to Design Clean UI as an Engineer',
    date: '2024-01-02',
  },
  {
    href: '/articles/3',
    title: 'My Crazy Ride in Tech',
    date: '2024-01-03',
  },
]

export function Articles() {
  const showMore = articles.length > 3

  return (
    <div>
      <Headline>Articles</Headline>
      <ArticlesList>
        {articles.map((article) => (
          <ArticlesItem key={article.href} {...article} />
        ))}

        {showMore && <ArticlesMore>Read more</ArticlesMore>}
      </ArticlesList>
    </div>
  )
}
