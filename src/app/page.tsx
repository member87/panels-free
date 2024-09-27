import ImageList from "@/components/ImageList";

export default async function Home() {
  const { media, content } = await getData();

  return (
    <div className="p-4">
      <div className="text-center mb-4">
        <h1 className="text-4xl font-bold text-center">Panels</h1>
        <span className="text-2xl text-gray-100">Source code available on <a href="https://github.com/member87/panels-free" className="text-blue-400 underline">GitHub</a></span>
      </div>
      <ImageList data={media} artists={content} />
    </div>
  );
}

const getData = async () => {
  const url = "https://storage.googleapis.com/panels-api/data/20240916/spec.json";

  const spec = await fetch(url);
  if (!spec.ok) {
    throw new Error("Failed to fetch spec");
  }

  const specData = await spec.json();

  const mediaUrl = specData.media.root;
  const media = await fetch(mediaUrl + '-c-p~uhd');
  if (!media.ok) {
    throw new Error("Failed to fetch media");
  }

  const contentUrl = specData.content;
  const content = await fetch(contentUrl);
  if (!content.ok) {
    throw new Error("Failed to fetch content");
  }

  return {
    media: (await media.json())['data'],
    content: (await content.json())['artists']
  }
}

