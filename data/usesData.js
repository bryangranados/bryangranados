import { currentDayName } from '@/lib/utils/dateUtils'
import dynamic from 'next/dynamic'

export const USES = [
  {
    name: 'Custom PC Rig (Windows/Linux)',
    description: 'Intel i9 - RTX 3080 - 64GB RAM - 2TB SSD, 2TB HDD - Corsair 4000D',
  },
  {
    name: 'MacBook Air 13"',
    description: 'M1 - 8-core CPU, 8-core GPU. 8 GB RAM, 512GB SSD',
    link: 'https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5R2GQW',
  },
  {
    name: 'Logitech MX Vertical',
    description: 'I recommend this mouse to everyone looking to lessen/prevent wrist strain.',
    link: 'https://amzn.to/3ww4Qu3',
  },
  {
    name: 'Logitech G502 X Plus, White',
    description: 'This is my gaming mouse. Smooth, light, and ergonomic.',
    link: 'https://www.amazon.com/dp/B092CDD7HH',
  },
  {
    name: 'Shurikey 75% Wireless Mechanical Keyboard',
    description: 'The volume control wheel was the selling point for me. EC V2 Rose switches.',
    link: 'https://www.amazon.com/Shurikey-Keyboard-Wireless-Compact-Mechanical/dp/B09V6K92J4',
  },
  {
    name: 'HUION Wireless Mini Keydial KD100',
    description: 'Remedies the lack of a numberpad from using a small keyboard.',
    link:
      'https://www.amazon.com/HUION-One-Handed-Customizable-Animation-Illustration/dp/B092HTZZWM',
  },
  {
    name: 'nuphy Air75 75% Wireless Mechanical Keyboard',
    description: 'I use this with my MacBook. Gateron Red switches.',
    link:
      'https://www.amazon.com/Air75-Mechanical-Connection-Compatible-Systems-Gateron/dp/B09KG6MSVH',
  },
  {
    name: 'Audeze Penrose X',
    description: 'Gaming headphones. There are EQ presets specifically for footsteps.',
    link: 'https://www.amazon.com/Audeze-Penrose-Wireless-Low-Latency-Bluetooth/dp/B08D9M6FZK',
  },
  {
    name: 'Sennheiser HD 599',
    description: 'For music and calls. Beautiful design.',
    link: 'https://www.amazon.com/dp/B01L1IICR2',
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
    name: 'XP-PEN Artist Pro 15.6',
    description:
      'I have it right below my main monitor. I use it for client presentations to draw on.',
    link: 'https://www.amazon.com/XP-PEN-Artist15-6-Pro-15-6-Full-Laminated/dp/B07M5X7MH1',
  },
  {
    name: 'Moleskine Cahier Journal, Dotted, Kraft Brown',
    description: 'For lo-fi wireframe sketches.',
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
    name: 'Arc',
    description: 'All the benefits of Chrome with less of the drawbacks.',
    link: 'https://arc.net/',
  },
  {
    name: 'Visual Studio Code',
    description: 'This is my main code editor. I use it on my Linux distro.',
    link: 'https://code.visualstudio.com/',
  },
  {
    name: 'Zed',
    description: 'Built with Rust by Atom devs. MacOS only. I use it exclusively for work.',
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
