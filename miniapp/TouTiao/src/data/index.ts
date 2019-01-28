import { fly } from "./api";

export let getSetting = () => {
  return fly.request('https://m.toutiao.com/pwa/api/wxapp/settings/?extra=9PS4Lq6mY%2FZrv6vuAn425pm0R7GQW8IezyXcUAVKvEYOqPityCrgZqCgBIs2PwMJvvdLRE5IHaNgVpgO%2BTWJ6rDi%2FcysD6rD7XGXtvhJLKitFv9I3XESm5gmgKUMRWtyTUY2mc1P1licWBVl2s6O%2FLh43RhfXHmRtz6%2FEQp3ZsEMGBI3NhpHSdU0jzd4gaTUJOJ0ZIUSq61w4GNX%2BAAJCpyfoVNBRyfICcWXIGg5H%2FNV1qsjpEgFIrOdyvM%2BolhU5zKdtfTHfSoUCmRXDQSIWUlReTQhf0eHgPt0Ga4zicsIZulUtUdiGAXOVPLZJm8dNovFFssIIlmulovcYO3TmFXBclsQF8MTfr%2F0fnvaeeP96R1jblUNd2lvSaXxxn%2F0iHf%2F0Xz%2BLx1rWux1zPnidVNhfwCX6P%2FgdhD4IszaqZSWWxU1t86%2FOmcyfA8Cp9hJJQrQ4Sz6Tt%2Bb77RV5SVlh235B4R6wXEZbI3jX08VBxW%2FNg33nAxKMxBFy7I653YclxrBm0O4ScfV5nXtI%2BlnBj3RTQnVK57Xr%2BbC8Ph1WW42OQszNCs5DHJQL%2FVbVs8N2ER9oX1O%2B5bxQVDMznA%2FmhLQbzh7%2BUyYaYpJL1XVGQSmzbSIU7ZwJ%2Fm60hzksXcCefLX9ka7iNdKj2I3DyABxzYvA4fseqMBzEQoIEriQekcUKdeM6ZTZ3oRBtptl9gluHjdGF9ceZG3Pr8RCndmwRApLOjgRFIZEbd2aVqk839G9vcqj34%2BqTjd1cj5SgeR%2B9D5YZFgqgiC%2BOSH02CW0EOnRzWPb9rU2%2B9eYAPrYR%2FN3QZ1lc2epuJy7UysXELgCjDI8tQHYl%2FoGc2ChQ6qEnPyZQgy9Pn7ZGij6dkrLac9HCM7QD3NkB1qrXs92HDvANBjvNUaCIyrCGZZE4jDNGi3%2FSFlkF5D3U7gieNw3ag6V7VHYdHqRKfHbyp8Upkm')
}

export let getNewsList = (url) => {
  // console.log(url);
  return fly.request(url)
}

export let getDetailList = (id) => {
  // console.log('id...', id);
  return fly.request(`https://m.toutiao.com/pwa/api/wxapp/info/${id}/`)
}