'use client';

import { Typewriter } from 'react-simple-typewriter'

export default function TextWriter({ words }: { words: string[] }) {
    return (
        <Typewriter
            words={words}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
        />
    )
}