import SearchForm from "@/components/SearchForm";

export default async function Home({ searchParams } : { searchParams: Promise<{ query?: string }> }) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitch Your Startup</h1>
        <p className="sub-heading !max-w-3xl">Submit Ideas, Vote on Pitches</p>
        <SearchForm query={query} />

      </section>
    </>
  );
}
