export interface User {
    fullname: string,
    email: string,
    username: string
}

export interface Question {
    question: string
    answer: Answers
}

export type Data = {
    question: string,
    wanted_answers: string[],
    _id: string
}

export type AnswerStructure = {
    content: string,
    is5thRaised: boolean
}

export interface Answers {
    [placeholder: symbol | string]: AnswerStructure,

    quirky: AnswerStructure,
    serious: AnswerStructure,
    combined: AnswerStructure
}

export { }