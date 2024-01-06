import { useRouter } from 'next/router'

export default function FeedbackView() {
    const id = useRouter().query.id
    return id
}