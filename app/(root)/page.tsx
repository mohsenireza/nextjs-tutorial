import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({ searchParams } : { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: 'Reza' },
      _id: 1,
      description: 'This is a description',
      image: 'https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png',
      category: 'robots',
      title: 'We robots'
    }
  ]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches</p>
        <SearchForm query={query} />

      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups' }
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={ post?._id } post={ post } />
            ))
          ) : (
            <p>No startup found</p>
          )}
        </ul>
      </section>
    </>
  );
}
