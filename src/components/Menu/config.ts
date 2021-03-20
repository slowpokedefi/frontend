import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x62A9B39e3F851dE684954e0b013997A96De1f7C8',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/add/BNB/0x62A9B39e3F851dE684954e0b013997A96De1f7C8',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Gym',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x62A9B39e3F851dE684954e0b013997A96De1f7C8',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x62A9B39e3F851dE684954e0b013997A96De1f7C8',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/slowpokedefi/',
      },
      {
        label: 'Medium',
        href: 'https://slowpokefinance.medium.com/',
      },
    ],
  },
]

export default config
