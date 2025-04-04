"use client"

import { useState, useEffect, useRef } from "react"

interface UseTypewriterProps {
    words: string[]
    loop?: boolean
    delaySpeed?: number
    typeSpeed?: number
    deleteSpeed?: number
}

export function useTypewriter({
    words = [],
    loop = false,
    delaySpeed = 1500,
    typeSpeed = 80,
    deleteSpeed = 50,
}: UseTypewriterProps) {
    const [text, setText] = useState("")
    const [isDeleting, setIsDeleting] = useState(false)
    const [wordIndex, setWordIndex] = useState(0)
    const [typingSpeed, setTypingSpeed] = useState(typeSpeed)
    const isMounted = useRef(false)

    useEffect(() => {
        isMounted.current = true
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {
        if (!words.length || !isMounted.current) return

        const currentWord = words[wordIndex]

        const handleTyping = () => {
            if (!isMounted.current) return

            if (isDeleting) {
                // Delete text
                setText(currentWord.substring(0, text.length - 1))
                setTypingSpeed(deleteSpeed)
            } else {
                // Type text
                setText(currentWord.substring(0, text.length + 1))
                setTypingSpeed(typeSpeed)
            }

            // Handle completion of typing or deleting
            if (!isDeleting && text === currentWord) {
                // Delay before starting to delete
                setTimeout(() => {
                    if (isMounted.current) setIsDeleting(true)
                }, delaySpeed)
            } else if (isDeleting && text === "") {
                setIsDeleting(false)
                // Move to next word or loop back to the first
                setWordIndex((prev) => {
                    if (prev === words.length - 1) {
                        return loop ? 0 : prev
                    }
                    return prev + 1
                })
            }
        }

        const timer = setTimeout(handleTyping, typingSpeed)
        return () => clearTimeout(timer)
    }, [words, text, isDeleting, wordIndex, typingSpeed, delaySpeed, loop, typeSpeed, deleteSpeed])

    return [text]
}

