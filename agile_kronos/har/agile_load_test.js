// Creator: WebInspector 537.36

import { sleep, group } from 'k6'
import http from 'k6/http'
import { thresholds } from 'k6';

export const options = {
  vus: 100,
  duration: '1m',
  thresholds:{
    http_req_duration: ['p(95) < 1000'],
    checks: ['rate>0.9']
  }
}

export default function main() {
  let response

  
  group('page_7 - http://agilekronos.jelastic.saveincloud.net/users/sign_in', function () {
    response = http.get('http://agilekronos.jelastic.saveincloud.net/users/sign_in', {
      headers: {
        Accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'max-age=0',
        Connection: 'keep-alive',
        Cookie:
          '_kronos_session=cUw3azZ1a1YvZHIyT2hYeDVQb0MwWFEzcklEYlNuZFhuMXBUUzNuVk96SzZaTDhrNk9XM3cxRjJHNVB6ZXYxWUhNby9kcHYzR0NVdTloUFZZd25rMFRZbnlDTW15Z1hic3lPYVRCV0l4bUFmc1dQR3BrbDB0enFkSWtQbnNjejlCTC9BMk1JVmdRWlVIdWVTZVlXaDY4Y2xHUjU2VTNsdDh0VGEvd25RR1BzeTA0Q2xLeEZ5N2pEMG40RHVXOHl0LS1CamttN2dNMkU0STJUcVBZb3JyWm5BPT0%3D--0bbbd4af28f710e5931dfba6d9247cd85e02c121',
        Host: 'agilekronos.jelastic.saveincloud.net',
        'If-None-Match': 'W/"0327ecf37a45a9a95faadf144a0bb1d3"',
        Referer: 'http://agilekronos.jelastic.saveincloud.net/',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      },
    })
    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/layout.debug-909235ae7eb5b9cb8013cf9ac14f012161989a041f49e31d7e7aefd956c1beb7.css',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/users/sign_in',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )
    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/application.debug-0007ce2b7536a7651593df08347e118273667809ce23f8674fdeb12fe2b96825.js',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/users/sign_in',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )
    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/responsive-nav.debug-1ebd452909da24c949e1b5a53c73b1e00ba370cb85cd4fa20ceb65336d35a740.js',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/users/sign_in',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )
    response = http.get('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
        Referer: 'http://agilekronos.jelastic.saveincloud.net/',
        Origin: 'http://agilekronos.jelastic.saveincloud.net',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get('http://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css', {
      headers: {
        Referer: 'http://agilekronos.jelastic.saveincloud.net/',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      },
    })
    response = http.get('https://code.jquery.com/jquery-3.6.0.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
        Referer: 'http://agilekronos.jelastic.saveincloud.net/',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get('https://code.jquery.com/ui/1.13.0/jquery-ui.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
        Referer: 'http://agilekronos.jelastic.saveincloud.net/',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/tinymce.min.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )
    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/login.debug-fc76fcac47067a973cdcf3d8e344b267cd4be0b0ed3dbe6b52bf966d75022fab.css',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/users/sign_in',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )
    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/novo_logo-783f657001dc6213b87dcf198ab2e2204c8bed9d1710100909017a7a7f722118.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/users/sign_in',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )
    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/Team%20work-amico-f132aaf96ef922f6bb96433efb8db95459180338f7675476ed4fad27c030d6c5.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/users/sign_in',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )
    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/Coworking-rafiki-338581d4d13a0ea34d67925c2e19e18257fe894eb53595645aaf3de899d807ad.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/users/sign_in',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )
    response = http.get(
      'https://sp.tinymce.com/i?aid=1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x&tna=tinymce_cloud&p=web&dtm=1667576971871&stm=1667576971871&tz=America%2FSao_Paulo&e=se&se_ca=script_load',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )
    response = http.get('https://unpkg.com/ionicons@5.5.2/dist/ionicons/p-e26ac56f.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
        Referer: 'https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js',
        Origin: 'http://agilekronos.jelastic.saveincloud.net',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Linux"',
      },
    })
    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/fundo-0183b595c63e7118a29aba95f6686fd88a90631c7c1c0752d5255d04a0e23a1f.png',
      {
        headers: {
          Referer: '',
        },
      }
    )
    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/favicon-93b4bc6d45e00b76e10489b804fa561ed4dc68673067a75ff14d4d1429479bb2.ico'
    )
  })

  group('page_8 - http://agilekronos.jelastic.saveincloud.net/users/sign_in', function () {
    response = http.post(
      'http://agilekronos.jelastic.saveincloud.net/users/sign_in',
      {
        utf8: '✓',
        authenticity_token:
          '5AMFtakHPGBk+Xo0Hou78VsZPuwAHLXKDz5fHuJaoaWY7Fo7AtavNipHJAt528rMZ/FWr6fJ9nTvF0EAyG8vDA==',
        'user[email]': 'admin@email.com',
        'user[password]': 'admin',
        commit: 'Entrar',
      },
      {
        headers: {
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'en-US,en;q=0.9',
          'Cache-Control': 'max-age=0',
          Connection: 'keep-alive',
          'Content-Type': 'application/x-www-form-urlencoded',
          Cookie:
            '_kronos_session=TjZENjRUVFU4ZXdPUytMbzVUTXphSDlyUzdwcHJEZHJkU1FtbnEzVE1BblJITDFhS2RQeGh5VzJqVngvcEIwQWt1dlMzV1pLSmtTeDV5ZjFQNGRxRk5yYll5Ny9JRklKYXlac0NDUzBQcUFIVzBTdjNJSDN2bWl3THJCZHVRdXZxOGVaMkZ5bkRuUDVqNGtKV0pnZFFMaEF4eEh3TXA4RGNtMjNXMVNKdFpQcWhBWkNyUWJwNDd4MG4rWU00a1NuLS1BSVhLRWJQS2JvdTFTMDJObnlJNDdRPT0%3D--968e2f3fb78dd5617004c6c975eafed873e49776',
          Host: 'agilekronos.jelastic.saveincloud.net',
          Origin: 'http://agilekronos.jelastic.saveincloud.net',
          Referer: 'http://agilekronos.jelastic.saveincloud.net/users/sign_in',
          'Upgrade-Insecure-Requests': '1',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('http://agilekronos.jelastic.saveincloud.net/', {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'max-age=0',
        Connection: 'keep-alive',
        Cookie:
          '_kronos_session=RXVoaHhJeFJHTWwyOCtvbEtNcTZnVlh0cmJnTGxEMXEyV253RHl6QndaKzFBd0Y3SW5iVlRZU3Y1bGNEM1B1VytQUi9VN2QvL2RlU0wyd05GUjU5SHFDelJoSEJjUDhzQWNoWUVhUWJCS0NsWTRUdWY3MW5nNjZITU1tZWI5d29oUW1ZSGpVY0dOUmF2Si9XMXlZL3hreVQyTitXUEcxZy9UU1p1cG9IUEFUR2xYczZLMFB3TDZuYkJlYlRXVG9maThocm1kenNQbDB2VlYzdDNCNTBlKzNyTzEzTTlPbnZvU2VYWXBUTHJUeVh2TjgvT1hxYUxKZ1NaWFliSmFETC0tWWZaYzZlT0FxWlhVL2pwZlZJUFdWQT09--4bc24ba3200d3f5cb4017d27f0d85f654a47239b',
        Host: 'agilekronos.jelastic.saveincloud.net',
        Referer: 'http://agilekronos.jelastic.saveincloud.net/users/sign_in',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      },
    })

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/layout.debug-909235ae7eb5b9cb8013cf9ac14f012161989a041f49e31d7e7aefd956c1beb7.css',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/application.debug-0007ce2b7536a7651593df08347e118273667809ce23f8674fdeb12fe2b96825.js',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/responsive-nav.debug-1ebd452909da24c949e1b5a53c73b1e00ba370cb85cd4fa20ceb65336d35a740.js',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js')

    response = http.get('http://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css', {
      headers: {
        Referer: 'http://agilekronos.jelastic.saveincloud.net/',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://code.jquery.com/jquery-3.6.0.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
        Referer: 'http://agilekronos.jelastic.saveincloud.net/',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get('https://code.jquery.com/ui/1.13.0/jquery-ui.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
        Referer: 'http://agilekronos.jelastic.saveincloud.net/',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/tinymce.min.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/novo_logo-783f657001dc6213b87dcf198ab2e2204c8bed9d1710100909017a7a7f722118.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/profile-no-image-3658db942c2b6d00fdd491f803ee470fc809d9316fde17626034c57c90d5a4f5.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/search-4ee1cf1a518f80d29bee21c932d5c5cabcc6202413ea97834facb9e66b72aa3f.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/initial-311d1373041554d378f7fc4d2478cbc6a576b42fb64cf35bd62107a3107471ed.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/calendar_icon-cf825896618bcd0fee4454db10c7e8ced34cdaf5c5e50f50241ae5ff4da2cd5d.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/difficulty_icon-afe465c6053a5a673f50f588aedb33cc54265f49675345c610394c76d5ed654c.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/priority_icon-9cc67d7d72b46e8688cc5588fad4f2d6ba0a09417cb53d4778a317023bd3d7a2.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/team_icon-ecdffb96eabf736d7ef615f5efea32f5c9ab2e0b8941a5d373034e4447b0d0b9.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/sprint_icon-e6f2ee6ee29dfaa9650b38ffa201de4740a5a410934c3ba975f34f53fd83b2e3.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://sp.tinymce.com/i?aid=1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x&tna=tinymce_cloud&p=web&dtm=1667576983400&stm=1667576983400&tz=America%2FSao_Paulo&e=se&se_ca=script_load',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('https://unpkg.com/ionicons@5.5.2/dist/ionicons/p-e26ac56f.js')

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/favicon-93b4bc6d45e00b76e10489b804fa561ed4dc68673067a75ff14d4d1429479bb2.ico'
    )

    response = http.get('http://agilekronos.jelastic.saveincloud.net/projects/new', {
      headers: {
        Accept: 'text/html, application/xhtml+xml',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Cookie:
          '_kronos_session=bERZM0xxL0x6ZnQyNEtvTU1OZCtKaVRHbnNmbHNmaStPMllJVU5lWlRZcFR3c0NJTmZZWjVrQXRiRkN3Vm56VkdXMzQ0aHJqRUIxVnpLaHp2Z2piT1R3SklSYXJSSW9BS29UcnVWTzFqZ1V3TnBSS21wb01pR2NaQTI1bjdVdmlXSFlDempqcHo1akJVbnVaVW10MW4rTEFSVFJtcnpPVWQ4VmE5REF2aDNXU3p0UHZqL1ZSWlZXTk9NY2d4Nmt0emRmaCtuZlI3YU1VbUJEcE1lZWFrbXhqR1pCWFhzNHNvemVoQStoMjVSST0tLTRWTW9nVVNpSGtLNnI1UzJ1Ykt0aXc9PQ%3D%3D--b13a1cd0fa894c312d887d448fc765231537af2a',
        Host: 'agilekronos.jelastic.saveincloud.net',
        Referer: 'http://agilekronos.jelastic.saveincloud.net/',
        'Turbolinks-Referrer': 'http://agilekronos.jelastic.saveincloud.net/',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      },
    })

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/projects/images/icons/favicon.ico',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_kronos_session=bERZM0xxL0x6ZnQyNEtvTU1OZCtKaVRHbnNmbHNmaStPMllJVU5lWlRZcFR3c0NJTmZZWjVrQXRiRkN3Vm56VkdXMzQ0aHJqRUIxVnpLaHp2Z2piT1R3SklSYXJSSW9BS29UcnVWTzFqZ1V3TnBSS21wb01pR2NaQTI1bjdVdmlXSFlDempqcHo1akJVbnVaVW10MW4rTEFSVFJtcnpPVWQ4VmE5REF2aDNXU3p0UHZqL1ZSWlZXTk9NY2d4Nmt0emRmaCtuZlI3YU1VbUJEcE1lZWFrbXhqR1pCWFhzNHNvemVoQStoMjVSST0tLTRWTW9nVVNpSGtLNnI1UzJ1Ykt0aXc9PQ%3D%3D--b13a1cd0fa894c312d887d448fc765231537af2a',
          Host: 'agilekronos.jelastic.saveincloud.net',
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects/new',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/themes/silver/theme.min.js',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/favicon-93b4bc6d45e00b76e10489b804fa561ed4dc68673067a75ff14d4d1429479bb2.ico'
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/projects/images/icons/favicon.ico',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Cookie:
            '_kronos_session=aitkZm1xT3QyWkpLcjZMSkgzdFlyb3NOMFdBc2gvUmpQSTMvVzBnZ2ZJR1ZZWHdjNWV3ZzBGbjdwVHZGWXliOWdwSWgyR0U3bUlXUVVzRzRYVXRPNGE5bXRqRTZFNkNzZ3lMbE5YY1Fsenh0N2Z2dW50S2pWVDJLODc0LzJVeFV2bTBRdUtXbEZ1a3dCbkZIaGRaV0V0alpscGhVWFVWZDhJVWhsVmlUVWliYkNsRitxaVJqeHFMUmVHVjRnd2Foc1F1WUJzaFNDOFVXTExxZ1NCWnhDM29uYnNJbnJJWmticExCQytQUG1JUT0tLW0yZjIxZmYvS0VRdVNYQVg2bWtLZ1E9PQ%3D%3D--0c815b0f6a33aeb0c3a06ce03ce2c1ae945ad730',
          Host: 'agilekronos.jelastic.saveincloud.net',
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects/new',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/icons/default/icons.min.js',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/plugins/undo/plugin.min.js',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/plugins/redo/plugin.min.js',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/plugins/%7C/plugin.min.js',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/plugins/formatselect/plugin.min.js',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/plugins/bold/plugin.min.js',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/plugins/italic/plugin.min.js',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/plugins/backcolor/plugin.min.js',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/plugins/removeformat/plugin.min.js',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/plugins/table/plugin.min.js',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/plugins/link/plugin.min.js',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/plugins/image/plugin.min.js',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/plugins/media/plugin.min.js',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'script',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/favicon-93b4bc6d45e00b76e10489b804fa561ed4dc68673067a75ff14d4d1429479bb2.ico'
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/skins/ui/oxide/skin.min.css',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/skins/ui/oxide/content.min.css',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'http://agilekronos.jelastic.saveincloud.net',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/skins/content/default/content.min.css',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          origin: 'http://agilekronos.jelastic.saveincloud.net',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://sp.tinymce.com/i?aid=1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x&tna=tinymce_cloud&p=web&dtm=1667577017900&stm=1667577017900&tz=America%2FSao_Paulo&e=se&se_ca=init',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://code.jquery.com/ui/1.13.0/themes/base/images/ui-icons_444444_256x240.png',
      {
        headers: {
          Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'en-US,en;q=0.9',
          Connection: 'keep-alive',
          Host: 'code.jquery.com',
          Referer: 'http://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://sp.tinymce.com/i?aid=1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x&tna=tinymce_cloud&p=web&dtm=1667577030387&stm=1667577030387&tz=America%2FSao_Paulo&e=se&se_ca=focus',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('http://agilekronos.jelastic.saveincloud.net/projects/new', {
      headers: {
        Accept: 'text/html, application/xhtml+xml',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9',
        Connection: 'keep-alive',
        Cookie:
          '_kronos_session=aitkZm1xT3QyWkpLcjZMSkgzdFlyb3NOMFdBc2gvUmpQSTMvVzBnZ2ZJR1ZZWHdjNWV3ZzBGbjdwVHZGWXliOWdwSWgyR0U3bUlXUVVzRzRYVXRPNGE5bXRqRTZFNkNzZ3lMbE5YY1Fsenh0N2Z2dW50S2pWVDJLODc0LzJVeFV2bTBRdUtXbEZ1a3dCbkZIaGRaV0V0alpscGhVWFVWZDhJVWhsVmlUVWliYkNsRitxaVJqeHFMUmVHVjRnd2Foc1F1WUJzaFNDOFVXTExxZ1NCWnhDM29uYnNJbnJJWmticExCQytQUG1JUT0tLW0yZjIxZmYvS0VRdVNYQVg2bWtLZ1E9PQ%3D%3D--0c815b0f6a33aeb0c3a06ce03ce2c1ae945ad730',
        Host: 'agilekronos.jelastic.saveincloud.net',
        'If-None-Match': 'W/"05e727046405484f8ab84a0cb6b0787b"',
        Referer: 'http://agilekronos.jelastic.saveincloud.net/projects/new',
        'Turbolinks-Referrer': 'http://agilekronos.jelastic.saveincloud.net/projects/new',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      },
    })

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/skins/ui/oxide/skin.min.css',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          'if-none-match': 'W/"dc07a66e7c08c2485940d1ff4028aa54"',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/skins/ui/oxide/content.min.css',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          'if-none-match': 'W/"6e0ab1ac5dfae9e62d762670a9837ae7"',
          origin: 'http://agilekronos.jelastic.saveincloud.net',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/skins/content/default/content.min.css',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          'if-none-match': 'W/"1da3695afc65ceca9f054bfc2cd5f7bd"',
          origin: 'http://agilekronos.jelastic.saveincloud.net',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'style',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/favicon-93b4bc6d45e00b76e10489b804fa561ed4dc68673067a75ff14d4d1429479bb2.ico'
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/favicon-93b4bc6d45e00b76e10489b804fa561ed4dc68673067a75ff14d4d1429479bb2.ico'
    )

    response = http.get(
      'https://sp.tinymce.com/i?aid=1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x&tna=tinymce_cloud&p=web&dtm=1667577035163&stm=1667577035163&tz=America%2FSao_Paulo&e=se&se_ca=init',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )
  })

  group('page_9 - http://agilekronos.jelastic.saveincloud.net/projects', function () {
  
    function getStringCode(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }
    var getString = getStringCode(6);
    var d = new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1; 
    var curr_year = d.getFullYear();
    var curr_hour = d.getHours();
    var curr_minute = d.getMinutes();
    var curr_second = d.getSeconds();
    var curr_date_time = "" + curr_date + "" + curr_month + "" + curr_year + "" + curr_hour + "" + curr_hour + "" + curr_minute + "" + curr_second
  
  response = http.post(
      'http://agilekronos.jelastic.saveincloud.net/projects',
      {
   
        utf8: '✓',
        authenticity_token:
        'oXNbjzGNniAT+x2rvkh1hK8Il5zqfuM2tohJ+YnQiVJJ+obtOtafx0y+1aoMdQHzyqlQrp4lQZBjxY3eLjvDRQ==',
        'project[name]': curr_date_time,
        'project[initial]': getString,
        'project[priority_id]': '1',
        'project[difficulty]': '1',
        'project[start_date]': '05/11/2022',
        'project[end_date]': '24/11/2022',
        'project[description]': '<p>Teste</p>',
      },
      {
        headers: {
          Accept:
            'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
          'Accept-Encoding': 'gzip, deflate',
          'Accept-Language': 'en-US,en;q=0.9',
          'Cache-Control': 'max-age=0',
          Connection: 'keep-alive',
          'Content-Type': 'application/x-www-form-urlencoded',
          Cookie:
            '_kronos_session=aitkZm1xT3QyWkpLcjZMSkgzdFlyb3NOMFdBc2gvUmpQSTMvVzBnZ2ZJR1ZZWHdjNWV3ZzBGbjdwVHZGWXliOWdwSWgyR0U3bUlXUVVzRzRYVXRPNGE5bXRqRTZFNkNzZ3lMbE5YY1Fsenh0N2Z2dW50S2pWVDJLODc0LzJVeFV2bTBRdUtXbEZ1a3dCbkZIaGRaV0V0alpscGhVWFVWZDhJVWhsVmlUVWliYkNsRitxaVJqeHFMUmVHVjRnd2Foc1F1WUJzaFNDOFVXTExxZ1NCWnhDM29uYnNJbnJJWmticExCQytQUG1JUT0tLW0yZjIxZmYvS0VRdVNYQVg2bWtLZ1E9PQ%3D%3D--0c815b0f6a33aeb0c3a06ce03ce2c1ae945ad730',
          Host: 'agilekronos.jelastic.saveincloud.net',
          Origin: 'http://agilekronos.jelastic.saveincloud.net',
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects/new',
          'Upgrade-Insecure-Requests': '1',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('http://agilekronos.jelastic.saveincloud.net/projects', {
      headers: {
        Accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'en-US,en;q=0.9',
        'Cache-Control': 'max-age=0',
        Connection: 'keep-alive',
        Cookie:
          '_kronos_session=enpkcHlFQXdtY2RQZkp4eUROS1djemI4cFNiMlFnR2h6TDFVZEt2VDFIR0FqVEV2TGpzZm9wOUNpK3NUWWRkMWNFVnBxQzdVZXd3ZkhYM0hHTFN3S1hmME5NS0U3Ylg1RUxDa010SzFxWXprZWYrazg3RzUwaFdMbnhkSS9QTTdkUHh4WS8veWticFlMRjVYZkdxQlJoQlpLT0pmRVRjc0xDSXlZb2J1Z0pZNnNqSnVzcVlnT0JDMWJQSjhhdzNqU1NBZitlNU9HT1pJNjk0bkl4Y1VXaU1ncHUyWUNoQnRMTWdpV0VKWWVSb05welRkUkg4RVg2VDVVUGJwT2N4TGE0ZWJiRC9wLzRNRExCSURGOUorbHYyM1p0MHd5WjVvaHV2L0h3MzNLZlFYU3djR2RQNk1wVFk0UG5ZWHQ2cG9Bbm5RN0RuOCtJajVFSG5MS3FuSnVnPT0tLXFwTWhlQUludXUwbStXWVY3bmVGaEE9PQ%3D%3D--73cee89cca8858cd65a6c3adac416185ddc9a11e',
        Host: 'agilekronos.jelastic.saveincloud.net',
        Referer: 'http://agilekronos.jelastic.saveincloud.net/projects/new',
        'Upgrade-Insecure-Requests': '1',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      },
    })

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/layout.debug-909235ae7eb5b9cb8013cf9ac14f012161989a041f49e31d7e7aefd956c1beb7.css',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/application.debug-0007ce2b7536a7651593df08347e118273667809ce23f8674fdeb12fe2b96825.js',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/responsive-nav.debug-1ebd452909da24c949e1b5a53c73b1e00ba370cb85cd4fa20ceb65336d35a740.js',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js')

    response = http.get('http://code.jquery.com/ui/1.13.0/themes/base/jquery-ui.css', {
      headers: {
        Referer: 'http://agilekronos.jelastic.saveincloud.net/',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
      },
    })

    response = http.get('https://code.jquery.com/jquery-3.6.0.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
        Referer: 'http://agilekronos.jelastic.saveincloud.net/',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get('https://code.jquery.com/ui/1.13.0/jquery-ui.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
        Referer: 'http://agilekronos.jelastic.saveincloud.net/',
        'sec-ch-ua-mobile': '?0',
        'User-Agent':
          'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        'sec-ch-ua-platform': '"Linux"',
      },
    })

    response = http.get(
      'https://cdn.tiny.cloud/1/1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x/tinymce/5.10.6-132/tinymce.min.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          Referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua-mobile': '?0',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
          'sec-ch-ua-platform': '"Linux"',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/novo_logo-783f657001dc6213b87dcf198ab2e2204c8bed9d1710100909017a7a7f722118.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/profile-no-image-3658db942c2b6d00fdd491f803ee470fc809d9316fde17626034c57c90d5a4f5.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/search-4ee1cf1a518f80d29bee21c932d5c5cabcc6202413ea97834facb9e66b72aa3f.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/initial-311d1373041554d378f7fc4d2478cbc6a576b42fb64cf35bd62107a3107471ed.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/calendar_icon-cf825896618bcd0fee4454db10c7e8ced34cdaf5c5e50f50241ae5ff4da2cd5d.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/difficulty_icon-afe465c6053a5a673f50f588aedb33cc54265f49675345c610394c76d5ed654c.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/priority_icon-9cc67d7d72b46e8688cc5588fad4f2d6ba0a09417cb53d4778a317023bd3d7a2.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/team_icon-ecdffb96eabf736d7ef615f5efea32f5c9ab2e0b8941a5d373034e4447b0d0b9.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/sprint_icon-e6f2ee6ee29dfaa9650b38ffa201de4740a5a410934c3ba975f34f53fd83b2e3.png',
      {
        headers: {
          Referer: 'http://agilekronos.jelastic.saveincloud.net/projects',
          'User-Agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get(
      'https://sp.tinymce.com/i?aid=1gti6vv8xhfz31p7cvmfjste6wojlysx8ebudo4umd24bd0x&tna=tinymce_cloud&p=web&dtm=1667577035339&stm=1667577035339&tz=America%2FSao_Paulo&e=se&se_ca=script_load',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate, br',
          'accept-language': 'en-US,en;q=0.9',
          referer: 'http://agilekronos.jelastic.saveincloud.net/',
          'sec-ch-ua': '"Chromium";v="106", "Google Chrome";v="106", "Not;A=Brand";v="99"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Linux"',
          'sec-fetch-dest': 'image',
          'sec-fetch-mode': 'no-cors',
          'sec-fetch-site': 'cross-site',
          'user-agent':
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
        },
      }
    )

    response = http.get('https://unpkg.com/ionicons@5.5.2/dist/ionicons/p-e26ac56f.js')

    response = http.get(
      'http://agilekronos.jelastic.saveincloud.net/assets/images/favicon-93b4bc6d45e00b76e10489b804fa561ed4dc68673067a75ff14d4d1429479bb2.ico'
    )
  })

  // Automatically added sleep
  sleep(1)
}
