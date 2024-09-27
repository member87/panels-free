import { Icon } from '@iconify/react';
import SocialIcon from './SocialIcon';

const priority = ['s', 'dhd', 'e', 'am', 'dsd'];
export default function SingleImage({ data, artists }: { data: any, artists: any }) {

  const keyToUse = priority.find((key) => data[key]);
  if (!keyToUse) return;

  const imageUrl = data[keyToUse];
  if (!imageUrl) return;
  const artist = findArtist(imageUrl.split('/content/').pop().split('/')[0].split('_')[0], artists)

  if (!artist) return;

  return <div className="rounded bg-zinc-900/50 shadow grid grid-rows-[500px,1fr]">
    <img src={imageUrl}
      alt={keyToUse}
      key={keyToUse}
      className="rounded-lg shadow-lg h-full w-full object-cover"
    />
    <div className="px-2 pb-4 text-center">
      <a href={imageUrl} target="_blank" className="block my-4 bg-white rounded text-black py-2 font-bold">
        <Icon icon="material-symbols-light:download" className="inline text-3xl" /> Get Wallpaper
      </a>
      <h5 className="text-xl font-bold">{artist?.label}</h5>
      <div className="flex justify-center gap-2 mt-4">
        {Object.keys(artist?.socialLinks).map((key) => {
          return <SocialIcon platform={key} link={artist?.socialLinks[key]} key={key} />
        })}
      </div>
    </div>
  </div>
}

const findArtist = (id: string, artists: any) => {
  return artists.find((artist: {
    id: string;
  }) => artist.id === id);
}


