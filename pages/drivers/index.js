import { useEffect } from "react"
import { useRouter } from "next/router"

export default function drivers() {
    const router = useRouter();
    useEffect(() => {
        router.push('/drivers/1')
    })
  return (
    <div></div>
  )
}
