"use client"

import { useCounter } from "@/hooks/use-counter"

interface AnimatedCounterProps {
  end: number
  duration?: number
  decimals?: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function AnimatedCounter({
  end,
  duration = 5000,
  decimals = 0,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const { count, ref } = useCounter({
    end,
    duration,
    decimals,
    suffix,
    prefix,
  })

  return (
    <div ref={ref} className={className}>
      {count}
    </div>
  )
}
