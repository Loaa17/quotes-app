
function getQuote(){

    
var quotes = [


    {
        quote : '“Be yourself; everyone else is already taken.”',
        author : "― Oscar Wilde",
    },
    
    {
        quote : '“So many books, so little time.”',
        author : "― Frank Zappa",
    },
    
    {
        quote : '“You only live once, but if you do it right, once is enough.”',
        author : "― Mae West",
    },
    
    {
        quote : '“Be the change that you wish to see in the world.”',
        author : "― Mahatma Gandhi",
    },
    
    {
        quote : '“A friend is someone who knows all about you and still loves you.”',
        author : "― Elbert Hubbard",
    },
    
    
    ];

    var x = Math.floor(Math.random()*quotes.length);

   

document.getElementById("quoteOutput").innerHTML= quotes[x].quote;

document.getElementById("authorOutput").innerHTML= quotes[x].author;

}

