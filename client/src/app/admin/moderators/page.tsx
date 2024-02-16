export const generateMetadata = async () => {
  return {
    title: 'News Page',
    description: 'V3V - News Page',
  }
}

const NewsPage = () => {
  return (
    <main className="flex-1">
      <div className="container">
        <h3 className="text-center">NewsPage</h3>
      </div>
    </main>
  )
}

export default NewsPage