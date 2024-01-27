# Nutror Video Downloader

## Disclaimers
> ⚠️ This is a personal project, I'm not affiliated with Nutror in any way.

> ⚠️ Use at your own risk, crawling the website and downloading videos may be against their terms of service.

## Requirements
- Firefox
- [The M3U Stream Detector](https://addons.mozilla.org/pt-BR/firefox/addon/the-m3u8-stream-detector/) Firefox extension
- Fish shell
- [yt-dlp](https://github.com/yt-dlp/yt-dlp)

## Running

- Open course page such as `https://course.nutror.com/curso/AAABBBCCC/aula/0000`
- Open Firefox console (F12)
- Check if the extension is enabled and showed a "1" on the top right corner
- Copy, paste and run the command present on `open_all_urls.js`
- Wait for all videos to load, see progress on the console
- Copy URLs using the extension and place them on the `input.txt` file
- Run `fish ./download.fish`
- You may run multiple instances of the script to speed up the download process