import { useEffect } from "react"


export default function TimeLeft({
    timeSince,
    maxTime,
    timeExpired,
}) {
    const timeLeft = Math.max(maxTime - (timeSince || 0), 0)

    useEffect(() => {
        if (timeLeft === 0) {
            timeExpired()
        }
    }, [timeLeft])
    const mins = Math.max(Math.floor(timeLeft / 60),0)
    const secs = Math.max(timeLeft - mins * 60, 0)
    
    const time = `${mins}:${secs < 10 ? "0" : ""}${secs}`
    
    console.log('>>> #t', timeSince, timeLeft, time)
    return (
        <h2>Time to deductions open: {time}</h2>
    )
}