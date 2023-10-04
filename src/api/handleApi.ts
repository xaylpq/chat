import type { IConversationItem } from "@/stores/chatStore"

export const fetchUsers = () => {
    return [
        {
            convId: '1',
            convName: 'Alex',
            imgURL: 'https://img3.hotnessrater.com/4028562/alex-grey.jpg?w=4000&h=6000',
            time: '11:11',
            lastMessage: {
                date: '12:10',
                author: 'Ahkin',
                message: 'Hi! Как тебе новый чат?',
                count: 1
            },
            sended: true,
            viewed: false,
            muted: false
        },
        {
            convId: '2',
            convName: 'Zoe',
            time: '11:12',
            lastMessage: {
                date: '12:12',
                author: 'A.Ptushkin',
                message: 'Hi! Как тебе новый чат? gdfgregdfgsdvhdsfd',
                count: 9
            },
            sended: true,
            viewed: false,
            muted: false
        },
        {
            convId: '3',
            convName: 'Pluto Malov',
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
                message: 'Привет! Как тебе новый чат? Урааа!!! Как круто!',
                count: 99
            },
            imgURL: 'https://imgbb.ru/frontend/users/avatars/2022-08-10/d4gh0y7h0gc9awtw4yojj6q0nx6dyi3gm8h.jpg',
            time: '11:14',
            sended: true,
            viewed: false,
            muted: true,
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

