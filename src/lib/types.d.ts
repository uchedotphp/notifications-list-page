export interface NNotification {
    id: number
    imgUrl: string
    userFullName: string
    category: 'post' | 'follow' | 'group' | 'message' | 'picture'
    type?: string
    message: string
    read: boolean
}