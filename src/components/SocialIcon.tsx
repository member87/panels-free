import { Icon } from '@iconify/react';

const platformData: {
  [key: string]: {
    color: string,
    icon: string,
  }
} = {
  youtube: {
    color: "#FF0000",
    icon: "simple-icons:youtube",
  },
  instagram: {
    color: "#E4405F",
    icon: "simple-icons:instagram",
  },
  twitter: {
    color: "#1DA1F2",
    icon: "simple-icons:twitter",
  },
  facebook: {
    color: "#1877F2",
    icon: "simple-icons:facebook",
  },
  shop: {
    color: "#7AB55C",
    icon: "mdi:shop",
  },
  website: {
    color: "#FFF",
    icon: "mdi:web",
  }
}

export default function SocialIcon({ platform, link }: { platform: string, link: string }) {
  const data = platformData[platform];
  if (!data) return;
  return <a href={`${link}`}>
    <Icon icon={`${data.icon}`} color={data.color} className="text-2xl" />
  </a>
}

