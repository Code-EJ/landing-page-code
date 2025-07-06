import { useCallback } from "react"

export type VideoPlayerProperties = {
    video?: string
}

export function VideoTitlebarButton() {
    return (
        <div 
            className="rounded-full bg-black w-4 h-4 hover:bg-alt-accent"
        />
    )
}

export function VideoTitlebar() {
    return (
        <div 
            className="w-full h-8 pr-2 bg-[#d6d6e3] flex items-center justify-end gap-2 rounded-tl-2xl rounded-tr-2xl"
        >
            <VideoTitlebarButton />
            <VideoTitlebarButton />
            <VideoTitlebarButton />
        </div>
    )
}

export function VideoPlayer({ video }: VideoPlayerProperties) {
    return (
        <div className="border-2 shadow-xl border-[#d6d6e3] rounded-2xl">
            <VideoTitlebar />
            <div className="w-130 h-70">
                <video
                    className="w-full h-full rounded-2xl"
                    controls
                >
                    <source
                        className="w-full h-full rounded-2xl"
                        src={ video }
                        type="video/mp4"/>
                    Your browser does not support video
                </video>
            </div>
        </div>
    )
}