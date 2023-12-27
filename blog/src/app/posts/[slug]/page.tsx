export const dynamic = "error";

export async function generateStaticParams() {
  const posts = [
    {
      slug: "post-1",
    },
    {
      slug: "post-2",
    },
  ];

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }) {
  console.log(params);

  return <p>Post: {params.slug}</p>;
}
