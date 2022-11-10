import { currentDayName } from '@/lib/utils/dateUtils'
import dynamic from 'next/dynamic'

export const USES = [
  {
    name: 'Custom PC Rig',
    description: 'Intel i9 - RTX 3080 - 64GB RAM - 2TB SSD, 2TB HDD - Corsair 4000D',
  },
  {
    name: 'MacBook Air 13"',
    description: 'M1 - 8-core CPU, 8-core GPU. 8 GB RAM, 512GB SSD',
    link: 'https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5R2GQW',
  },
  {
    name: 'Logitech MX Vertical',
    description:
      'I recommend this mouse to every developer looking to lessen/prevent wrist strain.',
    link: 'https://amzn.to/3ww4Qu3',
  },
  {
    name: 'Logitech G502 X Plus, White',
    description: 'This is my gaming mouse. Smooth, light, and ergonomic.',
    link: 'https://www.amazon.com/dp/B092CDD7HH',
  },
  {
    name: 'Shurikey 75% Mechanical Wireless Keyboard',
    description: 'The volume control wheel was the selling point for me. Rose switches.',
    link: 'https://www.amazon.com/Shurikey-Keyboard-Wireless-Compact-Mechanical/dp/B09V6K92J4',
  },
  {
    name: 'HUION Wireless Mini Keydial KD100',
    description: 'Remedies the lack of a numberpad from using a small keyboard.',
    link:
      'https://www.amazon.com/HUION-One-Handed-Customizable-Animation-Illustration/dp/B092HTZZWM',
  },
  {
    name: 'Audeze Penrose X',
    description: 'Doubles as a gaming headset. There are EQ presets specifically for footsteps.',
    link: 'https://www.amazon.com/Audeze-Penrose-Wireless-Low-Latency-Bluetooth/dp/B08D9M6FZK',
  },
  {
    name: 'SteelSeries Arctis Nova 7',
    description: 'Backup headphones.',
    link: 'https://www.amazon.com/Audeze-Penrose-Wireless-Low-Latency-Bluetooth/dp/B08D9M6FZK',
  },
  {
    name: 'Logitech BRIO',
    description: 'For meetings.',
    link: 'https://www.amazon.com/Logitech-BRIO-Conferencing-Recording-Streaming/dp/B01N5NYRES',
  },
  {
    name: 'Samson G-Track Pro',
    description: 'I use a pop filter, arm mount, and cage with it.',
    link:
      'https://www.amazon.com/Samson-Technologies-Professional-Microphone-SAGM1UPRO/dp/B075KL6ZLC',
  },
  {
    name: `32" ASUS TUF Curved Gaming Monitor`,
    description: `I also use this on my gaming rig because I have an RTX graphics card.`,
    link: 'https://www.amazon.com/LG-27GL850-B-Ultragear-Compatible-Monitor/dp/B07TD94TQF',
  },
  {
    name: `27" LG NVIDIA G-Sync Monitor`,
    description: `I use this monitor to keep documentation windows open.`,
    link: 'https://www.amazon.com/LG-27GL850-B-Ultragear-Compatible-Monitor/dp/B07TD94TQF',
  },
  {
    name: `27" Teros Curved Monitor`,
    description: 'This monitor sits above my main one.',
    link:
      'https://articulo.mercadolibre.com.pe/MPE-439278095-monitor-gaming-teros-curvo-te-3170n-27-ips-led-144hz-1ms-hd-_JM',
  },
  {
    name: 'iPad Air 2',
    description: 'I use it to keep Discord and other chat apps open. Any tablet will do for this.',
    link: 'https://www.amazon.com/Apple-Space-Newest-Version-Renewed/dp/B00TREI0D4',
  },
  {
    name: 'XP-PEN Artist Pro 15.6',
    description: 'For when I need more precision than my mouse to do graphics design.',
    link: 'https://www.amazon.com/XP-PEN-Artist15-6-Pro-15-6-Full-Laminated/dp/B07M5X7MH1',
  },
  {
    name: 'Boogie Board',
    description: 'For quick notes or doodling.',
    link: 'https://www.amazon.com/JONZOO-Writing-Erasable-Drawing-Electronic/dp/B07XFDZ4QJ',
  },
  {
    name: 'Moleskine Cahier Journal, Dotted, Kraft Brown',
    description: 'Sometimes I like to physically sketch wireframes.',
    link: 'https://www.amazon.com/Moleskine-Cahier-Cover-Journal-Ruled/dp/B079ZSSHW3',
  },
  {
    name: 'Artline Black Drawing System Pen, 0.1mm',
    description: 'I love these pens. I usually carry one in my pocket every day.',
    link: 'https://www.amazon.com/Artline-Drawing-System-Writing-EK-230-4PW1/dp/B07M864ZGW/',
  },
  {
    name: 'Notion',
    description: 'Great for organizing resources and personal projects.',
    link: 'https://www.notion.so/',
  },
  {
    name: 'Brave',
    description: 'All the benefits of Chrome, none of the drawbacks.',
    link: 'https://brave.com/',
  },
  {
    name: 'Visual Studio Code',
    description: 'This is my main code editor. I use it on my Windows setup as well.',
    link: 'https://code.visualstudio.com/',
  },
  {
    name: 'Zed',
    description:
      'Built with Rust by Atom devs. MacOS only. I use it exclusively for JavaScript projects.',
    link: 'https://zed.dev/',
  },
  {
    name: 'Sublime Text',
    description: 'I use this for paid client work, mainly web development.',
    link: 'https://www.sublimetext.com/',
  },
  {
    name: 'Bitwarden',
    description: 'I also have a local vault that I use KeePassXC to manage.',
    link: 'https://bitwarden.com/',
  },
  {
    name: 'Anki',
    description: 'Spaced-repetition > any study method.',
    link: 'https://ankiweb.net/',
  },
]
