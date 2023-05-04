import { NNotification } from './types'
export const notifications: NNotification[] = [
    {
        id: 1,
        imgUrl: 'avatar-mark-webber.webp',
        userFullName: 'Mark Webber',
        category: 'post',
        message: 'My first tournament today',
        read: false
    },
    {
        id: 2,
        imgUrl: 'avatar-angela-gray.webp',
        userFullName: 'Angela Grey',
        category: 'follow',
        message: '',
        read: false
    },
    {
        id: 3,
        imgUrl: 'avatar-jacob-thompson.webp',
        userFullName: 'Jacob Thompson',
        category: 'group',
        type: 'joined',
        message: 'Chess Club',
        read: false
    },
    {
        id: 4,
        imgUrl: 'avatar-rizky-hasanuddin.webp',
        userFullName: 'Rizky Hasnuddin',
        category: 'message',
        message: 'Hello, thank you for setting up the Chess Club. I\'ve been a member for a few weeks now and i\'m already having lots of fun and improving my game.',
        read: false
    },
    {
        id: 5,
        imgUrl: 'avatar-kimberly-smith.webp',
        userFullName: 'Kimberly Smith',
        category: 'picture',
        message: '',
        read: false
    },
    {
        id: 6,
        imgUrl: 'avatar-nathan-peterson.webp',
        userFullName: 'Nathan Peterson',
        category: 'post',
        message: '5 end-game strategies to increase your win rate',
        read: false
    },
    {
        id: 7,
        imgUrl: 'avatar-anna-kim.webp',
        userFullName: 'Ann Kim',
        category: 'group',
        type: 'left',
        message: 'Chess Club',
        read: false
    },

]