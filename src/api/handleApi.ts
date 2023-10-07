import type { IConversationItem, IConversationMessage } from "@/stores/chatStore"

export const fetchConversations = () => {
    return [
        {
            convId: '1',
            convName: 'Alex',
            imgURL: 'https://img3.hotnessrater.com/4028562/alex-grey.jpg?w=4000&h=6000',
            time: '11:11',
            lastMessage: {
                date: '12:10',
                author: 'Ahkin',
                message: 'Hi! Как тебе новый чат?'
            },
            sended: true,
            viewed: false,
            muted: false,
            count: 1
        },
        {
            convId: '2',
            convName: 'Zoe',
            time: '11:12',
            lastMessage: {
                date: '12:12',
                author: 'A.Ptushkin',
                message: 'Hi! Как тебе новый чат? Вроде бы очень интересно'
            },
            sended: true,
            viewed: false,
            muted: false,
            count: 9
        },
        {
            convId: '3',
            convName: 'Pluto Malov fsjkhdflkjsdhfnsk dfgnsdlkfulnglsjdmhflkjsdgnfnhsldkufmhsldukfhmk',
            time: '11:13',
            sended: true,
            viewed: true,
            muted: true
        },
        {
            convId: '4',
            convName: 'xaylpq',
            lastMessage: {
                date: '12:15',
                author: 'A.Pushkin',
                message: 'Привет! Как тебе новый чат? Урааа!!! Как круто!'
            },
            imgURL: 'https://imgbb.ru/frontend/users/avatars/2022-08-10/d4gh0y7h0gc9awtw4yojj6q0nx6dyi3gm8h.jpg',
            time: '11:14',
            sended: true,
            viewed: false,
            muted: true,
            count: 99
        },
        {
            convId: '5',
            convName: 'Niki Rourgh',
            imgURL: 'https://triviaboss.com/static/53d0183b58c92f03ac8486f360b1ff4c/dbdac/qbeafc1c9-37fe-4ce0-8ae2-2084e352a5c4_042022_M_qUMAvQf.jpg',
            time: '11:15',
            sended: true,
            viewed: false,
            muted: false
        },
    ] as unknown as IConversationItem[];
}

export const fetchConversation = (id: string) => {
    console.log(id);
    return [
        {
            id: 'cm.1',
            time: Date.now(),
            author: '1',
            message: 'Всем привет! Как вам новый чат?',
            sended: true,
            viewed: true
        },
        {
            id: 'cm.2',
            time: Date.now(),
            author: '2',
            message: 'Прикольно! Но очень сырой интерфейс',
            sended: true,
            viewed: true
        },
        {
            id: 'cm.3',
            time: Date.now(),
            author: '3',
            message: 'Наверное скоро все поправят',
            sended: true,
            viewed: false
        },
        {
            id: 'cm.4',
            time: Date.now(),
            author: '4',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla quasi saepe obcaecati odit, soluta velit maiores, neque adipisci culpa ratione. Iure fugiat modi a perspiciatis minima veritatis, sequi porro.',
            sended: false,
            viewed: false
        },
        {
            id: 'cm.5',
            time: Date.now(),
            author: '5',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla quasi saepe obcaecati odit, soluta velit maiores, neque adipisci culpa ratione. Iure fugiat modi a perspiciatis minima veritatis, sequi porro.',
            sended: false,
            viewed: false
        },
        {
            id: 'cm.6',
            time: Date.now(),
            author: '6',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla quasi saepe obcaecati odit, soluta velit maiores, neque adipisci culpa ratione. Iure fugiat modi a perspiciatis minima veritatis, sequi porro.',
            sended: false,
            viewed: false
        },
        {
            id: 'cm.7',
            time: Date.now(),
            author: '7',
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nulla quasi saepe obcaecati odit, soluta velit maiores, neque adipisci culpa ratione. Iure fugiat modi a perspiciatis minima veritatis, sequi porro.',
            sended: false,
            viewed: false
        }
    ] as unknown as IConversationMessage[];
}

