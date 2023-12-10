#!/usr/bin/env fish

# Path to the file containing URLs
set -l url_file 'input.txt'

# Function to download a video
function download_video
    set -l url $argv[1]
    set -l index $argv[2]
    # Check if the file .mp4 or .mp4.part already exists
    if not test -f "$index.mp4" -o -f "$index.mp4.part"
        yt-dlp -f best -o "$index.mp4" "$url"
    else
        echo "[DOWNLOADER] File $index.mp4 already exists, skipping download."
    end
end

# Main loop
set -l count 1
cat $url_file | while read -l url
    # Download the video if it doesn't already exist
    download_video $url $count

    # Increment the counter
    set count (math $count + 1)
end
