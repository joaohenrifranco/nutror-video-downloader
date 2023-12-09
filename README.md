# Nutror Video Downloader

## Requirements
- Firefox
- [The M3U Stream Detector](https://addons.mozilla.org/pt-BR/firefox/addon/the-m3u8-stream-detector/) Firefox extension
- Fish shell

## Running

- Open course page such as `https://course.nutror.com/curso/AAABBBCCC/aula/0000`
- Open Firefox console (F12)
- Check if the extension is enabled and showed a "1" on the top right corner
- Copy, paste and run the command present on `open_all_urls.js`
- Wait for all videos to load, see progress on the console
- Copy URLs using the extension and place them on the `input.txt` file
- Run `fish ./download.fish` 