const questionListParent = document.querySelector('.questions');


const questionList = [{
        title: 'Question One',
        body: 'Question One Body',
        vote: 0
    },
    {
        title: 'Question Two',
        body: 'Question Two Body',
        vote: 5
    },
    {
        title: 'Question Three',
        body: 'Question Three Body',
        vote: 2
    },
    {
        title: 'Question Four',
        body: 'Question Four Body',
        vote: 4
    },
    {
        title: 'Question Five',
        body: 'Question Five Body',
        vote: 0
    },
]


questionList.map(res => {
    let question = new Question(res.title, res.body, res.vote);
    question.mount(questionListParent);
})

const arr = [1,3,5,6,7,8,8];



arr.map(x => console.log(x));
let res = arr.filter(x => x > 5);
// console.log(res);




