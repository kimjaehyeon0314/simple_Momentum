const quotes = [
    {
        quote: "성공은 준비와 기회가 만날 때 일어나는 것이다.",
        author: "Oprah Winfrey"

    },
    {
        quote: "성공은 최고의 실패를 이기는 기술이다.",
        author: "Tom Watson"

    },
    {
        quote:"가장 어두운 시기에 나타나는 별은 가장 밝은 별이다.",
        author: "Dalai Lama"

    },
    {
        quote: "세상을 변화시키려면 먼저 스스로를 변화시켜라.",
        author: "Mahatma Gandhi"

    },
    {
        quote: "성공은 자신의 열정을 따라가는 용기에서 비롯된다.",
        author: "Walt Disney"

    },
    {
        quote: "목표를 향해 진전하지 않으면 스스로가 후퇴한다.",
        author: "Albert Einstein"

    },
    {
        quote: "자신을 믿고 시작하면 절반은 이미 성공한 것이다.",
        author: "Nelson Mandela"

    },
    {
        quote: "지식은 힘의 원천이다.",
        author: "Francis Bacon"

    },
    {
        quote: "내일에 대한 계획이 없는 사람은 이미 실패한 것이다.",
        author: "Winston Churchill"

    },
    {
        quote: "성공은 작은 노력들의 연속이다.",
        author: "Robert Collier"

    }
]

const quote = document.querySelector("span:first-child");
const author = document.querySelector("span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = "-" + todaysQuote.author + "-"